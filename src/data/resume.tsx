import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "M. Abdul Aziz",
  initials: "MAA",
  url: "#",
  roles: ["Front End Developer", "Fullstack Javascript"],
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description:
    "Dedicated to pushing the boundaries of design and functionality to craft user-centric web experiences that captivate and leave a lasting impression.",
  summary:
    "As a highly skilled Full-Stack Developer, I possess deep expertise in modern Front-End technologies, particularly Next.js and TypeScript. I have a strong track record in building responsive web applications, optimizing performance, and enhancing SEO. Additionally, I am adept at integrating third-party services and deploying applications on Ubuntu servers. My code is consistently clean, maintainable, and aligned with high accessibility standards,Beyond development, I have significant experience in IT Support, specializing in advanced technical troubleshooting, hardware and software management, and network security enhancements. I'm also well-versed in system maintenance, data backup, and recovery, making me a reliable resource for comprehensive IT solutions.",
  avatarUrl: "/me.png",
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
