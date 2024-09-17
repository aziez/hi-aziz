import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "M. Abdul Aziz",
  initials: "MAA",
  url: "#",
  resumeUrl: "https://1drv.ms/b/s!Am7mTXvg_uCXhOFbGUd3L1NNwZ9uYA?embed=1&em=2",
  roles: ["Front End Developer", "Fullstack Javascript"],
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description:
    "Skilled Full-Stack Developer with extensive experience in Front-End development using Next.js, React and Ionic Framework. ",
  summary:
    "I'm Aziz, a Full-Stack Developer with a degree in Computer Science from Universitas Pamulang. With a robust background in modern web technologies, including Next.js, TypeScript, HTML, CSS, JavaScript, ReactJS, Ionic and Angular, I excel at crafting dynamic, user-friendly web applications. My expertise in building responsive interfaces and optimizing performance is complemented by my ability to enhance SEO and integrate third-party services seamlessly In addition to my frontend capabilities, I have significant experience in Virtual Reality development. Utilizing tools like Three.js and A-Frame, I create immersive and interactive VR experiences, including realistic virtual tours that captivate and engage users My skills extend to mobile application development with the Ionic framework and a solid foundation in IT Support, where I specialize in technical troubleshooting, hardware and software management, and network security. This diverse skill set not only allows me to tackle complex problems but also keeps me at the forefront of emerging trends in both frontend and VR development.If you’re seeking a Full-Stack Developer with a comprehensive expertise in web and VR technologies, along with a strong IT Support background, I’m eager to bring my skills to your projects. Thank you for considering my profile.",
  avatarUrl: "/me.png",
  professionalSummary: `
    As a Full-Stack Developer with a Computer Science degree from Universitas Pamulang, I bring a comprehensive skill set in modern web technologies and Virtual Reality development. My expertise includes:

    Web Development:
    • Proficient in Next.js, TypeScript, HTML, CSS, JavaScript, ReactJS, Ionic, and Angular
    • Specializes in creating responsive, dynamic, and user-friendly web applications
    • Experienced in performance optimization, SEO enhancement, and third-party service integration

    Virtual Reality Development:
    • Skilled in Three.js and A-Frame for immersive VR experiences
    • Creator of engaging virtual tours and interactive 3D environments

    Mobile Development:
    • Experienced in building cross-platform mobile applications using Ionic framework

    IT Support:
    • Strong background in technical troubleshooting, hardware/software management, and network security

    My diverse skill set enables me to tackle complex problems efficiently and stay current with emerging trends in frontend and VR development. I am committed to delivering high-quality solutions that meet and exceed client expectations.

    If you're seeking a versatile Full-Stack Developer with expertise in web technologies, VR development, and a solid IT support background, I am eager to contribute my skills to your projects. Thank you for considering my profile.
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
    tel: "+6281514415436",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aziez",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aziez13/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
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
      logoUrl: "/atomic.png",
      start: "February 2023",
      end: "Now",
      description:
        "I develop and maintain web applications using Next.js, React, HTML5, CSS3, and JavaScript. My work includes creating reusable UI components to ensure consistent design across the application, collaborating with design and backend teams to transform UI/UX designs into functional code, and implementing best practices for writing high-quality code, such as linting, testing, and version control. Additionally, I integrate third-party services like e-Sign and payment gateways to enhance application functionality, and I deploy Next.js applications to Ubuntu servers for production use.",
    },
    {
      company: "Lokcay Studio",
      badges: [],
      href: "https://Lokcay.com",
      location: "Onsite Jakarta",
      title: "IT Support",
      logoUrl: "/shopify.svg",
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
      href: "https://sportify.od.id",
      dates: "July 2024 - now",
      active: true,
      description:
        "Sportify aims to address the physical and mental health issues Millennials and Gen Z face due to their sedentary lifestyles. The platform provides services for finding workout buddies and renting sports facilities and equipment. This document outlines the requirements for developing the Sportify platform to guide the engineering team.",
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
          href: "https://sportify.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Product list with cart",
      href: "https://list-product-fe.vercel.app",
      dates: "June 2024",
      active: false,
      description:
        "Practice updating the UI in multiple places based on user actions. This is a solution to the Product list with cart challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
      technologies: [
        "Next.js",
        "Typescript",
        "json",
        "suztand",
        "TailwindCSS",
        ,
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
      image: "",
      video: "",
    },
    {
      title: "IP Address Tracker",
      href: "https://main--ipmaptracker.netlify.app/",
      dates: "April 2024",
      active: true,
      description:
        "The challenge is build out this IP Address Tracker app and get it looking as close to the design as possible. To get the IP Address locations, you'll be using the [IP Geolocation API by IPify](https://geo.ipify.org/). To generate the map, we recommend using [LeafletJS](https://leafletjs.com/).",
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
      image: "",
      video: "",
    },
    {
      title: "Advice Genarators",
      href: "https://advicegenerator13.netlify.app/",
      dates: "Maret 2024",
      active: true,
      description:
        "Developed an Advice generator, The  challenge is build out this advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.",
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
      image: "",
      video: "",
    },
    {
      title: "URL shortening API landing page",
      href: "https://main--regal-gecko-04a7cc.netlify.app/",
      dates: "Maret 2024",
      active: false,
      description:
        "Developed an URL Shortening generator, The challenge is integrate with the Clean URI API to create shortened URLs and display them like in the designs.",
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
      image: "",
      video: "",
    },
  ],
} as const;
