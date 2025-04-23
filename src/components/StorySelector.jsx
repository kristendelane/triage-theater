// src/components/StorySelector.jsx
import { Link } from "react-router-dom";

const stories = [
  { title: "🚑 The Ambulance Argument", note: "In progress — EMTs still Googling what a feeding tube is." },
  { title: "😶‍🌫️ 0–2: Medical Gaslighting", note: "Coming soon — it's all in your head, just like this content." },
  { title: "📱 Validation from TikTok", note: "Coming soon — with more credibility than your last doctor." },
  { title: "🧲 The MRI from Hell", note: "Coming soon — assuming the machine doesn’t swallow you first." },
  { title: "🧪 The Tube That Ate My Life", note: "Coming soon — just waiting for it to get unclogged." },
  { title: "🔘 The Call Button Never Worked", note: "Coming soon — if anyone ever answers the call." },
  { title: "💉 The Nurse Lottery", note: "Coming soon — roll the dice, get a vein or trauma." },
  { title: "📸 Influencer Ending", note: "Coming soon — once we go viral for the wrong reasons." }
];

export default function StorySelector() {
  return (
    <div className="min-h-screen bg-erbg text-ertan font-spooky p-6">
      <h1 className="text-4xl font-bold mb-6">🧠 Story Selector</h1>

      <div className="mb-6">
        <Link
          to="/intro"
          className="inline-block px-5 py-3 text-lg font-bold bg-ertan/80 text-white rounded-xl shadow hover:bg-ertan/90 hover:ring-2 hover:ring-red-600 transition-all duration-200"
        >
          📖 The Night It All Went to Hell
        </Link>
      </div>

      <p className="mb-4 text-lg">Choose your chaos. Most stories are still fermenting in medical-grade snark.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-ertan/70 p-4 rounded-xl shadow hover:bg-ertan/90 hover:scale-[1.02] hover:ring-2 hover:ring-red-600 transition-all duration-200"
          >
            <p className="text-lg font-semibold">{story.title}</p>
            {story.note && (
              <p className="text-sm italic mt-1 text-ertan/80">🛠 {story.note}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
