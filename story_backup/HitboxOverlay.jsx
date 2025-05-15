// src/components/LandingPage.jsx

import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div
        style={{
          margin: '1rem',
          padding: '1rem',
          background: 'red',
          color: 'white',
          fontWeight: 'bold',
          zIndex: 99,
          position: 'relative',
        }}
      >
        Test Button (no routing)
      </div>
    </div>
  );
}

export default LandingPage;
