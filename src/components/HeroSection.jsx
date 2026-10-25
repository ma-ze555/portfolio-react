import { useState, useEffect } from 'react';
import { c, grad, btn, serif, useReveal } from '../shared';

const TEXT = 'Aspiring Data Analyst';

const styles = {
  hero: {
    minHeight: '100vh', display: 'flex', alignItems: 'center', textAlign: 'center', padding: '80px 20px 20px',
    background: 'radial-gradient(60% 50% at 20% 20%, var(--glow1), transparent 70%), radial-gradient(55% 45% at 85% 80%, var(--glow2), transparent 70%), var(--bg)',
  },
  inner: { maxWidth: 980, margin: '0 auto' },
  name: { fontFamily: serif, fontSize: 'clamp(2.4rem,8vw,5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 },
  role: { fontSize: 'clamp(1.3rem,4vw,2rem)', fontWeight: 600, margin: '18px 0 34px', minHeight: '1.6em', background: grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' },
  cursor: { display: 'inline-block', width: 2, height: '1em', background: c.b, marginLeft: 4, verticalAlign: '-0.12em', animation: 'blink 1s steps(1) infinite' },
};

export default function HeroSection() {
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [ref, reveal] = useReveal();

  useEffect(() => {
    const delay = !deleting && count === TEXT.length ? 1800 : deleting ? 50 : 110;
    const t = setTimeout(() => {
      if (!deleting && count === TEXT.length) return setDeleting(true);
      if (deleting && count === 0) return setDeleting(false);
      setCount(count + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(t);
  }, [count, deleting]);

  return (
    <section id="home" aria-label="Introduction" style={styles.hero}>
      <div ref={ref} style={{ ...styles.inner, ...reveal }}>
        <h1 style={styles.name}>Mamta Kumari Jaiswal</h1>
        <p style={styles.role}><span className="sr-only">{TEXT}</span><span aria-hidden="true">{TEXT.slice(0, count)}<span style={styles.cursor} /></span></p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" style={btn}>Contact Me</a>
          <a href="/resume.pdf" download="Mamta_Kumari_Jaiswal_Resume.pdf" style={{ ...btn, background: 'none', border: `2px solid var(--a)`, color: 'var(--a)' }}>Download Resume</a>
        </div>
      </div>
    </section>
  );
}
