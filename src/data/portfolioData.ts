export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'AI-ML' | 'Web' | 'Hackathon';
  period: string;
  description: string;
  points: string[];
  tags: string[];
  featured?: boolean;
  liveUrl?: string; // e.g. https://dermasense-seven.vercel.app/
  githubUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

export interface SkillProgress {
  name: string;
  percentage: number;
  color: string;
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  awardType: 'winner' | 'finalist' | 'prize' | 'runner-up' | 'certification';
  verifyUrl?: string; // Only shown when URL is provided
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    roles: string[];
    email: string;
    location: string;
    github: string;
    linkedin: string; // TODO: User will supply LinkedIn URL
    summary: string;
    detailedBio: string[];
    stats: {
      label: string;
      value: number;
      suffix: string;
    }[];
  };
  education: Education[];
  topSkills: SkillProgress[];
  skillCategories: SkillCategory[];
  achievements: Achievement[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Sibam Sasmal",
    firstName: "Sibam",
    lastName: "Sasmal",
    roles: [
      "Full Stack Developer",
      "Django & React Developer",
      "AI/ML Enthusiast"
    ],
    email: "shivamsasmal7@gmail.com",
    location: "Jamshedpur, Jharkhand, India",
    github: "https://github.com/sasmalshivam",
    linkedin: "https://linkedin.com/in/TODO_SIBAM_SASMAL", // TODO: Replace with your actual LinkedIn profile URL
    summary: "Computer Science undergraduate (B.Tech, graduating 2027) and full-stack developer who ships end-to-end web products in Python/Django, React and Java, with deep learning and computer vision experience.",
    detailedBio: [
      "Winner and finalist at national-level hackathons with a proven track record of shipping production-grade software under tight deadlines.",
      "Fast learner of unfamiliar APIs and systems, building robust full-stack applications with clean architecture and modern toolchains.",
      "Practices active AI-assisted development to increase iteration velocity while reviewing, testing, and verifying all outputs with rigorous critical analysis."
    ],
    stats: [
      {
        value: 3,
        suffix: "+",
        label: "Years Learning/Building"
      },
      {
        value: 7,
        suffix: "",
        label: "Projects Built"
      },
      {
        value: 4,
        suffix: "",
        label: "Awards & Honours"
      }
    ]
  },
  education: [
    {
      degree: "B.Tech, Computer Science and Engineering",
      institution: "NIST University",
      period: "09/2023 – 04/2027",
      location: "Berhampur, Odisha",
      description: "Undergraduate curriculum covering Data Structures, Algorithms, Distributed Systems, Software Engineering, and AI/ML."
    },
    {
      degree: "Intermediate, Science",
      institution: "S.D.S.M School For Excellence",
      period: "06/2020 – 05/2022",
      location: "Jamshedpur, Jharkhand",
      description: "Higher Secondary coursework in Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Matriculation (10th)",
      institution: "S.D.S.M School For Excellence",
      period: "06/2019 – 04/2020",
      location: "Jamshedpur, Jharkhand",
      description: "Foundational secondary school education with academic excellence."
    }
  ],
  topSkills: [
    { name: "Python", percentage: 85, color: "#38bdf8" },      // Proposed: 85%
    { name: "Django", percentage: 85, color: "#4ade80" },      // Proposed: 85%
    { name: "React.js", percentage: 80, color: "#06b6d4" },    // Proposed: 80%
    { name: "Tailwind CSS", percentage: 85, color: "#38bdf8" },// Proposed: 85%
    { name: "JavaScript", percentage: 80, color: "#facc15" },  // Proposed: 80%
    { name: "Java", percentage: 70, color: "#fb923c" }         // Proposed: 70%
  ],
  skillCategories: [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript (ES6+)", "C"]
    },
    {
      title: "Backend & APIs",
      skills: ["Django", "Flask", "RESTful APIs", "JWT Authentication", "NASA API Integration"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Progressive Web Apps (PWAs)"]
    },
    {
      title: "AI / ML",
      skills: ["Deep Learning", "Computer Vision", "Image Classification", "Recommendation Systems"]
    }
  ],
  achievements: [
    {
      title: "Winner, HACKTRAID 2.0",
      organization: "LIET Vizianagaram",
      date: "01/2026",
      awardType: "winner"
      // verifyUrl is intentionally omitted unless provided
    },
    {
      title: "Finalist, National Level Hackathon Hacksagon 2.0",
      organization: "IIIT Gwalior (IEEE Student Branch)",
      date: "12/2025",
      awardType: "finalist"
    },
    {
      title: "Second Prize, Paper Presentation",
      organization: "NIST University",
      date: "2025",
      awardType: "prize"
    },
    {
      title: "Runner-Up, Hackerena",
      organization: "National Technical Symposium",
      date: "2025",
      awardType: "runner-up"
    },
    {
      title: "Certification: AI/ML Basics to Advanced",
      organization: "Certified Technical Program",
      date: "2025",
      awardType: "certification"
    },
    {
      title: "Certification: Advanced C Programming",
      organization: "Core Computing Certification",
      date: "2024",
      awardType: "certification"
    }
  ],
  projects: [
    {
      id: "dermasense",
      title: "DermaSense",
      subtitle: "HealthNautix",
      category: "AI-ML",
      period: "06/2025 – 11/2025",
      description: "Built and deployed an image-based skin disease detector using deep learning, making dermatological guidance more accessible.",
      points: [
        "Architected and trained deep learning image classification models for rapid skin condition triage.",
        "Shipped as an end-to-end live web application promoting proactive healthcare through data-driven insights."
      ],
      tags: ["Deep Learning", "React", "Computer Vision", "Healthcare"],
      liveUrl: "https://dermasense-seven.vercel.app/",
      githubUrl: "https://github.com/sasmalshivam/dermasense"
    },
    {
      id: "ppe-detector",
      title: "Django-based PPE Detector",
      subtitle: "High-Risk Industries (Winner, HACKTRAID 2.0)",
      category: "Hackathon",
      period: "02/2026 – 03/2026",
      featured: true,
      description: "Real-time PPE (Personal Protective Equipment) detection system in Django with automated fine assessment and compliance tracking.",
      points: [
        "Awarded 1st Place / Winner at HACKTRAID 2.0, LIET Vizianagaram.",
        "Engineered real-time video stream detection of hardhats, safety vests, and protective gear with automated violation alerts.",
        "Implemented role-based dashboard with separate faculty and admin consoles, audit logs, and fine management."
      ],
      tags: ["Django", "Computer Vision", "Python", "Safety Tech"],
      githubUrl: "https://github.com/sasmalshivam" // TODO: Add specific repo if distinct
    },
    {
      id: "cosmic-watch",
      title: "Cosmic Watch",
      subtitle: "IIT Bhubaneswar",
      category: "Web",
      period: "02/2026 – 03/2026",
      description: "Developed an interactive dashboard powered by the NASA API to detect and track near-Earth asteroids with risk prediction and alerting.",
      points: [
        "Integrated NASA NeoWs (Near Earth Object Web Service) REST APIs for real-time orbital trajectory telemetry.",
        "Built risk analysis visualization showing impact probability, estimated diameter, velocity, and close approach notifications."
      ],
      tags: ["NASA API", "React", "Data Analytics", "REST APIs"],
      githubUrl: "https://github.com/sasmalshivam"
    },
    {
      id: "zestverse",
      title: "ZestVerse",
      subtitle: "STEM Learning PWA",
      category: "Web",
      period: "10/2025 – 11/2025",
      description: "Created a progressive web app (PWA) for interactive STEM learning among rural students through game-based modules and quizzes.",
      points: [
        "Engineered full offline-first PWA caching and service worker synchronization for low-connectivity environments.",
        "Added multilingual support and interactive gamified quizzes to improve accessibility and student retention."
      ],
      tags: ["PWA", "React", "Offline-First", "EdTech"],
      githubUrl: "https://github.com/sasmalshivam"
    },
    {
      id: "ghoomakkads",
      title: "Ghoomakkads",
      subtitle: "Full-Stack Travel Networking Platform",
      category: "Web",
      period: "09/2024 – 11/2024",
      description: "Engineered a full-stack platform that helps travelers move from digital interaction to real-world community exploration.",
      points: [
        "Developed full-stack travel networking capabilities, user authentication, social hub feeds, and itinerary coordination.",
        "Designed responsive interface with dynamic booking and exploration hubs."
      ],
      tags: ["Full Stack", "Django", "React", "Networking"],
      liveUrl: "https://ghoomakkads.vercel.app", // Live deployment URL
      githubUrl: "https://github.com/sasmalshivam"
    },
    {
      id: "face-detection",
      title: "Real-Time Face Detection System",
      subtitle: "AI & ML Summer Internship",
      category: "AI-ML",
      period: "06/2025 – 07/2025",
      description: "Developed a real-time face detection and tracking system using computer vision techniques during an intensive AI & ML internship.",
      points: [
        "Implemented high-accuracy facial bounding and feature landmark recognition with optimized frame processing.",
        "Benchmarked detection rates across varying lighting conditions and camera angles."
      ],
      tags: ["Computer Vision", "Python", "OpenCV", "AI/ML"],
      githubUrl: "https://github.com/sasmalshivam"
    },
    {
      id: "ayush-garden",
      title: "AYUSH – The Virtual Herbal Garden",
      subtitle: "Traditional Medicine Recommendation Engine",
      category: "AI-ML",
      period: "04/2024 – 06/2024",
      description: "Created an intelligent recommendation engine that maps ailments and symptoms to traditional herbal remedies and medicinal plants.",
      points: [
        "Built search and discovery algorithms mapping holistic remedies to botanical profiles.",
        "Designed educational plant taxonomy catalog with cultivation guides and medicinal application notes."
      ],
      tags: ["Recommendation Systems", "Python", "AI/ML"],
      githubUrl: "https://github.com/sasmalshivam"
    }
  ]
};
