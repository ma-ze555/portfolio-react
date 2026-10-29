import Section from './Section';
import { c, serif } from '../shared';
import { skills } from '../data';

const S = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 22 },
  card: { background: 'var(--panel)', border: `1px solid ${c.line}`, borderRadius: 14, padding: 26 },
  title: { fontFamily: serif, fontSize: 19, marginBottom: 20 },
  chips: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  chip: { fontSize: 14, background: 'var(--chip)', border: `1px solid ${c.line}`, borderRadius: 999, padding: '6px 16px' },
};

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div style={S.grid}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={S.card}>
            <h3 style={S.title}>{category}</h3>
            <div style={S.chips}>
              {items.map((name) => (
                <span key={name} style={S.chip}>{name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
