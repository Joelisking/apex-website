import AboutBanner from '@/components/home/about-banner';
import ExperienceSection from '@/components/home/experience-section';
import Hero from '@/components/home/hero';
import { ProcessSection } from '@/components/home/process';
import ProjectsBanner from '@/components/home/projects-banner';

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <AboutBanner />
        <ProcessSection />
        <ExperienceSection />
        <ProjectsBanner />
      </main>
    </div>
  );
}
