import { Link } from "react-router-dom";

// Functional component for the Ambulance Argument intro page
export default function AmbulanceIntro() {
  return (
    // Outer container: full viewport height, theme background color, font style, and padding
    <div className="min-h-screen bg-erbg text-ertan font-spooky p-6">
      {/* Page heading: large, bold text with margin */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Scene: EMT Arrival - The Gurney Gauntlet
      </h1>

      {/* Navigation buttons: back to selector and continue into story */}
      <nav className="flex space-x-4 justify-center mb-6">
        {/* Link back to the story selector page */}
        <Link
          to="/"
          className="inline-block px-4 py-2 text-base font-bold bg-ertan/80 text-white rounded-xl shadow hover:bg-ertan/90 transition-all duration-200"
        >
          🏠 Story Selector
        </Link>
        {/* Link to the first scene of the ambulance story */}
        <Link
          to="/story/0"
          className="inline-block px-4 py-2 text-base font-bold bg-ertan/80 text-white rounded-xl shadow hover:bg-ertan/90 transition-all duration-200"
        >
          ▶️ Continue
        </Link>
      </nav>

      {/* Intro prose container: vertical spacing, base text size, relaxed line-height */}
      <div className="space-y-4 text-base leading-relaxed mb-8">
        <p>
        You've had three bites of food in two days, and your stomach is swelling like it's auditioning for Alien: The Gastrointestinal Cut. You're pretty sure there's a war crime happening beneath your ribs. You're not diagnosed — just desperate. So your partner, who can't sit upright without triggering a flare, calls 911.</p>
        <p>And that's when things get worse.</p>
        <p>
        The EMTs arrive, reeking of Axe body spray, confusion, and the kind of confidence you only get from never being questioned. One glances at your distended belly and asks if you're pregnant. "Twins? Triplets, maybe? You're really bloated," he says, like that's a gotcha.
        </p>
        <p>Mitya calmly: "She has severe stomach issues."</p>
        <p>
        Clipboard Hero, scribbling: "female abdominal pain - r/o psych."
        </p>
        <p>
        They blink. They write "female abdominal pain - r/o psych."Then they gesture to the gurney like it's a park bench and say, "You can get up, right?"
        </p>
        <p>
          You stare at them, sunken-eyed and sweating, legs like overcooked
          spaghetti. "You gonna help me with this, or what?" you croak, your
          voice a blend of fury and gastric acid.
        </p>
        <p>They don't move.</p>
        <p>
          Somehow, rage gives you a jolt of supernatural strength. You claw
          your way onto the gurney, shoulders screaming, the room spinning,
          bile rising in your throat. You're upright long enough to
          collapse.
        </p>
        <p>  
          The one at your feet mutters, "Bet she's faking it."
        </p>
      </div>

      {/* Optional resources section at bottom */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Resources</h3>
        <ul className="list-disc list-inside text-sm">
          {/* Resource items or links collected here */}
        </ul>
      </div>

      {/* Footer nav: allow choosing another story */}
      <div className="mt-6 flex justify-center">
        <Link
          to="/"
          className="inline-block px-6 py-3 text-base font-bold bg-ertan/80 text-white rounded-xl shadow hover:bg-ertan/90 transition-all duration-200"
        >
          🏠 Story Selector
        </Link>
      </div>
    </div>
  );
} 