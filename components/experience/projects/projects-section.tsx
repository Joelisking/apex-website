import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import ProjectCategoryCard from './project-category-card';
import { projectCategories } from './projects-data';

function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeader
          highlightedWord="Notable Projects"
          size="lg"
          className="mb-4"
        >
          Our Notable Projects
        </SectionHeader>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          With decades of experience, APEX has successfully delivered projects across
          Indiana for state agencies, local governments, and private clients. Explore
          our comprehensive portfolio of surveying and engineering achievements.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectCategories.map((category) => (
            <ProjectCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
