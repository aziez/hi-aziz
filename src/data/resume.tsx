import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "M. Abdul Aziz",
  initials: "MAA",
  url: "#",
  resumeUrl: "https://1drv.ms/b/s!Am7mTXvg_uCXhOFbGUd3L1NNwZ9uYA?embed=1&em=2",
  roles: ["Front-End Developer", "Full-Stack JavaScript Developer"],
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description:
    "Experienced Full-Stack Developer specializing in Front-End development with Next.js, React, and the Ionic Framework.",
  summary: `
  I'm Aziz, a Full-Stack Developer with a degree in Computer Science from Universitas Pamulang. My key areas of expertise include:

  • Front-End Development: Proficient in Next.js, React, TypeScript, and Angular.
  • Back-End Development: Solid experience with Node.js and database management.
  • Mobile Development: Skilled in cross-platform app creation using the Ionic framework.
  • Virtual Reality: Adept at developing immersive experiences with Three.js and A-Frame.
  • IT Support: Strong background in troubleshooting and network security.
`,
  avatarUrl: "/me.png",
  professionalSummary: `
  As a Full-Stack Developer with a degree in Computer Science from Universitas Pamulang, I offer a wide range of expertise in modern web technologies and Virtual Reality development. My capabilities include:

  Web Development:
  • Expertise in Next.js, TypeScript, HTML, CSS, JavaScript, ReactJS, Ionic, and Angular.
  • Specialize in creating responsive, dynamic, and user-friendly web applications.
  • Experienced in performance optimization, SEO, and third-party service integrations.

  Virtual Reality Development:
  • Skilled in Three.js and A-Frame for building immersive VR experiences.
  • Developed engaging virtual tours and interactive 3D environments.

  Mobile Development:
  • Proficient in building cross-platform mobile apps using the Ionic framework.

  IT Support:
  • Extensive experience in technical troubleshooting, hardware/software management, and network security.

  My diverse skill set allows me to approach complex challenges with efficiency and stay ahead of industry trends. I am committed to delivering top-tier solutions that exceed expectations.

  If you're looking for a versatile Full-Stack Developer with expertise in web technologies, VR development, and IT support, I am ready to contribute my skills to your projects. Thank you for reviewing my profile.
`,

  skills: [
    "Ionic",
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "WebGL",
    "Postgres",
    "MongooDB",
    "MYSQL",
    "Native Android (Java)",
    "Python",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "Aziz13.id@gmail.com",
    tell: "+6281514415436",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aziez",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aziez13/",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Surya Fajar Urun Dana",
      href: "https://sfund.id",
      badges: [],
      location: "Onsite Jakarta",
      title: "Front End Developer",
      start: "February 2023",
      end: "present",
      description:
        "I develop and maintain web applications using Next.js, React, HTML5, CSS3, and JavaScript. My work includes creating reusable UI components to ensure consistent design across the application, collaborating with design and backend teams to transform UI/UX designs into functional code, and implementing best practices for writing high-quality code, such as linting, testing, and version control. Additionally, I integrate third-party services like e-Sign and payment gateways to enhance application functionality, and I deploy Next.js applications to Ubuntu servers for production use.",
    },
    {
      company: "Lokcay Studio",
      badges: [],
      href: "https://Lokcay.com",
      location: "Onsite Jakarta",
      title: "IT Support",
      start: "June 2017",
      end: "January 2023",
      description:
        "I provide first-line support for software, hardware, and network issues, assisting employees with computer setup and configuration, including for new hires. I monitor and configure Windows Server to ensure accessibility, perform routine system and network maintenance, and manage network infrastructure, including routers, switches, and firewalls. I also install and configure hardware such as desktops, laptops, and printers, manage software installations and licenses, and configure NAS for efficient data management. Additionally, I maintain detailed IT documentation, create user guides, and develop company profile websites.",
    },
  ],
  education: [
    {
      school: "SMK Al-hikmah 2",
      href: "https://alhikmah1.or.id/",
      degree: "Junior Hight School",
      logoUrl: "/buildspace.jpg",
      start: "2014",
      end: "2016",
    },
    {
      school: "University of Pamulang",
      href: "https://unpam.ac.id",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Sportify",
      href: "https://sportify.or.id",
      dates: "July 2024 - Present",
      active: true,
      description:
        "Sportify tackles physical and mental health issues among Millennials and Gen Z, offering a platform to find workout partners and rent sports facilities and equipment. This document outlines the platform’s requirements to guide the engineering team.",
      technologies: [
        "Next.js",
        "Typescript",
        "Next Auth",
        "MySQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Daisy UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://sportify.or.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/portfolio/sportify.png",
      video: "",
    },
    {
      title: "Best Event Solution",
      href: "https://besteventsolution.id/",
      dates: "August 2023 - December 2023",
      active: false,
      description:
        "Best Event Solutions is an event management skill that helps support and facilitate the work of event organizers to achieve event objectives.Every activity that is held aims to gain benefits for both parties, both the organizers and those present at the time the activity takes place.",
      technologies: ["Wordpress"],
      links: [
        {
          type: "Website",
          href: "https://besteventsolution.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/portfolio/best.png",
      video: "",
    },
    {
      title: "Indonesia Dental Exhibition",
      href: "https://indonesiadentalexpo.com/",
      dates: "January 2024 - Maret 2024",
      active: false,
      description:
        "The Indonesia Dental Exhibition & Conference (IDEC) is a major event in the dental industry, held every two years in Jakarta. It brings together dental professionals, suppliers, and industry leaders to showcase the latest dental products, technologies, and services. The event features an exhibition, a scientific conference with international speakers, and numerous networking opportunities. IDEC aims to advance the dental field in Indonesia by providing a platform for education, innovation, and professional growth.",
      technologies: ["Wordpress"],
      links: [
        {
          type: "Website",
          href: "https://indonesiadentalexpo.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/portfolio/idec.png",
      video: "",
    },
    {
      title: "BI Fest Virtual Exhibitons",
      href: "https://dyc21.s3.ap-southeast-1.amazonaws.com/fesbukers_06/index.html",
      dates: "April 2023 - Mei 2023",
      active: false,
      description:
        "The Work Culture Festival of Bank Indonesia is a place where you can explore and interact with the diversity of cultures and shared values; education; and knowledge about the young culture that exists at Bank Indonesia. Congratulations on exploring and benefiting from it.",
      technologies: ["Virtual tour", "Pano2VR"],
      links: [
        {
          type: "Website",
          href: "https://dyc21.s3.ap-southeast-1.amazonaws.com/fesbukers_06/index.html",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/portfolio/bifest.png",
      video: "",
    },
    {
      title: "Product List with Cart",
      href: "https://list-product-fe.vercel.app",
      dates: "June 2024",
      active: false,
      description:
        "This project enhances UI updates based on user actions. It was developed as part of a Frontend Mentor challenge to improve coding skills by building real-world applications.",
      technologies: [
        "Next.js",
        "Typescript",
        "JSON",
        "Zustand",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://list-product-fe.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aziez/product-list",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/portfolio/menu.png",
      video: "",
    },
    {
      title: "IP Address Tracker",
      href: "https://main--ipmaptracker.netlify.app/",
      dates: "April 2024",
      active: true,
      description:
        "Built an IP Address Tracker that uses the IPify API for location data and LeafletJS for map rendering. The goal was to closely match the design challenge on Frontend Mentor.",
      technologies: ["React.js", "Javascript", "Leaflet", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://main--ipmaptracker.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aziez/IP-Tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/portfolio/ip-chechker.png",
      video: "",
    },
    {
      title: "Advice Generator",
      href: "https://advicegenerator13.netlify.app/",
      dates: "March 2024",
      active: true,
      description:
        "Developed an advice generator using the Advice Slip API, designed to look as close as possible to the provided design.",
      technologies: ["HTML", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://advicegenerator13.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aziez/Advice_generator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/portfolio/advice.png",
      video: "",
    },
    {
      title: "URL Shortening API Landing Page",
      href: "https://main--regal-gecko-04a7cc.netlify.app/",
      dates: "March 2024",
      active: false,
      description:
        "Created a URL shortener integrated with the Clean URI API to generate shortened links and display them according to the design challenge.",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://main--regal-gecko-04a7cc.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aziez/url_shorter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/portfolio/url-shorter.png",
      video: "",
    },
  ],
} as const;
