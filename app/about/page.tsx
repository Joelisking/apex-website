import LegacySection from '@/components/about/legacy-section';
import { LocationsSection } from '@/components/about/locations';
import { TeamSection } from '@/components/about/team';
import PageHero from '@/components/shared/page-hero';

function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Us"
        description="Founded in 2004, APEX Consulting & Surveying, Inc. has over 20 years of experience delivering topographical, boundary, and right-of-way surveying services. Expanding its expertise in 2009 and adding engineering services in 2016, APEX now serves transportation and infrastructure projects across Indiana."
      />
      <LegacySection />
      <TeamSection />
      <LocationsSection />
    </main>
  );
}

export default AboutPage;
