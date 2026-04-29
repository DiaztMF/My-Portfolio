'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { certificationsData } from '@/lib/data';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Certification = () => {
  const { ref } = useSectionInView('Certification');

  return (
    <section
      ref={ref}
      id="certification"
      className="my-10 w-full scroll-mt-28 md:mb-20"
    >
      <SectionHeading
        heading="Certifications"
        content="Professional certifications I have completed to validate my skills."
      />

      <div className="mx-auto max-w-screen-lg px-4">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {certificationsData.map((cert, index) => (
            <motion.li
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="border-border/50 hover:border-border dark:hover:border-primary/50 group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border bg-black/5 p-6 transition-all hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10">
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-1 text-left">
                        <h3 className="text-foreground group-hover:text-primary text-lg font-bold leading-tight transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-muted-foreground text-sm font-medium">
                          {cert.issuer}
                        </p>
                      </div>

                      {/* Logo Box */}
                      <div className="bg-secondary/50 ring-foreground/5 group-hover:bg-secondary flex shrink-0 items-center justify-center rounded-lg p-3 ring-1 ring-inset transition-colors">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          width={100}
                          height={100}
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>

                    <div className="text-muted-foreground mt-auto flex items-center justify-between text-xs">
                      <span>{cert.date}</span>
                      <span className="text-primary font-medium opacity-0 transition-opacity group-hover:opacity-100">
                        View Certificate
                      </span>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="w-full max-w-[95vw] place-items-center border-none bg-transparent p-0 shadow-none">
                  <DialogTitle className="sr-only">{cert.title}</DialogTitle>
                  <div className="pointer-events-none relative flex h-[90vh] w-full items-center justify-center">
                    <div className="pointer-events-auto relative flex size-full max-w-7xl items-center justify-center overflow-hidden rounded-lg shadow-2xl">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
