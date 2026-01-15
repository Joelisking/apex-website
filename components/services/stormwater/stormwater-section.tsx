import Image from 'next/image';
import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';

function StormwaterSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader highlightedWord="Quality Management" size="lg" className="mb-2">
          Stormwater Quality Management
        </SectionHeader>
        <p className="text-lg italic text-gray-700 mb-4">
          Expert Stormwater Quality Management For{' '}
          <span className="text-primary not-italic">Compliance And Cost Efficiency</span>
        </p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-4xl">
          Our stormwater quality service includes preparing stormwater pollution
          prevention plans (SWPPP) and inspecting stormwater quality measures to
          ensure that the placement of the erosion control units meets the plans and
          specifications. Apex has provided stormwater quality inspection (SWQI)
          services for utility and transportation projects to municipalities,
          developers, INDOT through a contract with general contractors during project
          construction, and design consulting engineering firms. Our staff holds INDOT
          and CPESC certifications.
        </p>

        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden">
          <Image
            src="/services/stormwater.png"
            alt="Stormwater erosion control measures"
            fill
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

export default StormwaterSection;
