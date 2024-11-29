"use client";

import { useEffect, useRef } from 'react';

export function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;
    const colors = [
      [30, 41, 59],   // Slate 800
      [51, 65, 85],   // Slate 700
      [15, 23, 42],   // Slate 900
      [30, 58, 138],  // Blue 800
    ];

    const draw = () => {
      time += 0.001;
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
          const i = (x + y * canvas.width) * 4;
          
          // Create more sophisticated wave patterns
          const noise = 
            Math.sin(x * 0.01 - time) * 
            Math.cos(y * 0.01 - time) * 0.5 +
            Math.sin(
              Math.sqrt(
                Math.pow(x - canvas.width/2, 2) + 
                Math.pow(y - canvas.height/2, 2)
              ) * 0.01 + time
            ) * 0.5;
          
          const colorIndex = Math.floor((noise + 1) * colors.length / 2);
          const color = colors[Math.min(Math.max(colorIndex, 0), colors.length - 1)];
          
          // Smooth color transitions
          const nextColor = colors[Math.min(Math.max(colorIndex + 1, 0), colors.length - 1)];
          const blend = (noise + 1) * colors.length / 2 - colorIndex;
          
          data[i] = color[0] * (1 - blend) + nextColor[0] * blend;
          data[i + 1] = color[1] * (1 - blend) + nextColor[1] * blend;
          data[i + 2] = color[2] * (1 - blend) + nextColor[2] * blend;
          data[i + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 -z-10"
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-slate-900/30" />
    </>
  );
}