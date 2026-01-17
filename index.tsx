
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './frontend/App';

// Production Error Boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Critical Application Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#0f172a', 
          color: 'white',
          fontFamily: 'sans-serif' 
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>System Malfunction</h1>
          <p style={{ opacity: 0.7 }}>The clinical terminal encountered a critical error.</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ 
              marginTop: '2rem', 
              padding: '0.75rem 1.5rem', 
              background: '#2563eb', 
              color: 'white', 
              border: 'none', 
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Reboot Terminal
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
