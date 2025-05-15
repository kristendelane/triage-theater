'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import storyData from '../Story-Data/welcome_to_er_scene.json';

export default function AdventureGame() {
  const [currentSceneId, setCurrentSceneId] = useState('start');
  const [isClient, setIsClient] = useState(false);
  const [questId, setQuestId] = useState(null);

  const currentScene = storyData[currentSceneId];

  useEffect(() => {
    setIsClient(true);
    if (typeof window === 'undefined') return;
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('quest');
    if (id) setQuestId(id);
  }, []);

  const handleChoice = (nextId) => {
    if (storyData[nextId]) {
      setCurrentSceneId(nextId);
    } else {
      console.error(`Scene with id "${nextId}" not found.`);
      setCurrentSceneId('start');
    }
  };

  if (!isClient) return null;
  if (!currentScene) return <div>Error loading story.</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: 'auto' }}>
      <h1>🧨 Triage Theater</h1>
      <h2>Welcome to the ER — Please Take a Number</h2>

      <nav className="flex space-x-4 justify-center mb-6">
        <Link
          to="/"
          className="inline-block px-4 py-2 text-base font-bold bg-ertan/80 text-white rounded-xl shadow hover:bg-ertan/90 transition-all duration-200"
        >
          🏠 Story Selector
        </Link>
        <Link
          to="/intro"
          className="inline-block px-4 py-2 text-base font-bold bg-ertan/80 text-white rounded-xl shadow hover:bg-ertan/90 transition-all duration-200"
        >
          📖 My Origin Story
        </Link>
      </nav>

      {currentScene.text.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}

      {currentScene.choices &&
        currentScene.choices.map((choice) => (
          <button
            key={choice.nextId}
            onClick={() => handleChoice(choice.nextId)}
            style={{ marginTop: '1rem', display: 'block' }}
          >
            {choice.text}
          </button>
        ))}

      {currentScene.resources && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Resources</h3>
          {currentScene.resources.map((res, idx) => (
            <div key={idx}>
              <strong>{res.title}</strong>
              {res.url && (
                <div>
                  <a href={res.url}>{res.url}</a>
                </div>
              )}
              {res.items && (
                <ul>
                  {res.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
