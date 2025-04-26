// src/components/ .jsx
import { useParams } from "react-router-dom";


export default function ComingSoon() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-erbg text-ertan font-spooky p-6">
      <h1 className="text-4xl font-bold mb-4">🚧 Story {id} Coming Soon</h1>
      <p className="text-lg">It's not here yet — probably stuck in prior auth.</p>
    </div>
  );
}
