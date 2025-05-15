// src/components/LandingPage.jsx

import React from 'react';
import HitboxOverlay from './HitboxOverlay';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <HitboxOverlay />

      <div
        className="clickable-wheel"
        onClick={() => navigate('/story-selector')}
      >
        Spin the Wheel of Medical Madness
      </div>

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
