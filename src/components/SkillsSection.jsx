import { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { c, grad, serif } from '../shared';
import { skills } from '../data';

const S = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 22 },
  card: { background: c.panel, border: `1px solid ${c.line}`, borderRadius: 14, padding: 26 },
  title: { fontFamily: serif, fontSize: 19, marginBottom: 20 },
  top: { display: 'flex', justifyContent: 'space-between', fontSize: 15, marginBottom: 6 },
  track: { height: 8, background: 'var(--track)', borderRadius: 6, overflow: 'hidden', marginBottom: 18 },
};

export default function SkillsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Animate the bars once when the section scrolls into view
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <Section id="skills" title="Skills">
      <div ref={ref} style={S.grid}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={S.card}>
            <h3 style={S.title}>{category}</h3>
            {items.map(([name, pct]) => (
              <div key={name}>
                <div style={S.top}><span>{name}</span><span>{pct}%</span></div>
                <div style={S.track} role="progressbar" aria-label={`${name} proficiency`} aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                  <div style={{ height: '100%', width: visible ? `${pct}%` : 0, borderRadius: 6, background: grad, transition: 'width 1.1s ease' }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
