// src/components/StorySelector.jsx
// This component renders the main story selection screen with navigation and story cards
import { Link } from "react-router-dom";

// Array of story metadata (title and note) displayed as clickable cards
const stories = [
  { title: "🚑 The Ambulance Argument", note: "In progress — EMTs still convinced nausea equals pregnancy." },
  { title: "😶‍🌫️ 0–2: Medical Gaslighting", note: "Coming soon — Coming soon - eMTS still Googling twins while riving an ambulance." },
  { title: "📱 Validation from TikTok", note: "Coming soon — once your For You Page finishes the diagnosis." },
  { title: "🧲 The MRI from Hell", note: "Coming soon — assuming the machine doesn't swallow you whole and spit you out with trauma." },
  { title: "🧪 The Tube That Ate My Life", note: "Coming soon — just waiting on insurance, three appeals, and a nurse who knows what a J-port is." },
  { title: "🔘 The Call Button Never Worked", note: "Coming soon — if anyone ever answers the call." },
  { title: "💉 The Nurse Lottery", note: "Coming soon — roll the dice, get a vein or trauma." },
  { title: "📸 Influencer Ending", note: "Coming soon — once we go viral for the wrong reasons." },
  { title: "💀 Cursed by the Chart", note: "Coming soon — but your chart already says it's finished." },
  { title: "🛏️ Roomie Solidarity", note: "Coming soon — just after your roommate teaches you the ropes and disappears forever." },
  { title: "🩻 Radiation Roulette", note: "Coming soon — with bonus x-ray vision and side effects." },
  { title: "🍌 The Banana Test", note: "Coming soon — one bite from greatness or doom." },
  { title: "📉 The Refeeding Fail", note: "Coming soon — if they don't kill the feeds again." },
  { title: "💊 The Pill That Made Me a Zombie", note: "Coming soon — but at least it's a good zombie apocalypse survival drug." },
  { title: "🧠 Refeeding Syndrome", note: "Coming soon — dangerously underfed but dramatically overexplained." },
  { title: "📋 The PIP That Broke You", note: "Coming soon — we'll circle back after your deadline." },
  { title: "🛑 Psych Consult of Doom", note: "Coming soon — or are you just imagining this story too?" },
  { title: "🚫 Nothing by Mouth... Again", note: "Coming soon — unlike the ice chips you begged for." },
  { title: "📦 Insurance Denial Speedrun", note: "Coming soon — pending prior auth, appeals, and a blood pact." },
  { title: "📉 Tube Exchange #16", note: "Coming soon — assuming the right size isn't on backorder." },
  { title: "👻 The Abandonment Arc", note: "Coming soon — everyone else already ghosted." },
  { title: "🚘 Transport Never Came", note: "Coming soon — maybe the Uber will show up this time." },
  { title: "🌙 Night Shift, Day Shift", note: "Coming soon — if the night doc ever calls back." },
  { title: "🧻 The Bathroom Breakdown", note: "Coming soon — in a stall near you." },
  { title: "📝 The Note", note: "Coming soon — but someone already called 911." },
  { title: "🏛️ The Parliamentary Collapse", note: "Coming soon — democracy isn't the only thing fainting." },
  { title: "🏥 The Long COVID Odyssey", note: "Coming soon — probably post-viral delay." },
  { title: "🏊 The Olympic Struggle", note: "Coming soon — still stretching through the flare." },
  { title: "🫂 Both of Us Are Sick", note: "Coming soon — once one of us can stand up." }
];

// Main functional component for story selector
export default function StorySelector() {
  return (
    <div className="min-h-screen bg-erbg text-ertan font-spooky p-6">
      {/* Page header */}
      <h2 className="text-2xl font-bold mb-6">🧠 Story Selector</h2>
      {/* Enter-the-Madness button: intro link */}
      <div className="mb-6 text-center">
        <Link
          to="/enter-the-madness"
          className="inline-block px-5 py-3 text-lg font-bold bg-ertan/80 text-white rounded-xl shadow hover:bg-ertan/90 hover:ring-2 hover:ring-red-600 transition-all duration-200"
        >
          🚪 Enter the Madness: How it all began for me
        </Link>
      </div>

      {/* Subheader/call to action */}
      <p className="mb-4 text-sm">Choose your chaos. Most stories are still fermenting in medical-grade snark.</p>

      {/* Grid layout for story cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story, index) => {
          if (story.title.includes("Ambulance")) {
            // Only Ambulance story is clickable
            return (
              <Link to="/ambulance" key={index} className="block">
                <div className="bg-ertan/70 p-4 rounded-xl shadow hover:bg-ertan/90 hover:scale-[1.02] hover:ring-2 hover:ring-red-600 transition-all duration-200">
                  <p className="text-sm font-semibold">
                    {story.title}
                    {story.note && (
                      <span className="italic text-xs text-ertan/80">: {story.note}</span>
                    )}
                  </p>
                </div>
              </Link>
            );
          }
          // Other stories are not linked yet
          return (
            <div key={index} className="bg-ertan/70 p-4 rounded-xl shadow transition-all duration-200">
              <p className="text-sm font-semibold">
                {story.title}
                {story.note && (
                  <span className="italic text-xs text-ertan/80">: {story.note}</span>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
