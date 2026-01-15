import Image from 'next/image';
import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';

function ExperienceSection() {
  return (
    <section data-navbar-theme="light" className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex-1">
            <span className="text-primary font-medium">
              Our Experience
            </span>
            <SectionHeader
              highlightedWord="Decades Of Successful Projects"
              size="base"
              className="mt-2 mb-6">
              Trusted Expertise Backed By Decades Of Successful
              Projects
            </SectionHeader>
            <p className="text-gray-600 leading-relaxed">
              With over 20 years of experience, APEX Consulting &
              Surveying, Inc. has successfully completed a wide range
              of projects for clients such as the Indiana Department
              of Transportation (INDOT), Local Public Agencies (LPA),
              and numerous A/E consulting firms. Our extensive
              portfolio showcases our ability to handle diverse
              surveying and engineering needs, from transportation
              infrastructure to public works projects. Backed by a
              team with over 150 years of combined expertise, APEX
              consistently delivers high-quality, reliable services
              that meet the unique requirements of each client.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden">
              <Image
                src="/home-experience.png"
                alt="Construction site aerial view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ExperienceSection;
