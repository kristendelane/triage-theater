// src/components/ComingSoon.jsx
// Component to display a placeholder page when a story isn't ready yet
import { useParams } from "react-router-dom";

// Functional component: shows a dynamic 'Coming Soon' message based on URL param
export default function ComingSoon() {
  const { id } = useParams(); // Extract story ID from the URL

  return (
    <div className="min-h-screen bg-erbg text-ertan font-spooky p-6">
      {/* Full-screen container with themed background and typography */}
      <h1 className="text-4xl font-bold mb-4">🚧 Story {id} Coming Soon</h1>
      {/* Clear heading indicating which story is pending */}
      <p className="text-lg">It's not here yet — probably stuck in prior auth.</p>
      {/* Supporting message with a dash of humor */}
    </div>
  );
}
