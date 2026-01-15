import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import ProcessStep from './process-step';
import { processSteps } from './process-data';

function ProcessSection() {
  return (
    <section data-navbar-theme="light" className="py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <SectionHeader highlightedWord="Process" size="base">
            Our Process
          </SectionHeader>
          <p className="text-xl leading-relaxed mb-4">
            Precision-driven surveying and engineering, guiding your
            project from start to finish with ease.
          </p>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.stepNumber}
              data={step}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
