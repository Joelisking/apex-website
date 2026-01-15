import Image from 'next/image';
import Link from 'next/link';
import Container from './container';
import SectionHeader from './section-header';
import looperImg from '@/public/LooperGroup.svg';

function ContactCTA() {
  return (
    <section data-navbar-theme="light" className="py-8 md:py-16">
      <Container className="bg-gradient-to-r from-[#313131] via-[#000000] to-[#222222] text-white py-12 md:py-16 lg:py-20 relative overflow-hidden rounded-3xl">
        {/* Content */}
        <div className="relative z-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <span className="text-white/80 uppercase tracking-wide text-sm font-medium">
              Contact Us
            </span>
            <SectionHeader size="base" className="text-white mt-3 mb-6">
              Get in Touch with APEX: Your Partner for Precision and Success
            </SectionHeader>
            <p className="text-white/80 leading-relaxed mb-8">
              Ready to get started on your next project? Reach out to APEX
              Consulting & Surveying, Inc. for expert guidance in engineering and
              surveying services. Whether you&apos;re in need of topographic surveys,
              construction staking, or project engineering design and management,
              our experienced team is here to help. Contact us today to discuss how
              we can support your goals and provide the precision and reliability
              your project deserves. Let&apos;s build something great together!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Decorative Image */}
        <div className="absolute top-0 bottom-0 right-0 h-full w-full pointer-events-none">
          <div className="relative h-full w-full">
            <Image
              src={looperImg}
              alt=""
              className="h-full w-full object-cover lg:object-contain object-right opacity-70 lg:opacity-100"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactCTA;
