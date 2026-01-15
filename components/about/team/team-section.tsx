import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import TeamMemberCard from './team-member-card';
import { teamMembers } from './team-data';

function TeamSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader highlightedWord="Our Team" size="lg" className="mb-4">
          Meet Our Team
        </SectionHeader>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-4xl">
          The APEX Consulting & Surveying Team Brings Extensive Experience Serving
          Clients In The Fort Wayne Area. They Take Pride In Their Ability To
          Swiftly Resolve Challenges While Consistently Exceeding Client
          Expectations, All At A Reasonable Cost. Leveraging Their Experience,
          Training, And Collective Creativity, The APEX Team Has Successfully
          Completed Numerous Projects, Always Driven By Their Commitment To Their
          Core Goal: &quot;Peak Performance Is Our Target.&quot;
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TeamSection;
