// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StorySelector from './components/StorySelector';
import AdventureGame from './components/AdventureGame';
import PolygonBuilder from './components/PolygonBuilder'; // ✅ NEW

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Story Selector */}
        <Route path="/story-selector" element={<StorySelector />} />

        {/* Adventure Game */}
        <Route path="/enter-the-madness" element={<AdventureGame />} />

        {/* Polygon Builder Tool */}
        <Route path="/polygon-builder" element={<PolygonBuilder />} /> {/* ✅ NEW */}
      </Routes>
    </Router>
  );
}

export default App;
