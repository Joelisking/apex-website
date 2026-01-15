import {
  ClientsSection,
  ProjectsSection,
  StatsBanner,
} from '@/components/experience';
import PageHero from '@/components/shared/page-hero';

function Experience() {
  return (
    <main>
      <PageHero
        title="Our Experience"
        description="With over 20 years of experience, APEX Consulting & Surveying, Inc. has delivered top-notch surveying and engineering services for clients like INDOT, Local Public Agencies, and A/E consulting firms. Our expertise ensures precision, compliance, and successful project completion across both state and local initiatives."
      />
      <StatsBanner />
      <ProjectsSection />
      <ClientsSection />
    </main>
  );
}

export default Experience;
