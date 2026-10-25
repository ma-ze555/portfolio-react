import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
        {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </Section>
  );
}
