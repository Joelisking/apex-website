import React from 'react';

import Image from 'next/image';
import img from '@/public/LooperGroup.svg';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Icon } from '../ui/icon';
import Container from '../shared/container';

function AboutBanner() {
  return (
    <section className="mt-24">
      <Container className="bg-linear-to-r from-[#313131] via-[#000000] to-[#222222] text-white py-8 md:py-16 relative overflow-hidden rounded-3xl">
        {/* Desktop version - original layout */}
        <div className="hidden md:block relative z-20 px-16">
          <div className="w-4/5">
            <span className="uppercase">about us</span>

            <div className="mt-6">
              <h2 className="sm:text-5xl font-bold">
                Chart Your Path to Success with Expert Surveys &
                Engineering Precision
              </h2>
              <p className="mt-3">
                At APEX Consulting & Surveying, Inc., we provide the
                expert guidance you need to ensure your construction
                project runs smoothly from start to finish. Whether
                it’s topographical surveys to form the foundation of
                your design, right-of-way plans for land acquisition,
                or construction staking to keep everything on track,
                APEX delivers reliable and precise solutions. With
                over 150 years of combined experience, our team is
                committed to offering high-quality surveying and
                engineering services across Indiana—helping you move
                your project forward with confidence.
              </p>
            </div>
          </div>
          <Link
            href={'/about'}
            className="inline-flex hover:scale-105 transition-all duration-300">
            <Button
              //   variant={'primary'}
              className="flex items-center mt-6">
              Read More
              <Icon name="ArrowRight" />
            </Button>
          </Link>
        </div>

        {/* Mobile version - optimized layout */}
        <div className="md:hidden relative z-20">
          <div className="w-4/5 sm:w-3/4">
            <span className="uppercase">about us</span>

            <div className="mt-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Chart Your Path to Success with Expert Surveys &
                Engineering Precision
              </h2>
              <p className="mt-3 text-sm">
                At APEX Consulting & Surveying, Inc., we provide the
                expert guidance you need to ensure your construction
                project runs smoothly from start to finish. Whether
                it’s topographical surveys to form the foundation of
                your design, right-of-way plans for land acquisition,
                or construction staking to keep everything on track,
                APEX delivers reliable and precise solutions. With
                over 150 years of combined experience, our team is
                committed to offering high-quality surveying and
                engineering services across Indiana—helping you move
                your project forward with confidence.
              </p>
            </div>
          </div>
          <Link
            href={'/about'}
            className="inline-flex hover:scale-105 transition-all duration-300">
            <Button
              //   variant={'primary'}
              className="flex items-center gap-2 mt-6 w-auto">
              Read More
              <Icon name="ArrowRight" />
            </Button>
          </Link>
        </div>

        {/* Image - absolute positioned for both mobile and desktop */}
        <div className="absolute top-0 bottom-0 right-0 h-full w-full ">
          <div className="relative h-full w-full">
            <Image
              src={img}
              alt="svg"
              className="h-full w-full object-cover lg:object-contain object-right opacity-70 lg:opacity-100 transition-all duration-300"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutBanner;
