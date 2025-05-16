// src/components/StorySelector.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const stories = [
  { title: "🚑 The Ambulance Argument", note: "In progress — EMTs still convinced nausea equals pregnancy.", route: "/ambulance" },
  { title: "😶‍🌫️ 0–2: Medical Gaslighting", note: "Coming soon — EMTs still Googling twins while driving an ambulance." },
  { title: "📱 Validation from TikTok", note: "Coming soon — once your For You Page finishes the diagnosis." },
  { title: "🧲 The MRI from Hell", note: "Coming soon — assuming the machine doesn't swallow you whole and spit you out with trauma." },
  { title: "🧪 The Tube That Ate My Life", note: "Coming soon — just waiting on insurance, three appeals, and a nurse who knows what a J-port is." },
  { title: "🔘 The Call Button Never Worked", note: "Coming soon — if anyone ever answers the call." },
  { title: "💉 The Nurse Lottery", note: "Coming soon — roll the dice, get a vein or trauma." },
  { title: "📸 Influencer Ending", note: "Coming soon — once we go viral for the wrong reasons." },
  { title: "💀 Cursed by the Chart", note: "Coming soon — but your chart already says it's finished." },
  { title: "🛏️ Roomie Solidarity", note: "Coming soon — after your roommate teaches you the ropes and disappears forever." },
  { title: "🩻 Radiation Roulette", note: "Coming soon — with bonus x-ray vision and side effects." }
];

export default function StorySelector() {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>🧠 Story Selector</h2>

      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <Link
          to="/enter-the-madness"
          style={{
            display: 'inline-block',
            padding: '1rem 1.5rem',
            fontWeight: 'bold',
            backgroundColor: '#8B0000',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none'
          }}
        >
          🚪 Enter the Madness: How it all began for me
        </Link>
      </div>

      <p style={{ marginBottom: '1rem' }}>
        Choose your chaos. Most stories are still fermenting in medical-grade snark.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
        {stories.map((story, index) => {
          const isClickable = story.route;
          const cardStyle = {
            padding: '1rem',
            backgroundColor: '#f1f1f1',
            borderRadius: '6px',
            cursor: isClickable ? 'pointer' : 'default',
            textDecoration: 'none',
            color: 'black',
            border: isClickable ? '1px solid #8B0000' : '1px solid #ccc'
          };

          const content = (
            <div>
              <p style={{ margin: 0, fontWeight: 'bold' }}>{story.title}</p>
              <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem' }}>{story.note}</p>
            </div>
          );

          return isClickable ? (
            <Link key={index} to={story.route} style={cardStyle}>
              {content}
            </Link>
          ) : (
            <div key={index} style={cardStyle}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
