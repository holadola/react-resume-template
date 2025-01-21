import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Carl Christiansen',
  description: "Carl Christiansen Resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Carl Christiansen`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Tech Lead</strong> and <strong
        className="text-stone-100">Full Stack Software Engineer</strong> based in Stockholm.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I have a long experience in development and consulting, working as a developer and tech
        lead for 20 years and as a consultant since 2010. I quickly adapt to new environments and
        technologies.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `For the past 10 years I have worked in both formal and informal leading and coaching roles,
        but still actively contributing to the code. Multiple positions have been fullstack, but
        mostly backend focused.`,
  aboutItems: [
    {label: 'Location', text: 'Stockholm, Sweden', Icon: MapIcon},
    {label: 'Age', text: '44', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Swedish', Icon: FlagIcon},
    {label: 'Study', text: 'Uppsala University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'Kotlin',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 7
      }
    ],
  },
  {
    name: 'WEB & APIs',
    skills: [
      {
        name: 'REST',
        level: 9,
      },
      {
        name: 'GraphQL',
        level: 8,
      },
      {
        name: 'OpenAPI',
        level: 8,
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'PostgreSQL',
        level: 8,
      },
      {
        name: 'Flyway / Liquibase',
        level: 8,
      },
    ],
  },
  {
    name: 'Infrastructure',
    skills: [
      {
        name: 'Kubernetes',
        level: 8,
      },
      {
        name: 'AWS',
        level: 8,
      },
      {
        name: 'Google Cloud',
        level: 7,
      },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      {
        name: 'Spring',
        level: 10,
      },
      {
        name: 'Spring Boot',
        level: 10,
      },
      {
        name: 'React',
        level: 7,
      },
    ],
  },
  {
    name: 'QA',
    skills: [
      {
        name: 'JUnit',
        level: 10,
      },
      {
        name: 'Kotest',
        level: 8,
      },
      {
        name: 'Sonar',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'January 2023',
    location: 'AWS',
    title: 'AWS Certified Solution Architect – Associate',
    content: <p></p>,
  },
  {
    date: 'August 2000 - August 2005',
    location: 'Uppsala University',
    title: 'Information Technology Engineering',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2023 - December 2024',
    location: 'SAP Signavio',
    title: 'Full Stack Tech Lead',
    content: (
      <p>
        When joining Signavio I got the opportunity to be one of the first members of a new team.
        My responsibilities included working closely with the product owner, the initiative lead group
        and other involved teams to find a path to a successful implementation while also leading
        the development.
        <br/><br/>
        The client was very satisfied with my performance and made sure I was assigned to another
        team after handing over to a newly employed tech lead.
      </p>
    ),
  },
  {
    date: 'August 2021 - September 2023',
    location: 'Trafikförvaltningen',
    title: 'Senior Backend Developer',
    content: (
      <p>
        Handling order management and external payment integrations for public transportation in Stockholm.
      </p>
    ),
  },
  {
    date: 'Mars 2019 - August 2021',
    location: 'Trustly',
    title: 'Lead Fullstack Developer',
    content: (
      <p>
        Maintaining existing bank integrations, integrating new banks into the Trustly infrastructure and
        developing new services to support Trustly's transition to a more modern platform.

        Also responsible for coaching developers in the team.
      </p>
    )
  },
  {
    date: 'February 2018 - February 2019',
    location: 'Klarna',
    title: 'Senior Backend Developer / Interim Tech Lead',
    content: (
      <p>
        I worked in a small team responsible for a gateway service routing requests for risk
        assessments. The service had high requirements for availability and response times since
        risk decisions are a crucial part of Klarna's business model.
      </p>
    )
  },
  {
    date: 'September 2005 - February 2019',
    location: 'Max Matthiessen, Sveriges Television, ComHem, Eniro, Soliditet',
    title: 'Senior Fullstack Developer',
    content: (
      <p>
        Information about earlier assignments are available in my resume.
      </p>
    )
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Accenture Account Manager',
      text: 'Client and Accenture Account leadership have a 100% trust into his work and the way how he is ' +
        'approaching his assignment. He demonstrates high proficiency and acts as a role model for others.',
//      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'calle@macando.me',
      href: 'mailto:calle@macando.me',
    },
    {
      type: ContactType.Location,
      text: 'Stockholm, Sweden',
      href: 'https://maps.app.goo.gl/Q6QLLVUoURgYqgf86',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/carl-christiansen-6a756b1/'},
];
