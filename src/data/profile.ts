export const profile = {
  name: "Ayman El Harake",
  title: "Java Developer",
  tagline:
    "Java, Spring, and Python across backend services, APIs, and full applications — Alfresco alum, delivery-focused, multilingual.",
  summary:
    "Java Developer with strong Java, Spring, JavaScript, and Python experience across backend services, APIs, and full applications. Builds reliable systems with solid engineering judgement, CI/CD, and practical use of AI-assisted development. Clear communicator, multilingual, and delivery-focused.",
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
        "Promoted after demonstrating strong automation delivery and a clear passion for AI-driven workflows.",
        "Built end-to-end UI automation for SaaS platforms using Playwright, including codegen/recorder-driven test creation.",
        "Turned repetitive manual checks into reliable automated flows across critical product workflows.",
        "Combined UI automation with API testing (Postman) and CI execution to support safer, faster releases.",
      ],
    },
    {
      role: "Java Developer",
      company: "ESG Global",
      start: "Jan 2024",
      end: "Oct 2024",
      bullets: [
        "Built scalable backend services using Java, Spring Boot, microservices, and Kafka for real-time messaging and data processing on energy SaaS platforms.",
        "Developed REST APIs for billing, customer, and data systems.",
        "Worked with microservices and cloud deployments.",
        "Processed large datasets and real-time data flows.",
        "Improved performance, reliability, and system monitoring.",
        "Collaborated with teams and supported production systems.",
      ],
    },
    {
      role: "Solution Developer",
      company: "Alfresco",
      note: "Promoted from Java Developer",
      start: "Nov 2022",
      end: "Nov 2023",
      bullets: [
        "Built Java/Spring Boot APIs and Alfresco platform extensions.",
        "Delivered key solutions for Evergy that significantly improved content retrieval performance.",
        "Led data migration initiatives using Spring Boot, ensuring minimal downtime and data integrity.",
      ],
    },
    {
      role: "Java Developer",
      company: "Alfresco",
      start: "Feb 2019",
      end: "Nov 2022",
      bullets: [
        "Developed Microsoft Office integration features using AngularJS.",
        "Designed and implemented Alfresco Transform Core backend components (Java/Spring).",
        "Contributed to Docker and Kubernetes deployment solutions and Jenkins-based CI/CD pipelines.",
      ],
    },
    {
      role: "Software Developer (Academy)",
      company: "Sparta Global",
      start: "Aug 2018",
      end: "Feb 2019",
      bullets: [
        "Completed Sparta Global's intensive recruit-train-deploy academy in London.",
        "Trained in Java software development, engineering fundamentals, and test automation.",
        "Selected among a small cohort that completed the programme and placed at Alfresco.",
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
        "AI writing app with paragraph-level editing and real-time content generation.",
      youtubeId: "kQBaPMqguSY",
    },
    {
      name: "Upwork automation",
      stack: "Python, Selenium, OpenAI",
      description:
        "Python/Selenium and OpenAI API for job matching and proposals.",
      youtubeId: "4ORArzjN3jg",
    },
  ],

  skillGroups: [
    {
      label: "Backend & APIs",
      items: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Microservices",
        "Kafka",
        "PostgreSQL",
      ],
    },
    {
      label: "Frontend & integration",
      items: ["JavaScript", "HTML", "CSS", "AngularJS", "Node.js"],
    },
    {
      label: "Platform & delivery",
      items: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "AWS", "Linux", "Git"],
    },
    {
      label: "Quality & observability",
      items: [
        "Selenium",
        "Postman",
        "Agile",
        "BDD/TDD",
        "Prometheus",
        "Grafana",
        "Kibana",
      ],
    },
    {
      label: "AI-assisted development",
      items: ["Python", "Cursor", "Claude", "GitHub Copilot", "AI-assisted development"],
    },
  ],

  education: [
    "BSc Computing & Business (2:1), The Open University",
    "Oracle Certified Java SE 11 Developer (OCPJD)",
  ],

  languages: ["English", "French", "Spanish", "Portuguese"],
} as const;
