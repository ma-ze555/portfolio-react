import { c, serif, grad } from '../shared';

const S = {
  card: { background: 'var(--panel)', border: `1px solid ${c.line}`, borderRadius: '6px 22px 6px 22px', padding: 28, display: 'flex', flexDirection: 'column', gap: 14 },
  head: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 },
  title: { fontFamily: serif, fontSize: 21 },
  badge: { fontSize: 12, border: `1px solid ${c.b}`, color: c.b, borderRadius: 999, padding: '2px 10px', whiteSpace: 'nowrap' },
  badgeData: { fontSize: 12, border: `1px solid var(--a)`, color: 'var(--a)', borderRadius: 999, padding: '2px 10px', whiteSpace: 'nowrap' },
  desc: { color: 'var(--body)', flex: 1 },
  tags: { display: 'flex', flexWrap: 'wrap', gap: 8, listStyle: 'none' },
  tag: { fontSize: 13, background: 'var(--chip)', border: `1px solid ${c.line}`, borderRadius: 6, padding: '3px 10px' },
  links: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  gh: { alignSelf: 'flex-start', border: `1px solid ${c.a}`, borderRadius: 999, padding: '8px 22px', fontWeight: 600 },
  demo: { alignSelf: 'flex-start', border: 'none', borderRadius: 999, padding: '8px 22px', fontWeight: 600, background: grad, color: 'var(--btntext)' },
};

export default function ProjectCard({ title, description, tags, github, demo, inProgress, category }) {
  return (
    <article style={S.card}>
      <div style={S.head}>
        <h3 style={S.title}>{title}</h3>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {category === 'data' && <span style={S.badgeData}>Skillcraft Task</span>}
          {inProgress && <span style={S.badge}>In Progress</span>}
        </div>
      </div>
      <p style={S.desc}>{description}</p>
      <ul style={S.tags} aria-label="Tech stack">{tags.map((t) => <li key={t} style={S.tag}>{t}</li>)}</ul>
      <div style={S.links}>
        {github
          ? <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${title} on GitHub (opens in a new tab)`} style={S.gh}>GitHub</a>
          : category !== 'data' && <span role="link" aria-disabled="true" style={{ ...S.gh, cursor: 'not-allowed' }}>GitHub (coming soon)</span>}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" aria-label={`${title} live demo (opens in a new tab)`} style={S.demo}>Live Demo</a>
        )}
      </div>
    </article>
  );
}
