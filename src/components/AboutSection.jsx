import { useState } from 'react';
import Section from './Section';
import { c, serif, useIsMobile } from '../shared';
import { education } from '../data';

export default function AboutSection() {
  const [hasPhoto, setHasPhoto] = useState(true);
  const mobile = useIsMobile();
  const size = mobile ? 200 : 260;

  const S = {
    grid: { display: 'grid', gridTemplateColumns: mobile ? '1fr' : '260px 1fr', gap: mobile ? 32 : 48, alignItems: 'start', justifyItems: mobile ? 'center' : 'stretch' },
    photo: { position: 'relative', width: size, height: size, borderRadius: '50%', overflow: 'hidden', border: `2px solid ${c.a}`, background: c.panel, display: 'grid', placeItems: 'center', font: `700 4rem ${serif}`, color: c.mute },
    img: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' },
    bio: { color: 'var(--body)', maxWidth: '62ch', marginBottom: 34 },
    tl: { listStyle: 'none', borderLeft: `2px solid ${c.line}`, paddingLeft: 26 },
    item: { position: 'relative', marginBottom: 22 },
    dot: { position: 'absolute', left: -33, top: 7, width: 12, height: 12, borderRadius: '50%', background: c.a },
  };

  return (
    <Section id="about" title="About">
      <div style={S.grid}>
        {/* PROFILE PHOTO: put your photo at public/profile.jpg. It replaces the "MJ" placeholder automatically. */}
        <div style={S.photo} {...(!hasPhoto && { role: 'img', 'aria-label': 'Profile photo placeholder' })}>
          <span aria-hidden="true">MJ</span>
          {hasPhoto && <img src="/profile.jpg" alt="Mamta Kumari Jaiswal" style={S.img} onError={() => setHasPhoto(false)} />}
        </div>
        <div style={{ width: '100%' }}>
          <p style={S.bio}>Aspiring Data Analyst passionate about turning raw data into meaningful insights. Currently pursuing B.E. in Information Science and Engineering, with hands-on experience in Excel, Power BI, and data-driven decision-making through real-world internships. Always looking to learn, grow, and connect with like-minded people in the data and tech space. Open to networking, collaborations, and new opportunities. Let's connect!</p>
          <h3 style={{ fontFamily: serif, marginBottom: 18 }}>Education</h3>
          <ul style={S.tl} aria-label="Education timeline">
            {education.map(([school, degree, years]) => (
              <li key={school} style={S.item}>
                <span style={S.dot} aria-hidden="true" />
                <b style={{ display: 'block' }}>{school}</b>{degree}<br />
                <small style={{ color: c.mute }}>{years}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
