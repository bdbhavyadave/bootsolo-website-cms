'use client';

import { useEffect, useRef } from 'react';

export default function PaperPlaneCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Only run on desktop/fine-pointer devices without reduced motion
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || isReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    document.body.classList.add('custom-cursor-active');

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: target.x, y: target.y };
    let currentAngle = 0;
    const trailPoints = [];
    const maxTrailAge = 900; // Rich 900ms trail duration

    const handleMouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;

      // Disable canvas custom cursor drawing over input controls
      const targetEl = document.elementFromPoint(e.clientX, e.clientY);
      if (targetEl && (targetEl.tagName === 'INPUT' || targetEl.tagName === 'TEXTAREA' || targetEl.isContentEditable)) {
        canvas.style.opacity = '0';
      } else {
        canvas.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Lerp current coordinates smoothly to target mouse position
      const dx = target.x - current.x;
      const dy = target.y - current.y;
      current.x += dx * 0.28;
      current.y += dy * 0.28;

      // Update trajectory angle smoothly
      if (Math.hypot(dx, dy) > 0.5) {
        const targetAngle = Math.atan2(dy, dx);
        currentAngle += (targetAngle - currentAngle) * 0.25;
      }

      // Record point for smooth trailing flight route line
      const now = performance.now();
      trailPoints.push({ x: current.x, y: current.y, time: now });

      // Clean old points older than maxTrailAge
      while (trailPoints.length > 0 && now - trailPoints[0].time > maxTrailAge) {
        trailPoints.shift();
      }

      // Draw Vibrant Fading Dashed Sunrise Flight Trail behind Cursor
      if (trailPoints.length > 1) {
        ctx.save();
        ctx.strokeStyle = '#FF6B35'; // --sunrise
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';

        for (let i = 1; i < trailPoints.length; i++) {
          const p1 = trailPoints[i - 1];
          const p2 = trailPoints[i];
          const age = now - p2.time;
          const alpha = Math.max(0, 1 - age / maxTrailAge);

          ctx.beginPath();
          ctx.globalAlpha = alpha * 0.9;
          ctx.setLineDash([7, 5]);
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Draw Adobe Stock Vector Paper Airplane Logo Mark
      ctx.save();
      ctx.translate(current.x, current.y);
      ctx.rotate(currentAngle);

      // Scaled vector paper airplane logo mark (~36px crisp size)
      ctx.scale(0.78, 0.78);
      ctx.translate(-12, -12);

      // 1. Motion Speed Lines behind plane
      ctx.strokeStyle = '#EEF3F8';
      ctx.lineWidth = 2.2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-16, 4);
      ctx.lineTo(-4, 7);
      ctx.moveTo(-20, 14);
      ctx.lineTo(-6, 16);
      ctx.stroke();

      // 2. Underwing Shadow Fold (#E8551F)
      ctx.fillStyle = '#E8551F';
      ctx.beginPath();
      ctx.moveTo(30, 0);   // Nose tip
      ctx.lineTo(-8, 20);  // Bottom tail corner
      ctx.lineTo(6, 12);   // Keel center
      ctx.closePath();
      ctx.fill();

      // 3. Main Upper Sunrise Orange Wing (#FF6B35)
      ctx.fillStyle = '#FF6B35';
      ctx.beginPath();
      ctx.moveTo(30, 0);   // Nose tip
      ctx.lineTo(6, 12);   // Keel center
      ctx.lineTo(-10, -8); // Top wing tip
      ctx.closePath();
      ctx.fill();

      // 4. Crisp White Center Crease Fold Line (#FFFFFF)
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(30, 0);
      ctx.lineTo(6, 12);
      ctx.stroke();

      // 5. Outer Navy Contour Stroke (#0E1A2B)
      ctx.strokeStyle = '#0E1A2B';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(30, 0);
      ctx.lineTo(-8, 20);
      ctx.lineTo(6, 12);
      ctx.lineTo(-10, -8);
      ctx.closePath();
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('custom-cursor-active');
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        transition: 'opacity 170ms ease',
      }}
    />
  );
}
