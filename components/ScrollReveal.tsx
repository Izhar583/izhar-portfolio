'use client';
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    document.querySelectorAll('.skills-grid,.projects-grid,.certs-grid,.stats-grid').forEach(grid => {
      [...grid.children].forEach((child, i) => {
        (child as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
        child.classList.add('reveal');
        obs.observe(child);
      });
    });
    return () => obs.disconnect();
  }, []);
  return null;
}
