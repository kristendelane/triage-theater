import React, { useEffect, useRef } from 'react';

const HitboxOverlay = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const rectangles = [
      { id: 'spin_wheel', x: 744, y: 742, width: 347, height: 222 },
      { id: 'enter_here', x: 1116, y: 866, width: 173, height: 56 },
      { id: 'enter_hospital', x: 1222, y: 959, width: 274, height: 42 }
    ];

    const polygons = [
      {
        id: 'nurse_call_button',
        points: [ [1413,614], [1417,631], [1433,632], [1441,615], [1427,603] ]
      },
      {
        id: 'skeleton_eye_socket',
        points: [ [1232,316], [1232,339], [1231,361], [1248,375], [1275,388], [1308,394], [1336,373], [1341,341], [1330,315], [1307,302], [1282,295], [1261,289], [1246,298] ]
      },
      {
        id: 'chaos_corner',
        points: [ [1481,5], [1522,49], [1481,49] ]
      },
      {
        id: 'cursed_chart',
        points: [ [48,11], [5,48], [48,48] ]
      }
    ];

    function drawRectangles() {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      rectangles.forEach(({ x, y, width, height }) => {
        ctx.strokeRect(x, y, width, height);
      });
    }

    function drawPolygons() {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      polygons.forEach(({ points }) => {
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.closePath();
        ctx.stroke();
      });
    }

    drawRectangles();
    drawPolygons();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1536}
      height={1024}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 10
      }}
    />
  );
};

export default HitboxOverlay;
