import {
  ProjectsSection,
  ProjectGallerySection,
} from '@/components/projects';
import PageHero from '@/components/shared/page-hero';
import React from 'react';

function Projects() {
  return (
    <main>
      <PageHero
        title="Our Projects"
        description="APEX Consulting & Surveying, Inc. partners with a diverse range of clients to provide top-notch engineering and surveying solutions. From rebuilding key roads like CR 15 in Garrett, Indiana, to improving pedestrian access on Market Street in North Manchester, we deliver projects that make a real impact. We’re also proud to have developed the Chester Heights Trail, a scenic and ADA-friendly path for the community. At APEX, every project is handled with expert care and a commitment to delivering outstanding results for our clients."
      />
      <ProjectsSection />
      <ProjectGallerySection />
    </main>
  );
}

export default Projects;
