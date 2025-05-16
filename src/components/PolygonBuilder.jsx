import React, { useRef, useState, useEffect } from 'react';

const CANVAS_WIDTH = 1536;
const CANVAS_HEIGHT = 1024;

const PolygonBuilder = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [currentPoints, setCurrentPoints] = useState([]);
  const [polygons, setPolygons] = useState([]);
  const [currentLabel, setCurrentLabel] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);

  const handleClick = (e) => {
    if (!isDrawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setCurrentPoints([...currentPoints, [x, y]]);
  };

  const handleSavePolygon = () => {
    if (!currentLabel || currentPoints.length < 3) {
      alert('Give this polygon a name and at least 3 points');
      return;
    }
    setPolygons([...polygons, { id: currentLabel, points: currentPoints }]);
    setCurrentPoints([]);
    setCurrentLabel('');
    setIsDrawing(false);
  };

  const handleReset = () => {
    setPolygons([]);
    setCurrentPoints([]);
    setCurrentLabel('');
    setIsDrawing(false);
  };

  const handleExport = () => {
    const data = JSON.stringify(polygons, null, 2);
    navigator.clipboard.writeText(data)
      .then(() => alert("Polygon data copied to clipboard"))
      .catch(() => alert("Copy failed"));
    console.log("Exported polygons:", data);
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    polygons.forEach(({ id, points }) => {
      if (points.length > 0) {
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        points.slice(1).forEach(([x, y]) => ctx.lineTo(x, y));
        ctx.closePath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1;
        ctx.stroke();
        const [labelX, labelY] = points[0];
        ctx.fillStyle = 'red';
        ctx.font = '14px monospace';
        ctx.fillText(id, labelX + 5, labelY - 5);
      }
    });

    currentPoints.forEach(([x, y]) => {
      ctx.fillStyle = 'yellow';
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    if (currentPoints.length > 1) {
      ctx.beginPath();
      ctx.moveTo(currentPoints[0][0], currentPoints[0][1]);
      currentPoints.slice(1).forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.strokeStyle = 'yellow';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  };

  useEffect(() => {
    draw();
  }, [polygons, currentPoints]);

  return (
    <div
      style={{
        background: 'black',
        height: '100vh',
        width: '100vw',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '2rem',
      }}
    >
      <h2 style={{ color: 'white', marginBottom: '1rem' }}>Polygon Hitbox Builder</h2>

      <div
        style={{
          position: 'relative',
          width: `${CANVAS_WIDTH}px`,
          height: `${CANVAS_HEIGHT}px`,
          background: 'black',
          outline: '3px solid red',
          flexShrink: 0,
        }}
      >
        <img
          ref={imageRef}
          src="/assets/skeleton-hitboxes-clean.png"
          alt="Skeleton"
          style={{
            position: 'absolute',
            width: `${CANVAS_WIDTH}px`,
            height: `${CANVAS_HEIGHT}px`,
            top: 0,
            left: 0,
            pointerEvents: 'none',
            display: 'block',
          }}
        />
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          style={{
            position: 'absolute',
            width: `${CANVAS_WIDTH}px`,
            height: `${CANVAS_HEIGHT}px`,
            top: 0,
            left: 0,
            zIndex: 2,
            cursor: 'crosshair',
          }}
          onClick={handleClick}
        />
      </div>

      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Enter hitbox name (e.g. eye_socket)"
          value={currentLabel}
          onChange={(e) => setCurrentLabel(e.target.value)}
          disabled={isDrawing}
          style={{ padding: '0.5rem', width: '300px' }}
        />
        <button
          onClick={() => setIsDrawing(true)}
          disabled={isDrawing || !currentLabel}
          style={{ marginLeft: '10px' }}
        >
          Start Polygon
        </button>
        <button
          onClick={handleSavePolygon}
          disabled={!isDrawing}
          style={{ marginLeft: '10px' }}
        >
          Save Polygon
        </button>
        <button onClick={handleExport} style={{ marginLeft: '10px' }}>
          Export to Clipboard
        </button>
        <button onClick={handleReset} style={{ marginLeft: '10px', color: 'red' }}>
          Reset All
        </button>
      </div>
    </div>
  );
};

export default PolygonBuilder;
