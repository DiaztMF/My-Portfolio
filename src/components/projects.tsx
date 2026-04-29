'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

import { SectionHeading } from './section-heading';

import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projects } from '@/lib/data';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="border-accent hover:border-primary/50 group relative flex flex-col overflow-hidden rounded-xl border transition-all">
      {/* Project Image */}
      <div className="bg-accent relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-3">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 size-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Icons.github className="mr-1 size-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Projects"
          content="Projects I worked on. Each of them containing its own case study."
        />
      </motion.div>
      <div className="relative px-6">
        <div className="mx-auto max-w-screen-md">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
