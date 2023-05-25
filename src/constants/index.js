import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  tripguide,
  rem,
  icpna,
  cibertec,
  avansys,
  whiz,
  nest,
  next,
  laravel,
  elastic,
  trello,
  pokemon,
  socialProof,
  coronado,
  citizum,
  deslab,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SEO",
    icon: mobile,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "nestjs",
    icon: nest,
  },
  {
    name: "nextjs",
    icon: next,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "elasticsearch",
    icon: elastic,
  },
];

const experiences = [
  {
    title: "Fullstack Javascript",
    company_name: "Estudio Rodrigo, Elías & Medrano",
    icon: rem,
    iconBg: "#b30100",
    date: "Enero 2023 - Actualidad",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web usando Next.js para el frontend y NestJS para el backend.",
      "Creación de componentes reutilizables para el equipo integrado con Material UI.",
      "SQL Server como motor de base de datos pero con la tecnología ORM de Prisma.",
      "Participando en la toma de requerimientos y cumpliendo el deadline de cada proyecto.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Instituto Cultural Peruano Norteamericano",
    icon: icpna,
    iconBg: "#E6DEDD",
    date: "Feb. 2021 - Ene. 2023",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web usando Laravel como framework.",
      "Integración de plataforma interna con CRM Dynamics 356 (Microsoft).",
      "Mysql como motor de base de datos pero con la tecnología ORM de Eloquent.",
      "Participando en la toma de requerimientos y cumpliendo el deadline de cada proyecto.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Cibertec",
    icon: cibertec,
    iconBg: "#fff",
    date: "Dic. 2018 - Ene. 2021",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web usando Laravel como framework y Bootstrap 4 para el layout.",
      "Integración de Elastic Search como motor de busqueda optimizada",
      "Mysql como motor de base de datos pero con la tecnología ORM de Eloquent.",
      "Participando en la toma de requerimientos y cumpliendo el deadline de cada proyecto.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Instituto Avansys",
    icon: avansys,
    iconBg: "#fff",
    date: "Oct 2017 - Dic. 2018",
    points: [
      "Desarrollo y mantenimiento de Zoho CRM - Zoho One.",
      "Creación de landings web usando PHP como lenguaje y Bootstrap para el layout.",
      "Mysql como motor de base de datos.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Whiz",
    icon: whiz,
    iconBg: "#b30100",
    date: "Ene. 2017 - Oct. 2017",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web usando Laravel como framework",
      "Creación de Project Managment System (PMS) ayudando a gestionar de manera efectiva el trabajo del cliente.",
      "Mysql como motor de base de datos.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Trello Clon",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "materialui",
        color: "blue-text-gradient",
      },
    ],
    image: trello,
    source_code_link:
      "https://github.com/aldodarrigos/clon-de-trello-open-jirah",
  },
  {
    name: "Pokemon Interface",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link: "https://pokemon-interface-zeta.vercel.app/",
  },
  {
    name: "Social Proof",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: socialProof,
    source_code_link: "https://fm-social-proof-one.vercel.app/",
  },
  {
    name: "Intranet Coronado",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "exportexcel-php",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "exportpdf-php",
        color: "pink-text-gradient",
      },
    ],
    image: coronado,
    source_code_link: "#",
  },
  {
    name: "Deslab",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "flexbox",
        color: "pink-text-gradient",
      },
    ],
    image: deslab,
    source_code_link: "https://deslab.com.pe/",
  },
  {
    name: "Citizum",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "cms",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: citizum,
    source_code_link: "https://citizum.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
