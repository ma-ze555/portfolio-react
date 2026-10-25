import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const IDS = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

// Tracks which section is in view, for navbar highlighting
function useActiveSection() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    IDS.forEach((id) => io.observe(document.getElementById(id)));
    return () => io.disconnect();
  }, []);
  return active;
}

export default function App() {
  const active = useActiveSection();
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar active={active} />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <Section id="contact" title="Contact" center><ContactForm /></Section>
      </main>
      <Footer />
    </>
  );
}
