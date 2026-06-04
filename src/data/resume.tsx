import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Muhamad Abdul Aziz",
  initials: "MAA",
  url: "#",
  resumeUrl: "https://1drv.ms/b/s!Am7mTXvg_uCXhOFbGUd3L1NNwZ9uYA?embed=1&em=2",
  roles: ["Full-Stack Developer", "IT Support Lead"],
  location: "Jakarta Timur, DKI Jakarta",
  locationLink: "https://www.google.com/maps/place/Jakarta+East,+East+Jakarta+City,+Jakarta",
  description:
    "Strategic Lead Full-Stack Developer specializing in scalable Securities Crowdfunding (SCF) ecosystems, Next.js, and Laravel (TALL stack).",
  summary: `Strategic Lead Full-Stack Developer specializing in scalable Securities Crowdfunding (SCF) ecosystems. Expert in Next.js, TALL stack, and multi-cloud (GCP/AWS) architectures with a strong focus on OJK/KSEI regulatory compliance. Combines advanced software engineering with AI-driven IoT (YOLO/ANPR) and infrastructure management to deliver secure, high-performance, and mission-critical digital solutions.`,
  avatarUrl: "/me.png",
  professionalSummary: `
  Strategic Lead Full-Stack Developer specializing in scalable Securities Crowdfunding (SCF) ecosystems. Expert in Next.js, TALL stack, and multi-cloud (GCP/AWS) architectures with a strong focus on OJK/KSEI regulatory compliance. Combines advanced software engineering with AI-driven IoT (YOLO/ANPR) and infrastructure management to deliver secure, high-performance, and mission-critical digital solutions.
  `,

  skills: [
    "Next.js",
    "React.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "shadcn/ui",
    "DaisyUI",
    "Laravel",
    "PHP",
    "Prisma ORM",
    "PostgreSQL",
    "SQL Server",
    "MySQL",
    "RESTful API",
    "TanStack Query",
    "Alpine.js",
    "Livewire",
    "Inertia.js",
    "Three.js",
    "React Three Fiber (R3F)",
    "Theatre.js",
    "Pano2VR",
    "Python",
    "YOLO",
    "PaddleOCR",
    "OpenCV",
    "C#",
    "RFID SDKs",
    "Socket Programming",
    "Ionic Framework",
    "Capacitor",
    "Electron",
    "Java",
    "Google Cloud Platform (GCP)",
    "AWS",
    "Vercel",
    "Docker",
    "CI/CD",
    "Linux/Ubuntu Server"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "Aziz13.id@gmail.com",
    tell: "+6281536333369",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aziez",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aziez13",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Dana Rintis Indonesia",
      href: "#",
      badges: [],
      location: "Jakarta",
      title: "Senior Full Stack Developer",
      start: "August 2025",
      end: "Present",
      description: "Architect and maintain scalable Securities Crowdfunding (SCF) platforms using the Laravel TALL stack and Next.js. Integrate third-party payment gateways, E-KYC, and digital signature services. Automate reporting modules for OJK and KSEI compliance, and manage AWS deployment pipelines."
    },
    {
      company: "Surya Fajar Urun Dana",
      href: "https://sfund.id",
      badges: [],
      location: "Jakarta",
      title: "Frontend Developer",
      start: "February 2023",
      end: "August 2025",
      description: "Developed high-performance financial web applications using Next.js, React, and TypeScript. Maintained the unified UI design system library to accelerate development. Collaborated with UI/UX designers and backend teams, managing GCP deployment lifecycles."
    },
    {
      company: "Piran Asia Impressa",
      href: "#",
      badges: [],
      location: "Jakarta",
      title: "IT Support Lead",
      start: "June 2017",
      end: "February 2023",
      description: "Orchestrated end-to-end IT infrastructure for a 3D architectural firm, maintaining Windows Server configurations. Optimized high-speed networks for large-scale asset transfers, managed high-capacity NAS storage, and established internal documentation SOPs."
    }
  ],
  education: [
    {
      school: "Pamulang University",
      href: "https://unpam.ac.id",
      degree: "Master of Computer Science (M.Kom)",
      logoUrl: "/waterloo.png",
      start: "February 2026",
      end: "Present",
      description: "Focus Areas: Advanced Software Engineering, Data Science, Artificial Intelligence, and Strategic IT Management. Objective: Deepening expertise in architectural scalability and advanced algorithmic solutions to lead complex enterprisegrade digital transformations."
    },
    {
      school: "Pamulang University",
      href: "https://unpam.ac.id",
      degree: "Bachelor of Computer Science (S.Kom) - GPA 3.35",
      logoUrl: "/waterloo.png",
      start: "August 2018",
      end: "November 2022",
      description: "National Professional Certification: Certified as a Professional Programmer by the UNPAM Professional Certification Agency (Cert No: 62010 2514 4 0007015 2022), validating core competencies. Specially selected for Kampus Merdeka at PT GITS Indonesia (520+ Hours) focusing on high-performance Android development. Spearheaded the creation of SmartVille (Java-based mobile application). Recognized under the Indonesian National Qualifications Framework (KKNI Level 6)."
    }
  ],
  projects: [
    {
      title: "Arkana Catering",
      href: "https://arkana-catering.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Premium digital catering catalog and ordering platform with custom package calculators, interactive menus, and structured WhatsApp reservation dispatching.",
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://arkana-catering.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/portfolio/arkana.png",
      video: "",
    },
    {
      title: "WordAI",
      href: "https://wordai.my.id/",
      dates: "2024",
      active: true,
      description:
        "AI-driven semantic rephrasing and content optimization engine assisting academic writers and SEO copywriters in transforming paragraphs into high-quality text.",
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "OpenAI API"],
      links: [
        {
          type: "Website",
          href: "https://wordai.my.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/portfolio/wordai.png",
      video: "",
    },
    {
      title: "Menuku",
      href: "https://www.menuku.my.id/",
      dates: "2024",
      active: true,
      description:
        "SaaS platform for digital QR menus and POS Management. Architected for the F&B industry to ensure optimal SEO, type-safe PostgreSQL database operations via Prisma, and optimized caching with TanStack Query.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TanStack Query", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://www.menuku.my.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/portfolio/menuku.png",
      video: "",
    },
    {
      title: "Sportify",
      href: "https://sportify.or.id",
      dates: "July 2024 - Present",
      active: true,
      description:
        "Sports ecosystem for facility rentals and community engagement. Developed an all-in-one marketplace for facility bookings and equipment rentals, with social matchmaking features.",
      technologies: ["Next.js", "TypeScript", "Prisma ORM", "MySQL", "Next Auth", "TailwindCSS", "DaisyUI"],
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
      title: "Archipelago Adventure",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Immersive 3D creative experience. Engineered a full 3D world where users navigate a ship across a digital archipelago, utilizing React Three Fiber (R3F), Theatre.js, and Three.js for cinematic rendering.",
      technologies: ["React Three Fiber", "Three.js", "Theatre.js", "Next.js", "TypeScript"],
      links: [],
      image: "/images/portfolio/archipelago.png",
      video: "",
    },
    {
      title: "Heron",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Immersive VR Virtual Tour application designed for real estate marketing, featuring interactive 360-degree panoramas built with Pano2VR and Ionic, deployed to Android and Windows.",
      technologies: ["Ionic Framework", "Capacitor", "Electron", "Pano2VR"],
      links: [],
      image: "/images/portfolio/heron.png",
      video: "",
    },
    {
      title: "RFID Desktop Control System",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Desktop middleware application in C# interfacing with RFID hardware for real-time tag detection, database synchronization, and event-driven monitoring via a web dashboard.",
      technologies: ["C#", ".NET", "RFID SDKs", "Socket Programming", "SQL Server"],
      links: [],
      image: "/images/portfolio/rfid.png",
      video: "",
    },
    {
      title: "Automated Number Plate Recognition System",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "AI-driven ANPR system using YOLO for real-time license plate detection, PaddleOCR for character recognition, OpenCV for preprocessing, and hardware-trigger integrations.",
      technologies: ["Python", "YOLO", "PaddleOCR", "OpenCV"],
      links: [],
      image: "/images/portfolio/anpr.png",
      video: "",
    },
    {
      title: "Best Event Solution",
      href: "https://besteventsolution.id/",
      dates: "August 2023 - December 2023",
      active: false,
      description:
        "Event management platform facilitating organizers in planning, marketing, and managing large-scale corporate and private activities.",
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
        "Digital portal for IDEC, a major dental industry exhibition in Jakarta, featuring scientific conference registrations and attendee management.",
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
        "Virtual tour and digital culture exhibition platform for Bank Indonesia, letting visitors explore shared value displays in full 360-degree panoramas.",
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
        "E-commerce product list application with client-side state management cart features developed as part of a frontend coding challenge.",
      technologies: ["Next.js", "TypeScript", "Zustand", "TailwindCSS", "Shadcn UI"],
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
        "IP Address Tracker integrating IPify location API and LeafletJS for responsive geographical map rendering.",
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
        "Lightweight generator fetching random quotes and advice from the Advice Slip API.",
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
        "Landing page integrating cleanURI shortener API, enabling link caching and responsive management of links.",
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
