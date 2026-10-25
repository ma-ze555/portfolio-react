import { serif, useReveal } from '../shared';

export default function Section({ id, title, center, children }) {
  const [ref, reveal] = useReveal();
  return (
    <section id={id} aria-labelledby={`${id}-title`} style={{ padding: '88px 20px' }}>
      <div ref={ref} style={{ maxWidth: 980, margin: '0 auto', ...reveal }}>
        <h2 id={`${id}-title`} style={{ fontFamily: serif, fontSize: 'clamp(1.8rem,4vw,2.4rem)', lineHeight: 1.2, marginBottom: 36, textAlign: center ? 'center' : 'left' }}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
