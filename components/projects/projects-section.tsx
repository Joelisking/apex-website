import Container from '@/components/shared/container';
import ProjectCard from './project-card';
import { projects } from './project-data';

function ProjectsSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2>Our Portfolio</h2>
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
