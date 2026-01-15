import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/shared/section-header';

function Hero() {
  return (
    <section data-navbar-theme="dark" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Aerial view of farmland and road"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-5xl">
          <SectionHeader
            highlightedWord="Apex Consulting"
            size="lg"
            className="text-white mb-6 lg:hidden">
            Apex Consulting & Surveying
          </SectionHeader>

          <SectionHeader
            highlightedWord="Apex Consulting"
            size="xl"
            className="text-white mb-6 hidden lg:block">
            Apex Consulting & Surveying
          </SectionHeader>
          <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed tracking-wide mb-8 max-w-3xl lg:max-w-4xl">
            Apex Consulting & Surveying, Inc. (APEX), is a DBE/MBE/EBE
            firm headquartered in Fort Wayne, Indiana that provides
            quality services in the areas of land surveying,
            transportation, public works, and site development
            projects. APEX is also well qualified to provide
            environmental surveys, right-of-way engineering (INDOT
            prequalified), and construction staking.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors">
            Learn More
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
