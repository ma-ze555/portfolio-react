import { useState, useEffect } from 'react';
import { c, serif, useIsMobile } from '../shared';
import { useTheme } from '../ThemeContext';

const LINKS = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const mobile = useIsMobile();
  const { theme, toggle } = useTheme();

  // Escape closes the mobile menu
  useEffect(() => {
    const h = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, []);

  const S = {
    nav: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 20, background: 'var(--navbg)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${c.line}` },
    inner: { maxWidth: 1100, margin: '0 auto', height: 60, padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    right: { display: 'flex', alignItems: 'center', gap: 18 },
    logo: { fontFamily: serif, fontWeight: 700, fontSize: 18 },
    icon: { background: 'none', border: `1px solid ${c.line}`, borderRadius: 8, color: c.text, fontSize: 20, width: 40, height: 40, cursor: 'pointer' },
    list: {
      display: 'flex', gap: 26, listStyle: 'none',
      ...(mobile && { position: 'absolute', top: 60, left: 0, right: 0, flexDirection: 'column', gap: 0, background: c.bg, borderBottom: `1px solid ${c.line}`, display: open ? 'flex' : 'none' }),
    },
    link: (k) => ({
      display: 'block', textTransform: 'capitalize', color: active === k ? c.text : c.mute,
      padding: mobile ? '14px 20px' : '6px 0',
      borderBottom: mobile ? 0 : `2px solid ${active === k ? c.a : 'transparent'}`,
      borderLeft: mobile ? `3px solid ${active === k ? c.a : 'transparent'}` : 0,
    }),
  };

  return (
    <nav style={S.nav} aria-label="Main">
      <div style={S.inner}>
        <a href="#home" style={S.logo} aria-label="Mamta, back to top">Mamta</a>
        <div style={S.right}>
          <ul id="nav-links" style={S.list}>
            {LINKS.map((k) => (
              <li key={k}><a href={`#${k}`} style={S.link(k)} aria-current={active === k ? 'true' : undefined} onClick={() => setOpen(false)}>{k}</a></li>
            ))}
          </ul>
          <button style={S.icon} onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            <span aria-hidden="true">{theme === 'dark' ? '\u2600' : '\u263E'}</span>
          </button>
          {mobile && (
            <button style={S.icon} aria-label="Menu" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
              <span aria-hidden="true">&#9776;</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
