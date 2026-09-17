# My-Portfolio

Personal software engineering portfolio and interactive developer showcase featuring animated project interactions and contact workflows.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-teal)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-Framer-purple)](https://motion.dev/)

## Installation

Clone the repository and install dependencies with npm:

```bash
git clone https://github.com/DiaztMF/My-Portfolio.git
cd My-Portfolio
npm install
```

## Quick Start

1. Create a `.env.local` configuration file:

```bash
RESEND_API_KEY="your-resend-api-key"
CONTACT_EMAIL="diaztmuhammadfirmansyah@gmail.com"
```

2. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## What is My-Portfolio?

`My-Portfolio` is the personal web platform of Diazt Muhammad Firmansyah, presenting fullstack engineering projects, competitive hackathon case studies, hardware prototypes, and professional technical milestones.

## Why My-Portfolio?

Static developer resumes fail to communicate interactive design craft, motion fluidity, and full-stack software depth. `My-Portfolio` delivers a high-performance, polished web experience with interactive project cards, micro-animations, and direct email delivery.

## API / Routes

### Key Routes & Handlers
- `/`: Primary single-page portfolio layout with Hero, About, Projects, and Experience timelines.
- `POST /api/send`: Serverless email dispatch handler powered by Resend for visitor inquiries.

## Examples

Dispatching contact inquiries via the Resend API handler:

```typescript
export async function sendInquiry(data: { name: string; email: string; message: string }) {
  const response = await fetch('/api/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error('Email delivery failed');
  return await response.json();
}
```

## Architecture & Development Guides

- Framework: Next.js App Router, React, and TypeScript.
- Motion & Animation: Motion (Framer Motion) delivering hardware-accelerated scroll and layout transitions.
- Form Management: `react-hook-form` coupled with Zod validation.

## License

MIT License. See [LICENSE](LICENSE) for full details.