// src/components/StoryIntro.jsx
// This component renders the origin‐story intro page.

import { Link } from "react-router-dom";

export default function StoryIntro() {
  return (
    <div className="min-h-screen bg-erbg text-ertan font-spooky p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        🩺 How It All Began (a.k.a. My Origin Story)
      </h1>

      {/* top nav between title and body */}
      <nav className="flex space-x-4 justify-center mb-6">
        <Link
          to="/"
          className="inline-block px-4 py-2 text-base font-bold bg-red-900 text-white rounded-xl shadow hover:bg-red-700 transition-all duration-200"
        >
          🏠 Story Selector
        </Link>
        <Link
          to="/intro"
          className="inline-block px-4 py-2 text-base font-bold bg-red-900 text-white rounded-xl shadow hover:bg-red-700 transition-all duration-200"
        >
          📖 Story Intro
        </Link>
      </nav>

      <div className="space-y-4 text-base leading-relaxed">
        <p>
          It didn't start with an ambulance. It started with anti-nausea meds at age ten, a barf bucket by the bed, and a string of half-day school absences no one believed were real. The nurses said "anxiety," the doctors said "nothing," and your teachers said "again?" You started hiding the vomiting because it got you labeled more than it got you help.
        </p>
        <p>
          By high school, you'd been scoped, scanned, poked, and prodded. Everything was "normal." The kind of normal where you dry-heave before finals, live on saltines and shame, and become a professional at looking functional when your insides are screaming.
        </p>
        <p>
          Then college. Then grad school. You learned to take Zofran like a vitamin. Missed enough class you almost didn't graduate, but you did. Because that's what you do. You push through. You perform. You adapt. You survive.
        </p>
        <p>
          For years, it was a slow, boiling descent. You adjusted your life around the beast in your gut. You shrank your meals. Shrunk your wardrobe. Shrunk your expectations. No one told you that living with a chronic illness can sometimes mean shrinking until you vanish.
        </p>
        <p>
          And then one night, the dam broke.
        </p>
        <p>
          It didn't start with an ambulance. It started with pain. Not just any pain — character development pain. The kind that wakes you up at 3am, folds you in half like a crusty yoga mat, and whispers, "Good luck, bitch."
        </p>
        <p>
          You were a "good patient," remember? You played the game. You did the fiber. The yoga. The low FODMAP sad beige diet. You smiled through the lectures, the pamphlets, the "have you tried breathing?" energy. You even kept your voice calm while the 12-year-old resident explained your own body to you like he was giving a TED Talk called "It's Just IBS, Sweetheart."
        </p>
        <p>
          You're not a doctor, but you are a PhD in physics with decades of lived experience in "something is very wrong with my stomach and no one believes me." You've worked in high-tech labs, helped launch 3D-printed medical devices, and now? You're curled in the fetal position, vibrating like a dying Roomba, covered in flop sweat and regret.
        </p>
        <p>
          You haven't eaten in three days. A bite of yogurt sent you into a full-body exorcism. Even water is playing hard to get.
        </p>
        <p>
          Your boss at the 3D printing job — the same one who praised you when you worked through fevers and nausea — called you lazy and put you on a PIP for daring to deteriorate. Because chronic illness makes you unproductive, and unproductive is unacceptable.
        </p>
        <p>
          Your partner tiptoes in, haunted. "Do you think it's time to go to the ER?"
        </p>
        <p>
          You nod. The Go Bag is already packed.
        </p>
        <p>
          Somewhere behind you, a cat knocks over your puke bowl in protest. You'll clean it up when you get back. Maybe.
        </p>
      </div>

      <div className="mt-8">
        <Link
          to="/"
          className="inline-block px-6 py-3 text-base font-bold bg-red-900 text-white rounded-xl shadow hover:bg-red-700 transition-all duration-200"
        >
          🚪 Enter the Madness
        </Link>
      </div>
    </div>
  );
}
