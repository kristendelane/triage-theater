import React from 'react';
import HitboxOverlay from './HitboxOverlay';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <img
        src="/assets/skeleton-hitboxes-clean.png"
        alt="Skeleton Landing"
        className="skeleton-image"
      />
      <HitboxOverlay />
    </div>
  );
};

export default LandingPage;
