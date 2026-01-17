
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

// --- PRODUCTION SECURITY MIDDLEWARE ---

// 1. Security Headers (Helmet)
app.use(helmet());

// 2. Trust Proxy (Required if behind Nginx/Load Balancer)
app.set('trust proxy', 1);

// 3. Rate Limiting (DDoS Protection / Spam Prevention)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // Strict limit per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many requests. Please try again later.' }
});

// 4. CORS Configuration (Dynamic Origin)
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:3000'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 5. Body Parsing with Limits
app.use(express.json({ limit: '10kb' })); // Prevent large payload attacks

// --- DATABASE & LOGIC ---

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000,
});
const dbName = process.env.DB_NAME || 'elite_medical_db';

// Validation Helpers
const isValidPhone = (phone) => {
  // Basic international format or US format validation
  const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  // Allow simple cleaning for flexibility
  const cleaned = phone.replace(/[^0-9+]/g, '');
  return cleaned.length >= 10 && cleaned.length <= 15;
};

const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return str.replace(/[^\w\s@.-]/gi, '').trim(); // Remove potential injection chars
};

async function bootstrap() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const appointments = db.collection('appointments');
    
    // Create indexes for performance
    await appointments.createIndex({ timestamp: -1 });

    console.log(`[SYSTEM] Database Connected: ${dbName}`);

    // --- ENDPOINTS ---

    // Health Check (For Load Balancers)
    app.get('/health', async (req, res) => {
      try {
        await db.command({ ping: 1 });
        res.json({ status: 'operational', db: 'connected', timestamp: new Date() });
      } catch (e) {
        res.status(503).json({ status: 'degraded', db: 'disconnected' });
      }
    });

    // Clinical Intake Endpoint
    app.post('/api/appointments', limiter, async (req, res) => {
      try {
        const { fullname, phone, note } = req.body;

        // Strict Validation
        if (!fullname || typeof fullname !== 'string' || fullname.length < 2) {
          return res.status(422).json({ success: false, error: 'Invalid name provided.' });
        }

        if (!phone || !isValidPhone(phone)) {
          return res.status(422).json({ success: false, error: 'Invalid contact number format.' });
        }

        const intakeRecord = {
          fullname: sanitizeInput(fullname).substring(0, 100),
          phone: sanitizeInput(phone).substring(0, 20),
          note: note ? note.trim().substring(0, 500) : '', // Cap note length
          status: 'pending_triage',
          riskScore: 0, // Placeholder for AI logic
          timestamp: new Date(),
          metadata: {
            ip: req.ip,
            userAgent: req.get('User-Agent')
          }
        };

        const result = await appointments.insertOne(intakeRecord);
        
        console.log(`[INTAKE] New Record ID: ${result.insertedId}`);

        return res.status(201).json({
          success: true,
          message: 'Secure transmission complete.',
          trackingId: result.insertedId
        });

      } catch (err) {
        console.error('[ERROR] Intake Failure:', err);
        res.status(500).json({ success: false, error: 'Internal secure transmission error.' });
      }
    });

    app.listen(port, () => {
      console.log(`[SYSTEM] Server Active on Port ${port}`);
    });

  } catch (err) {
    console.error('[CRITICAL] Startup Failure:', err);
    process.exit(1);
  }
}

// Graceful Shutdown
process.on('SIGTERM', async () => {
  console.log('[SYSTEM] Shutting down...');
  await client.close();
  process.exit(0);
});

bootstrap();
