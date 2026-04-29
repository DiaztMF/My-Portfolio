import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  // {
  //   name: 'Experience',
  //   hash: '#experience',
  // },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Certification',
    hash: '#certification',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const aboutData = {
  name: 'Diazt Muhammad Firmansyah',
  headline: 'Passionate about creating impactful web experiences',
  description:
    "I'm Diazt Muhammad Firmansyah, a front-end developer from Indonesia. I've been learning programming for over 2 years. I'm interested in building scalable web applications using modern technologies. My expertise includes React, Next.js, and Tailwind CSS. I'm passionate about creating elegant solutions to complex problems and sharing knowledge with the developer community.",
} as const;

export const experiencesData = [
  {
    title: 'Web developer intern',
    company: 'WEB-BOX, Tarnobrzeg PL',
    description:
      'During this internship, I focused on two key areas: creating Wordpress plugins and managing website content, plugins, and settings.',
    period: '2023',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
  },
  {
    title: 'Frontend developer & UI designer',
    company: 'Freelancing, remote',
    description:
      'As a freelancer, I specialized in graphic design using Figma and website development using Next.js with Sanity CMS. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
    period: '2023 - 2024',
    technologies: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind'],
  },
  {
    title: 'Frontend developer intern',
    company: 'Chop-chop, remote',
    description:
      'During my internship at Chop-Chop, I collaborated with an experienced IT team, focusing on tasks in Next.js. This experience provided valuable insights into teamwork and advanced my proficiency in Next.js.',
    period: '2024',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Frontend developer & UI designer',
    company: 'GeoScan, remote',
    description: (
      <>
        At GeoScan, I collaborate with frontend, backend, and GIS specialists to
        build{' '}
        <Link
          className={cn(
            buttonVariants({ variant: 'link' }),
            'm-0 h-fit p-0 text-base'
          )}
          href="https://geoscan-app.com"
          target="_blank"
        >
          geoscan-app.com
        </Link>{' '}
        — a platform for generating real estate reports. I’m responsible for
        developing and maintaining the frontend, as well as designing UI/UX to
        ensure a clear and intuitive user experience.
      </>
    ),
    period: '2024 - present',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Leaflet'],
  },
] as const;

export const projects = [
  {
    title: 'Cafe Inventory Management',
    description:
      'A platform with real-time inventory management, and admin dashboard.',
    image: '/images/cafe-inventory-management.png',
    technologies: ['Laravel', 'Inertia.js', 'React', 'SQLite'],
    liveUrl: 'https://cafe-inventory-management.free.laravel.cloud',
    githubUrl: 'https://github.com/DiaztMF/Cafe_Inventory_Management_System',
  },
  {
    title: 'NotesApp',
    description:
      'Smart note management app that uses database to create and store notes with built-in import export feature.',
    image: '/images/notesapp.png',
    technologies: ['React', 'Express.js', 'MongoDB'],
    liveUrl: 'https://notesapp.dpdns.org',
    githubUrl: 'https://github.com/DiaztMF/NotesApp-Fullstack',
  },
];

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;

export const certificationsData = [
  {
    title: 'Javascript and Data Algorithm',
    issuer: 'FreeCodeCamp',
    date: 'Jan 17, 2026',
    image:
      '/images/freecodecamp.org_javascript-algorithms-and-data-structures.png',
    link: 'https://freecodecamp.org/certification/diaztmf/javascript-and-data-algorithm',
  },
  {
    title: 'Javascript',
    issuer: 'Freecodecamp',
    date: 'Jan 8, 2026',
    image: '/images/freecodecamp.org_javascript-v9.png',
    link: 'https://cloud.google.com/certification',
  },
  {
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding',
    date: 'Jan 17, 2026',
    image: '/images/belajar-fe-pemula.png',
    link: 'https://www.dicoding.com/certificates/KEXL2K17WZG2',
  },
  {
    title: 'Belajar Back-End Pemula dengan JavaScript',
    issuer: 'Dicoding',
    date: 'Jan 18, 2026',
    image: '/images/belajar-be-pemula.png',
    link: 'https://www.dicoding.com/certificates/NVP7J2JOOXR0',
  },
] as const;
