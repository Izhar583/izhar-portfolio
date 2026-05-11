'use client';
import { useEffect, useRef } from 'react';

export default function BgCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d')!;
    let W = 0, H = 0;
    const resize = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight; };
    resize(); window.addEventListener('resize', resize);
    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * 9999, y: Math.random() * 9999,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.3, a: Math.random() * 0.4 + 0.05,
      col: Math.random() > 0.5 ? '196,255,71' : '0,238,255',
    }));
    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const sy = window.scrollY;
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y - sy * 0.05, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.col},${p.a})`; ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animId); };
  }, []);
  return <canvas ref={ref} id="bg-canvas" />;
}
