import type { ReactNode } from "react";

export type Tech =
  | "css"
  | "flow"
  | "formspree"
  | "html"
  | "javascript"
  | "mui"
  | "next"
  | "php"
  | "prismic"
  | "react"
  | "sass"
  | "tailwind"
  | "typescript"
  | "vercel"
  | "vue"
  | "wordpress";

export type ImageData = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  title: string;
  description: ReactNode;
  screenshot?: ImageData;
  tech: Tech[];
  liveUrl?: string;
  githubUrl?: string;
};

export type Testimonial = {
  name: string;
  affiliation: string;
  quote: ReactNode;
  picture: ImageData;
};

export const intro: ReactNode = (
  <>
    Hi, I&apos;m <strong>Stuart</strong>. <br /> I turn product ideas into
    shipped software.
  </>
);

export const introSummary =
  "Senior front-end engineer with 20 years' experience, now working across the full stack with TypeScript, React, Vue and AI-assisted development.";

export const profilePicture: ImageData = {
  src: "/images/profile.webp",
  width: 800,
  height: 800,
  alt: "Stuart Garner",
};

export const about: ReactNode = (
  <>
    <p>
      I&apos;m a senior front-end engineer with <strong>20 years</strong> of
      commercial experience across <strong>finance</strong>,{" "}
      <strong>gaming</strong>, <strong>agencies</strong>, the{" "}
      <strong>public sector</strong> and <strong>enterprise</strong>, for
      clients ranging from start-ups to global brands.
    </p>
    <p>
      My core is <strong>TypeScript</strong> with <strong>React</strong> and{" "}
      <strong>Vue</strong>: component architecture, design systems,{" "}
      <strong>accessibility</strong> and well-tested code that teams can
      maintain. Increasingly I work across the <strong>full stack</strong>. On
      Fire Alarm MD I built everything from the database and API to{" "}
      <strong>payments</strong> and the <strong>iOS and Android apps</strong>.
    </p>
    <p>
      <strong>AI is part of how I work.</strong> I use tools like{" "}
      <strong>Claude Code</strong> daily for scaffolding, refactoring and test
      coverage, which lets me ship in weeks what used to take months. The
      judgement stays with me: architecture, code review, accessibility and
      performance. I also build AI products, including the interfaces that make
      AI agents usable for enterprise teams.
    </p>
    <p>
      I&apos;m comfortable as the sole engineer working with a product owner, or
      as part of a larger team. Either way, I care about <strong>clean</strong>,{" "}
      <strong>readable</strong> code and products people actually enjoy using.
    </p>
  </>
);

export const projects: Project[] = [
  {
    title: "Fire Alarm MD",
    description: (
      <>
        <p>
          <strong>Full-stack SaaS, web and mobile, 2026.</strong> Fire Alarm MD
          helps facility teams log fire alarm activations, pinpoint repeat
          causes and understand what false alarms cost across every building
          they manage.
        </p>
        <p>
          As the <strong>sole engineer</strong>, working with a project manager,
          I designed and built the whole product, using{" "}
          <strong>Claude Code</strong> as an AI pair programmer:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>API</strong>: TypeScript serverless functions on Vercel with
            Neon Postgres, covering authentication and email verification,
            multi-tenant organisations with roles and invites, Stripe
            subscriptions with per-seat billing, file attachments and OpenAPI
            docs.
          </li>
          <li>
            <strong>Web app</strong>: React, Vite, MUI and Redux, with an
            analytics dashboard breaking alarms down by date, location,
            manufacturer and root cause, plus estimated business-interruption
            cost. Available in four languages.
          </li>
          <li>
            <strong>Mobile app</strong>: Expo and React Native for iOS and
            Android, with biometric login and logging alarms on site.
          </li>
          <li>
            <strong>Quality</strong>: over 160 test files across the API and web
            app, including Playwright end-to-end tests.
          </li>
        </ul>
      </>
    ),
    screenshot: {
      src: "/images/portfolio/fire-alarm-md.jpg",
      width: 1600,
      height: 804,
      alt: "Fire Alarm MD dashboard on desktop and mobile",
    },
    tech: ["mui", "react", "typescript", "vercel"],
    liveUrl: "https://www.fire-alarm-md.com",
  },
  {
    title: "Word Games & Puzzles",
    description: (
      <>
        <p>
          <strong>Personal project, 2026.</strong> A free word games site with
          word searches, crosswords and a multiplayer snakes and ladders quiz,
          rebuilt from scratch on a current stack. Built solo with{" "}
          <strong>Claude Code</strong>, with the first full version shipped in
          under a week.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Pluggable game engine</strong>: each game type defines its
            own validated puzzle and solution, so new types need no database
            changes. Solutions never reach the browser.
          </li>
          <li>
            <strong>Accounts and roles</strong>: players save progress and best
            times, creators share private-link games, and admins draft, preview
            and publish from a dashboard.
          </li>
          <li>
            <strong>Payments</strong>: yearly creator subscriptions through
            Stripe.
          </li>
        </ul>
        <p>
          <strong>Stack:</strong> Next.js 16, React 19, Tailwind 4, Better Auth,
          Drizzle ORM, Neon Postgres, Zod, Vitest, Vercel.
        </p>
      </>
    ),
    screenshot: {
      src: "/images/portfolio/word-search-in-play.jpg",
      width: 1600,
      height: 866,
      alt: "Capital Cities word search in progress, with 14 of 27 words found",
    },
    tech: ["next", "react", "tailwind", "typescript", "vercel"],
    liveUrl: "https://www.randomwordsearch.com",
  },
  {
    title: "AI Presentation & Research Platform",
    description: (
      <>
        <p>
          <strong>Enterprise client, 2025 – present.</strong> An internal
          platform where staff work with specialist <strong>AI agents</strong>{" "}
          to research topics, ground answers in their own documents and generate
          presentation decks.
        </p>
        <p>
          As a <strong>senior front-end engineer</strong> in a team of around
          ten, I built much of the user experience:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Deck generation wizard</strong>: users choose how a deck is
            structured, including letting the AI decide the outline, with a live
            preview linked to the slide editor.
          </li>
          <li>
            <strong>Document context</strong>: attaching uploaded files and
            shared team documents to an AI conversation, with search, recent
            files and reliable recovery when requests fail.
          </li>
          <li>
            <strong>Research and audit screens</strong>: interfaces for
            long-running AI research and automated deck quality audits, with
            clear progress, results and completion states.
          </li>
          <li>
            <strong>Accessibility and quality</strong>: contributed to a
            platform-wide accessibility and static analysis clean-up, backed by
            extensive unit and end-to-end tests.
          </li>
        </ul>
        <p>
          <strong>Stack:</strong> Vue 3, TypeScript, Pinia, Tailwind, Vitest,
          Playwright, serverless back end, LLM APIs.
        </p>
      </>
    ),
    screenshot: {
      src: "/images/portfolio/ai-platform-illustration.jpg",
      width: 1600,
      height: 866,
      alt: "Illustration of an AI research agent chat beside a generated slide deck and audit suggestions",
    },
    tech: ["tailwind", "typescript", "vue"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Philip Witherby",
    affiliation: "Lead Software Engineer | Network Rail",
    quote: (
      <p>
        Stuart led the front end development, middleware integration and cloud
        infrastructure development for a series of highly contentious, security
        conscious and time sensitive greenfield projects.{" "}
        <strong>
          He delivered high quality solutions and code at all times, always on
          time.
        </strong>{" "}
        Stuart picked up new technology seamlessly and maintained existing
        codebases drawing on his vast knowledge of software design principles
        and patterns. I would jump at any opportunity to collaborate again in
        the future.
      </p>
    ),
    picture: {
      src: "/images/testimonials/philip-witherby.webp",
      width: 800,
      height: 800,
      alt: "Philip Witherby",
    },
  },
  {
    name: "Nick Lewis",
    affiliation: "Front-end Engineer | VIXIO Regulatory Intelligence",
    quote: (
      <p>
        Stuart is a dedicated team member who approaches day-to-day challenges
        with a pragmatic view. He is not afraid to push back against external
        pressures from management where due and to give honest opinions on ideas
        whether in agreement or otherwise.{" "}
        <strong>His knowledge of Javascript is broad and impressive,</strong> he
        was able to pick up on a very complex codebase with little assistance
        and take ownership of it. I would recommend Stuart highly.
      </p>
    ),
    picture: {
      src: "/images/testimonials/nick-lewis.webp",
      width: 200,
      height: 200,
      alt: "Nick Lewis",
    },
  },
  {
    name: "Georgina Hughes",
    affiliation:
      "Personal and Business Coach | Agile Ways of Working Specialist | Meeting Facilitator",
    quote: (
      <p>
        Stuart is a hard working front end developer, and does whatever it takes
        to deliver.{" "}
        <strong>
          He&apos;s a creative individual and brings that creativity into his
          work with grace and humility.
        </strong>{" "}
        Stuart works well as part of a team, thinking about how a piece of work
        can be completed as a whole. He has a clear grasp of the difference
        between iterative and incremental development.
      </p>
    ),
    picture: {
      src: "/images/testimonials/georgina-hughes.jpeg",
      width: 800,
      height: 800,
      alt: "Georgina Hughes",
    },
  },
];

export const clients: ImageData[] = [
  {
    src: "/images/clients/premium-credit.webp",
    width: 300,
    height: 78,
    alt: "Premium Credit",
  },
  {
    src: "/images/clients/virgin.webp",
    width: 120,
    height: 105,
    alt: "Virgin",
  },
  {
    src: "/images/clients/gamesys.webp",
    width: 768,
    height: 212,
    alt: "Gamesys",
  },
  {
    src: "/images/clients/facebook.webp",
    width: 256,
    height: 256,
    alt: "Facebook",
  },
  {
    src: "/images/clients/fidelity.webp",
    width: 652,
    height: 210,
    alt: "Fidelity",
  },
  {
    src: "/images/clients/pfizer.webp",
    width: 1173,
    height: 483,
    alt: "Pfizer",
  },
  { src: "/images/clients/rbi.webp", width: 197, height: 197, alt: "rbi" },
  {
    src: "/images/clients/blue-line-rental.webp",
    width: 1400,
    height: 210,
    alt: "Blue Line Rental",
  },
  {
    src: "/images/clients/roche.webp",
    width: 2330,
    height: 1260,
    alt: "Roche",
  },
];
