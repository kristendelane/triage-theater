import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heartbeatAudio from './sounds/heartbeat-loud.mp3';
import './HitboxOverlay.css';

const baseWidth = 1536;
const baseHeight = 1024;

const rawPolygons = [
  {
    id: 'wheel_of_madness',
    route: '/random',
    points: [
      [753, 752], [748, 958], [1089, 956], [1080, 756], [753, 752]
    ]
  },
  {
    id: 'enter_here',
    route: '/ambulance-argument-long',
    points: [
      [1117, 878], [1119, 917], [1295, 913], [1292, 875], [1118, 877]
    ]
  },
  {
    id: 'call_button',
    route: '/origin',
    points: [
      [1435, 637], [1446, 621], [1438, 606], [1424, 605],
      [1415, 617], [1418, 629], [1436, 637]
    ]
  },
  {
    id: 'eye_socket',
    route: '/dnr-poems',
    points: [
      [1265, 283], [1287, 287], [1317, 297], [1335, 308], [1335, 308],
      [1345, 331], [1345, 357], [1341, 384], [1321, 401], [1292, 404],
      [1263, 396], [1236, 380], [1223, 365], [1213, 336],
      [1220, 308], [1236, 286], [1266, 283]
    ]
  },
  {
    id: 'whisper_text',
    route: '/ambulance-argument',
    points: [
      [1224, 967], [1226, 1003], [1514, 1003], [1503, 958], [1224, 966]
    ]
  },
  {
    id: 'cursed_chart_corner',
    route: '/your-cursed-chart',
    points: [
      [0, 0], [60, 0], [60, 60], [0, 60]
    ]
  },
  {
    id: 'chaos_corner',
    route: '/chaos-corner',
    points: [
      [1486, 2], [1533, 40], [1535, 1], [1486, 3]
    ]
  }
];

const HitboxOverlay = () => {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);
  const [scaledPolygons, setScaledPolygons] = useState([]);
  const [audioStarted, setAudioStarted] = useState(false);
  const searchParams = new URLSearchParams(window.location.search);
  const devMode = searchParams.get('dev') === 'true';

  // Play heartbeat
  useEffect(() => {
    const audio = new Audio(heartbeatAudio);
    const startAudio = () => {
      if (!audioStarted) {
        audio.play().catch(() => {});
        setAudioStarted(true);
      }
    };
    const timeout = setTimeout(startAudio, 3000);
    window.addEventListener('click', startAudio);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('click', startAudio);
    };
  }, [audioStarted]);

  // Draw hitboxes + labels
  const resizeAndDraw = () => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;

    const rect = img.getBoundingClientRect();
    const scaleX = rect.width / baseWidth;
    const scaleY = rect.height / baseHeight;

    canvas.width = rect.width;
    canvas.height = rect.height;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const newPolygons = rawPolygons.map(poly => ({
      ...poly,
      points: poly.points.map(([x, y]) => [x * scaleX, y * scaleY])
    }));

    setScaledPolygons(newPolygons);

    if (devMode) {
      newPolygons.forEach(({ id, points }) => {
        ctx.beginPath();
        points.forEach(([x, y], i) => {
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1;
        ctx.stroke();
        const [labelX, labelY] = points[0];
        ctx.fillStyle = 'red';
        ctx.font = '12px monospace';
        ctx.fillText(id, labelX + 5, labelY - 5);
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeAndDraw);
    resizeAndDraw();
    return () => window.removeEventListener('resize', resizeAndDraw);
  }, []);

  const handleClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    for (let poly of scaledPolygons) {
      if (pointInPolygon([x, y], poly.points)) {
        navigate(poly.route);
        return;
      }
    }
  };

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let found = null;
    for (let poly of scaledPolygons) {
      if (pointInPolygon([x, y], poly.points)) {
        found = poly.id;
        break;
      }
    }
    setHoveredId(found);
  };

  return (
    <>
      <img
        ref={imgRef}
        src="/assets/skeleton-hitboxes-clean.png"
        alt="Skeleton"
        className="skeleton-image"
      />
      <canvas
        ref={canvasRef}
        className="hitbox-canvas"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
      />
      {hoveredId && (
        <img
          src="/assets/blood-splatter.png"
          alt="Blood Splatter"
          className="blood-splatter"
        />
      )}
      {hoveredId === 'eye_socket' && (
        <div className="eye-overlay">
          <img src="/assets/bloody-eye.png" alt="Bloody Eye" />
          <div className="eye-text">you shouldn't be here...</div>
        </div>
      )}
    </>
  );
};

function pointInPolygon([x, y], polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    const intersect = yi > y !== yj > y &&
      x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

export default HitboxOverlay;
