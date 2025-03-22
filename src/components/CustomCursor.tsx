import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPositions, setTrailPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTrailPositions(prev => {
        const newPositions = [...prev, { x: e.clientX, y: e.clientY }];
        if (newPositions.length > 5) newPositions.shift();
        return newPositions;
      });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      {trailPositions.map((pos, i) => (
        <div
          key={i}
          className="custom-cursor-trail"
          style={{
            left: pos.x,
            top: pos.y,
            opacity: (i + 1) / trailPositions.length,
          }}
        />
      ))}
      <div
        className="custom-cursor"
        style={{ left: position.x, top: position.y }}
      />
      <div
        className="custom-cursor-dot"
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
};

export default CustomCursor;