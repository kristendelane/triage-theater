// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import StorySelector from './components/StorySelector';
import AdventureGame from './components/AdventureGame';
import StoryIntro from './components/StoryIntro'; // 🔹 Enter-the-Madness route
import AmbulanceIntro from './components/AmbulanceIntro';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StorySelector />, // ✅ Still the landing page
  },
  {
    path: '/enter-the-madness',
    element: <StoryIntro />, // 🔹 Enter-the-Madness route
  },
  {
    path: '/ambulance',
    element: <AmbulanceIntro />,
  },
  {
    path: '/story/:sceneId',
    element: <AdventureGame />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
