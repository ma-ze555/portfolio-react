import { c } from '../shared';

const SOCIALS = [
  ['GitHub', 'https://github.com/ma-ze555'],
  ['LinkedIn', 'https://www.linkedin.com/in/mamta-jaiswal-1b855a28a?utm_source=share_via&utm_content=profile&utm_medium=member_android'],
];

const S = {
  footer: { borderTop: `1px solid ${c.line}`, padding: '34px 20px', textAlign: 'center', color: c.mute },
  socials: { display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16 },
  link: { color: c.text, borderBottom: `1px solid ${c.a}` },
  top: { display: 'inline-block', marginTop: 16, border: `1px solid ${c.line}`, color: c.text, borderRadius: 999, padding: '8px 20px' },
};

export default function Footer() {
  return (
    <footer style={S.footer}>
      <div style={S.socials} role="group" aria-label="Social links">
        {SOCIALS.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`} style={S.link}>{label}</a>)}
      </div>
      <p>&copy; 2026 Mamta Kumari Jaiswal. All rights reserved.</p>
      <a href="#home" style={S.top} aria-label="Back to top">Back to top</a>
    </footer>
  );
}
