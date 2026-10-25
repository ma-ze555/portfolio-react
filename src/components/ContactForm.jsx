import { useState } from 'react';
import { c, btn } from '../shared';

// Optional: set REACT_APP_FORM_ENDPOINT (e.g. a Formspree URL) in a .env file to receive messages by email
const ENDPOINT = process.env.REACT_APP_FORM_ENDPOINT || '';

const validate = (v) => ({
  name: v.name.trim().length < 2 ? 'Enter your name (at least 2 characters).' : '',
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()) ? '' : 'Enter a valid email address, like name@example.com.',
  message: v.message.trim().length < 10 ? 'Write a message of at least 10 characters.' : '',
});

const S = {
  form: { maxWidth: 560, margin: '0 auto' },
  label: { display: 'block', fontWeight: 600, marginBottom: 6 },
  input: { width: '100%', background: c.panel, color: c.text, border: `1px solid ${c.line}`, borderRadius: 10, padding: '12px 14px', font: 'inherit' },
  err: { color: 'var(--err)', fontSize: 14, minHeight: '1.2em', marginTop: 4 },
  ok: { marginTop: 18, padding: '14px 16px', borderRadius: 10, background: 'var(--okbg)', border: `1px solid ${c.b}`, color: c.b, textAlign: 'center' },
};

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => { setValues({ ...values, [e.target.name]: e.target.value }); setSent(false); };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    const first = Object.keys(errs).find((k) => errs[k]);
    if (first) { document.getElementById(first).focus(); return; }
    if (ENDPOINT) {
      fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(values) }).catch(() => {});
    }
    setValues({ name: '', email: '', message: '' });
    setSent(true);
  };

  const field = (k, label, Tag = 'input', extra = {}) => (
    <div style={{ marginBottom: 18 }}>
      <label htmlFor={k} style={S.label}>{label}</label>
      <Tag id={k} name={k} value={values[k]} onChange={onChange} aria-required="true" aria-invalid={!!errors[k]} aria-describedby={`${k}-err`}
        style={{ ...S.input, ...(errors[k] && { borderColor: 'var(--err)' }), ...(Tag === 'textarea' && { minHeight: 140, resize: 'vertical' }) }} {...extra} />
      <div id={`${k}-err`} role="alert" style={S.err}>{errors[k]}</div>
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate style={S.form} aria-label="Contact form">
      <p style={{ textAlign: 'center', color: c.mute, marginBottom: 28 }}>
        Email me at <a href="mailto:mamtajaiswal9279@gmail.com" style={{ borderBottom: `1px solid ${c.a}` }}>mamtajaiswal9279@gmail.com</a> or use the form.
      </p>
      {field('name', 'Name', 'input', { autoComplete: 'name' })}
      {field('email', 'Email', 'input', { type: 'email', autoComplete: 'email' })}
      {field('message', 'Message', 'textarea')}
      <button type="submit" style={btn}>Send Message</button>
      {sent && <div role="status" style={S.ok}>Thanks for reaching out! I'll get back to you soon.</div>}
    </form>
  );
}
