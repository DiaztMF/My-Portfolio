'use client';

import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { cn } from '@/lib/utils';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative py-20">
        <SectionHeading heading="About Me" />
        <div className="mx-auto max-w-screen-md">
          <div className="flex flex-col gap-12 md:flex-row-reverse">
            <ProfileImage className="hidden md:block" />

            {/* Content */}
            <div className="flex-1 md:text-left">
              <ProfileImage className="mb-8 mt-3 block md:hidden" />
              <h2 className="mb-4 text-4xl font-bold tracking-tight">
                Passionate about creating impactful web experiences
              </h2>
              <p className="text-muted-foreground mb-6 text-justify">
                I&apos;m Diazt Muhammad Firmansyah, I&apos;m a front-end
                developer from Indonesia. I&apos;ve been learning programming
                for over 2 years. I interested in building scalable web
                applications using modern technologies. My expertise includes
                React, Next.js, and Tailwind CSS. I&apos;m passionate about
                creating elegant solutions to complex problems and sharing
                knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('w-50 h-50 md:size-64', className)} {...props}>
    <div className="bg-accent relative size-full overflow-hidden rounded-2xl">
      <Image src="/images/profile.png" alt="" className="object-cover" fill />
    </div>
  </div>
);
