
import React from 'react';

export const Placeholder: React.FC<{ text: string }> = ({ text }) => (
  <span className="placeholder-text">{text}</span>
);
