import Image from 'next/image';
import { Project } from './project-data';
import { CheckCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Image */}
      <div className="lg:w-1/2">
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-primary" />
          <span className="text-primary font-medium uppercase text-sm tracking-wide">
            {project.location}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

        {/* Services Completed */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 uppercase text-sm tracking-wide mb-4">
            Services Completed
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.servicesCompleted.map((service, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
