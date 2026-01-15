import Image from 'next/image';

export interface ProcessStepData {
  stepNumber: string;
  title: string;
  description: string;
  image: string;
}

interface ProcessStepProps {
  data: ProcessStepData;
  reversed?: boolean;
}

function ProcessStep({ data, reversed = false }: ProcessStepProps) {
  const { stepNumber, title, description, image } = data;

  return (
    <div
      className={`flex flex-col ${
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-8 md:gap-12 lg:gap-16 items-center`}>
      {/* Text Content */}
      <div className="flex-1">
        <span className="text-6xl md:text-7xl lg:text-8xl font-medium text-primary">
          {stepNumber}
        </span>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4 mb-4">
          {title}
        </h3>
        <p className="text-xl leading-relaxed mb-4">{description}</p>
      </div>

      {/* Image */}
      <div className="flex-1 w-full">
        <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProcessStep;
