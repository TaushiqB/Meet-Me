import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "AI",
    icon: <FreelancerIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "PHP",
      icon: "/assets/tech/php.png",
      link: "https://www.php.net/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
};

const experiences = [
  {
    title: "Intern",
    company_name: "Lumel Technologies Inc",
    icon: "/assets/company/lumel.png",
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "Implemented end-to-end test automation scripts using Playwright and Selenium frameworks. Incorporated the Page Object Model and handled dynamic elements using XPath, CSS selectors, and JavaScript DOM manipulation.",
      "Resolved over 300 bugs in existing automation frameworks across multiple modules. Documented test results and provided detailed reports on execution trends, failures, and performance metrics. Leveraged Allure Reporting.",
      "Implemented various automated testing levels including unit testing, integration testing, performance testing and system testing to cover different aspects of the application and ensure comprehensive test coverage.",
      "Worked within Agile Scrum team, participating in sprint planning and daily stand-ups for continuous improvement. Actively used Jira for tracking bugs and test cases. Collaborated on the code repository hosted in Azure DevOps.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Bosch Global Software Technologies",
    icon: "/assets/company/bosch.png",
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Web interface with HTML, CSS, and JavaScript; implemented Django backend for server logic, APIs, and database operations.",
      "Integrated Django REST Framework (DRF) for scalable API development, enabling real-time data retrieval and processing. Developed RESTful APIs for interaction between the frontend and backend.",
      "Incorporated a MySQL database for data storage and management, leveraging Django ORM for query handling and database operations.",
      "Used Git for version control and collaboration on GitHub and GitLab. Adopted Agile methodology.",
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
    name: "Wallet Wise",
    description:
      "A cloud-deployed full-stack application that offers users insights into their spending habits, budget planning, and financial goal setting.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/wallet.jpg",
    source_code_link: "https://github.com/TaushiqB/Wallet-Wise",
    deployed_link: "https://github.com/TaushiqB/Wallet-Wise",
  },
  {
    name: "Cloud Stay",
    description:
      "An accommodation booking system for employees with features like grade-based bookings, manager approvals, and automated meal data clearance.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "oracle-db",
        color: "pink-text-gradient",
      },
      {
        name: "jwt-auth",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/hotel.png",
    source_code_link: "https://github.com/TaushiqB/Cloud-Stay",
    deployed_link: "https://github.com/TaushiqB/Cloud-Stay",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/TaushiqB",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/taushiq-balamurugan-446920267/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://leetcode.com/u/Taushiq8/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com",
  },
];

const heroTexts = [
  "Software Engineer",
  500,
  "Full-Stack Developer",
  500,
  "SWE Intern @Bosch",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
