import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import Image from 'next/image';
import img from '@/public/LooperGroup.svg';
import Link from 'next/link';
import Container from './container';

export interface Stat {
  value: string;
  label: string;
}

interface PageHeroProps {
  title: string;
  description: string;
  stats?: Stat[];
}

function PageHero({ title, description, stats }: PageHeroProps) {
  return (
    <section
      data-navbar-theme="dark"
      className="bg-linear-to-r from-[#313131] via-[#000000] to-[#222222] text-white relative overflow-hidden">
      <Container
        className={`${
          stats && stats.length > 0
            ? 'md:py-20 lg:py-28 xl:py-32'
            : 'md:py-28 lg:py-36 xl:py-44'
        }`}>
        {/* Desktop version - original layout */}
        <div className="hidden md:block relative z-20">
          <div className="w-4/5">
            <div className="mt-6">
              <h2 className="sm:text-5xl lg:text-6xl font-bold">
                {title}
              </h2>
              <p className="mt-3 max-w-4xl text-lg">{description}</p>
            </div>
          </div>
          {/*           
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors">
            Learn More
            <span className="text-xl">→</span>
          </Link> */}
        </div>

        {/* Mobile version - optimized layout */}
        <div className="md:hidden relative z-20">
          <div className="w-full">
            <div className="mt-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                {title}
              </h2>
              <p className="mt-3 text-sm">{description}</p>
            </div>
          </div>
          <Link
            href={'/about'}
            className="inline-flex hover:scale-105 transition-all duration-300">
            <Button className="flex items-center gap-2 mt-6 w-auto">
              Read More
              <Icon name="ArrowRight" />
            </Button>
          </Link>
        </div>

        {/* Stats - shown at bottom if provided */}
        {stats && stats.length > 0 && (
          <div className="relative z-20 mt-12 md:mt-16 pt-4 border-t border-white/20 max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-light text-primary">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>

      {/* Image - absolute positioned for both mobile and desktop */}
      <Container className="absolute top-0 bottom-0 right-0 h-full w-full">
        <div className="relative h-full w-full">
          <Image
            src={img}
            alt="svg"
            className="h-full w-full object-cover lg:object-contain object-right opacity-70 lg:opacity-100 transition-all duration-300"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

export default PageHero;
