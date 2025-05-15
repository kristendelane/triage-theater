// src/components/LandingPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Clickable area for the wheel */}
      <div
        className="clickable-wheel"
        onClick={() => navigate('/story-selector')}
      >
        Spin the Wheel of Medical Madness
      </div>

      {/* Clickable area for the call button */}
      <div
        className="clickable-call-button"
        onClick={() => navigate('/enter-the-madness')}
      >
        <div className="sticky-note">
          How Madness Began — Enter Here...
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
