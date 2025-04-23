import React from 'react';
import '../index.css';

export default function Homepage() {
  const stories = [
    { id: 'welcome_to_er_scene', title: 'Welcome to the ER: Please Take a Number' },
    { id: 'tube_that_ate_my_life', title: 'The Tube That Ate My Life' },
    { id: 'gaslight_doctor', title: 'The Doctor Will Gaslight You Now' },
    { id: 'no_rounds', title: 'No One Rounds on the Dying Girl' },
    { id: 'spoonie_influencer', title: "Congrats, You're a Spoonie Influencer" },
    { id: 'zero_to_two', title: 'From 0 to 2: The Pain Scale Misery Metric' },
    { id: 'misdiagnosed_again', title: 'MiscHELLe Misdiagnosed Me (Again)' },
    { id: 'surprise_bill', title: 'Surprise Medical Bill: The Game' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#3d3824] px-4 py-8">
      <div className="flex flex-col items-center mb-6">
        <img src="/skull.png" alt="Skull" className="w-16 h-16 mb-2" />
        <h1 className="text-4xl font-bold tracking-wide">TRIAGE THEATER</h1>
        <p className="text-lg italic text-center max-w-md">A spoonie’s guide to surviving the medical-industrial complex</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        {stories.map((story) => (
          <a
            key={story.id}
            href={`/story?quest=${story.id}`}
            className="bg-[#5b5432] hover:bg-[#756c3e] text-white py-3 px-4 rounded shadow text-center transition text-sm sm:text-base"
          >
            {story.title}
          </a>
        ))}
      </div>
    </div>
  );
}
