export const profile = {
  name: "Ayman El Harake",
  title: "Full Stack Developer",
  tagline:
    "Java & Spring backend, product-facing UI, and CI/CD — Alfresco alum, delivery-focused, multilingual.",
  summary:
    "Full Stack Developer with strong Java, Spring, JavaScript, and Python across UI and backend. Builds end-to-end features — APIs, integrations, and application UI — with solid CI/CD and engineering judgement. Comfortable using AI as a development aid while staying hands-on in the code.",
  email: "harakeayman@gmail.com",
  linkedin: "https://www.linkedin.com/in/aymanharake/",
  github: "https://github.com/aymanthefirst",
  location: "Abingdon, UK — open to London hybrid and relocation (EU)",
  availability: "Available with ~1 week notice",

  experience: [
    {
      role: "Automation Engineer",
      company: "ESG Global",
      note: "Promoted",
      start: "Oct 2024",
      end: "Oct 2025",
      bullets: [
        "Promoted after strong automation delivery and AI-driven workflow improvements.",
        "Built end-to-end UI automation with Playwright, including recorder-driven test creation.",
        "Turned repetitive manual checks into reliable flows across critical product workflows.",
        "Combined UI automation with API testing (Postman) and CI for safer, faster releases.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "ESG Global",
      start: "Jan 2024",
      end: "Oct 2024",
      bullets: [
        "Delivered full stack features on energy SaaS platforms.",
        "Built Java/Spring Boot services and REST APIs for billing, customer, and data systems.",
        "Worked with microservices, cloud deployments, and front-to-back feature delivery.",
        "Supported production systems with cross-team collaboration.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Alfresco",
      note: "Promoted from Automation Tester",
      start: "Feb 2020",
      end: "Nov 2023",
      bullets: [
        "Built Java/Spring Boot APIs and Alfresco platform extensions.",
        "Delivered solutions for Evergy that significantly improved content retrieval performance.",
        "Contributed to Keycloak-based SSO integration for Alfresco products (strict security contexts).",
        "Worked across backend services and integration/UI concerns end to end.",
      ],
    },
    {
      role: "Automation Tester",
      company: "Alfresco",
      start: "Feb 2019",
      end: "Feb 2020",
      bullets: [
        "Title was Automation Tester; day-to-day work was already full stack.",
        "Shipped features spanning Java backend and UI-facing integration work.",
        "Developed Microsoft Office integration work using AngularJS alongside Java/Spring.",
      ],
    },
    {
      role: "Software Developer (Academy)",
      company: "Sparta Global",
      start: "Aug 2018",
      end: "Feb 2019",
      bullets: [
        "Intensive recruit-train-deploy academy in London.",
        "Java, engineering fundamentals, and test automation.",
        "Selected for placement at Alfresco after completion.",
      ],
    },
  ],

  projects: [
    {
      name: "AI trading bot",
      stack: "Python, FastAPI, React",
      description: "Automated trading loop with dashboard UI and live demo.",
      youtubeId: "F9SahN1UJM0",
    },
    {
      name: "Scribing.AI",
      stack: "AI writing",
      description:
        "Writing app with paragraph-level editing and real-time content generation.",
      youtubeId: "kQBaPMqguSY",
    },
    {
      name: "Upwork automation",
      stack: "Python, Selenium, OpenAI",
      description: "Job matching and proposal drafting with browser automation.",
      youtubeId: "4ORArzjN3jg",
    },
  ],

  skillGroups: [
    {
      label: "Backend & APIs",
      items: ["Java", "Spring Boot", "REST", "Microservices", "Kafka", "PostgreSQL"],
    },
    {
      label: "Frontend & integration",
      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "Angular",
        "Angular",
        "AngularJS",
        "HTML",
        "CSS",
        "Node.js",
      ],
    },
    {
      label: "Platform & delivery",
      items: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "AWS", "Linux", "Git"],
    },
    {
      label: "Quality & automation",
      items: ["Playwright", "Selenium", "Postman", "Agile", "BDD/TDD"],
    },
    {
      label: "AI-assisted development",
      items: ["Python", "Cursor", "Claude", "GitHub Copilot"],
    },
  ],

  education: [
    "BSc Computing & Business (2:1), The Open University",
    "Oracle Certified Java SE 11 Developer (OCPJD)",
  ],

  languages: ["English", "French", "Spanish", "Portuguese"],
} as const;
