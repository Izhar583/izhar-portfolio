'use client';
import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const hC = ref.current; if (!hC) return;
    const hCtx = hC.getContext('2d')!;
    let hW = 0, hH = 0;
    const resizeHero = () => {
      hW = hC.width = hC.parentElement!.offsetWidth;
      hH = hC.height = hC.parentElement!.offsetHeight;
    };
    resizeHero(); window.addEventListener('resize', resizeHero);
    const N = 700, pts: { ox: number; oy: number; oz: number; size: number }[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      pts.push({ ox: Math.cos(theta) * r, oy: y, oz: Math.sin(theta) * r, size: Math.random() * 1.5 + 0.4 });
    }
    let rotY = 0, rotX = 0, targetRX = 0, targetRY = 0;
    const onMove = (e: MouseEvent) => {
      targetRY = (e.clientX / window.innerWidth - 0.5) * 0.8;
      targetRX = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    document.addEventListener('mousemove', onMove);
    let animId: number;
    const drawSphere = () => {
      hCtx.clearRect(0, 0, hW, hH);
      rotY += (targetRY - rotY) * 0.04 + 0.003;
      rotX += (targetRX - rotX) * 0.04;
      const R = Math.min(hW, hH) * 0.34;
      const cx = hW / 2, cy = hH / 2;
      const sinY = Math.sin(rotY), cosY = Math.cos(rotY);
      const sinX = Math.sin(rotX), cosX = Math.cos(rotX);
      const projected = pts.map(p => {
        const x = p.ox * cosY + p.oz * sinY;
        const z = -p.ox * sinY + p.oz * cosY;
        const y = p.oy * cosX - z * sinX;
        const z2 = p.oy * sinX + z * cosX;
        const depth = (z2 + 1.5) / 2.5;
        return { px: cx + x * R, py: cy + y * R, depth, size: p.size, z2 };
      });
      projected.sort((a, b) => a.depth - b.depth);
      projected.forEach(p => {
        if (p.z2 < -0.1) return;
        const t = p.depth;
        const r = Math.round(196 * (1 - t) + 0 * t);
        const g = Math.round(255 * (1 - t) + 238 * t);
        const b = Math.round(71 * (1 - t) + 255 * t);
        const alpha = 0.15 + p.depth * 0.7;
        hCtx.beginPath(); hCtx.arc(p.px, p.py, p.size * p.depth, 0, Math.PI * 2);
        hCtx.fillStyle = `rgba(${r},${g},${b},${alpha})`; hCtx.fill();
      });
      for (let i = 0; i < 3; i++) {
        const rx2 = R * (0.98 + i * 0.04);
        const ry2 = R * (0.98 + i * 0.04) * Math.abs(Math.cos(rotX));
        hCtx.beginPath(); hCtx.ellipse(cx, cy, rx2, ry2, rotY, 0, Math.PI * 2);
        hCtx.strokeStyle = `rgba(196,255,71,${0.06 - i * 0.015})`; hCtx.lineWidth = 1; hCtx.stroke();
      }
      animId = requestAnimationFrame(drawSphere);
    };
    drawSphere();
    return () => { window.removeEventListener('resize', resizeHero); document.removeEventListener('mousemove', onMove); cancelAnimationFrame(animId); };
  }, []);
  return <canvas ref={ref} id="hero-canvas" />;
}
