import Section from './Section';
import { c, serif } from '../shared';
import { experience } from '../data';

const S = {
  list: { display: 'flex', flexDirection: 'column', gap: 24 },
  card: {
    background: 'var(--panel)',
    border: `1px solid ${c.line}`,
    borderRadius: '6px 22px 6px 22px',
    padding: 28,
  },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap', marginBottom: 4 },
  role: { fontFamily: serif, fontSize: 20, marginBottom: 2 },
  company: { color: c.a, fontWeight: 600, fontSize: 15 },
  meta: { display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' },
  period: { color: 'var(--mute)', fontSize: 14 },
  badge: { fontSize: 12, border: `1px solid ${c.b}`, color: c.b, borderRadius: 999, padding: '2px 10px', whiteSpace: 'nowrap' },
  points: { marginTop: 14, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 },
  point: { color: 'var(--body)', fontSize: 15 },
  tags: { display: 'flex', flexWrap: 'wrap', gap: 8, listStyle: 'none', marginTop: 16 },
  tag: { fontSize: 13, background: 'var(--chip)', border: `1px solid ${c.line}`, borderRadius: 6, padding: '3px 10px' },
};

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div style={S.list}>
        {experience.map(({ role, company, period, type, points, tags }) => (
          <article key={`${role}-${company}`} style={S.card}>
            <div style={S.header}>
              <div>
                <h3 style={S.role}>{role}</h3>
                <span style={S.company}>{company}</span>
              </div>
              <div style={S.meta}>
                <span style={S.period}>{period}</span>
                {type && <span style={S.badge}>{type}</span>}
              </div>
            </div>
            <ul style={S.points} aria-label={`${role} responsibilities`}>
              {points.map((pt) => (
                <li key={pt} style={S.point}>{pt}</li>
              ))}
            </ul>
            <ul style={S.tags} aria-label="Skills used">
              {tags.map((t) => <li key={t} style={S.tag}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
