import { ClientsSection, ProjectsSection } from '@/components/experience';
import PageHero, { Stat } from '@/components/shared/page-hero';

const experienceStats: Stat[] = [
  { value: '100+', label: 'INDOT Projects Completed' },
  { value: '20+', label: 'Years of Experience' },
  { value: '50+', label: 'Clients Served' },
  { value: '50+', label: 'LPA Projects Delivered' },
];

function Experience() {
  return (
    <main>
      <PageHero
        title="Our Experience"
        description="With over 20 years of experience, APEX Consulting & Surveying, Inc. has delivered top-notch surveying and engineering services for clients like INDOT, Local Public Agencies, and A/E consulting firms. Our expertise ensures precision, compliance, and successful project completion across both state and local initiatives."
        stats={experienceStats}
      />
      <ProjectsSection />
      <ClientsSection />
    </main>
  );
}

export default Experience;
