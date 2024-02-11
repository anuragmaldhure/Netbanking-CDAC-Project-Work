

import React, { useState, useEffect } from 'react';
import "./Cursor.module.css"; // Import the CSS file containing cursor styles

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateCursorPosition);
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
};

export default Cursor;
