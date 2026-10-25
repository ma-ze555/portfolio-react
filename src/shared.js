import { useState, useEffect, useRef } from 'react';

// Colours are CSS variables (defined in index.css) so the theme switches site-wide
export const c = { bg: 'var(--bg)', panel: 'var(--panel)', line: 'var(--line)', text: 'var(--text)', mute: 'var(--mute)', a: 'var(--a)', b: 'var(--b)' };
export const grad = 'linear-gradient(90deg, var(--a), var(--b))';
export const serif = 'Georgia, "Times New Roman", serif';
export const btn = { display: 'inline-block', padding: '13px 30px', borderRadius: 999, fontWeight: 600, color: 'var(--btntext)', border: 0, cursor: 'pointer', fontSize: 16, background: grad };

export function useIsMobile(q = '(max-width:767px)') {
  const [m, setM] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const h = (e) => setM(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, [q]);
  return m;
}

// Scroll animation: fades an element in (CSS transition) once it enters the viewport
export function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(() => window.matchMedia('(prefers-reduced-motion:reduce)').matches);
  useEffect(() => {
    if (shown) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [shown]);
  const style = { opacity: shown ? 1 : 0, transform: shown ? 'none' : 'translateY(28px)', transition: 'opacity .8s ease, transform .8s ease' };
  return [ref, style];
}
