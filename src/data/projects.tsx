export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  problem?: string;
  architecture?: string;
  challenges?: string;
  role?: string;
  impact?: string;
  features: string[];
  tech: string[];
  liveUrl: string;
  roles: string[];
}





export const projects: Project[] = [
  {
    slug: "marketplace-mvp",
    title: "E-COMMERCE -  (Marketplace Platform with Commission & Cashback Engine)",
    shortDescription:
      "Multi-role e-commerce marketplace with admin, agent commissions and customer wallet cashback logic.",
    overview:
      "A production-ready marketplace MVP featuring multi-role access, sales agent commission tracking, and automated customer wallet cashback systems integrated with backend APIs.",
 problem:
  "Traditional e-commerce systems do not natively support structured sales-agent commission models and automated cashback wallet logic. The goal was to design a marketplace that supports multi-role interaction with controlled business logic.",

architecture:
  "The application follows a layered structure with a React frontend communicating with RESTful APIs built using Node.js and Express. Commission and cashback logic are processed server-side, with relational database storage ensuring transaction consistency.",

challenges:
  "Ensuring accurate commission calculations and wallet balance consistency required careful validation logic and role-based controls. Maintaining secure transaction flows across user roles was a key engineering focus.",
role:
  "Designed and developed the entire application independently including frontend interfaces, backend API integration, database structure design, commission business logic implementation, and deployment configuration.",

impact:
  "Demonstrates ability to design complex business logic systems beyond standard CRUD applications, including financial commission workflows and incentive wallet automation.",

      features: [
      "Role-based access (Admin / Agent / Customer)",
      "Sales agent commission calculation logic",
      "Customer wallet cashback system",
      "Secure REST API integration",
      "Responsive UI across devices",
    ],
    tech: ["React", "Node.js", "Express", "SQL", "REST APIs"],
liveUrl: "https://marketplace-ngatia.vercel.app/",
roles: ["backend", "freelance","developer"],

  },
  {
    slug: "firstcrart-ecommerce",
    title: "Responsive E-commerce Platform",
    shortDescription:
      "Full-featured e-commerce web application with structured product flows.",
    overview:
      "A responsive e-commerce application built with structured product listing flows aimed at showcasing frontend UI",
    features: [
      "Product listing and filtering",
      "User interaction flows",
      "Secure data handling",
      "API integration",
      "Responsive UI design",
    ],
    tech: ["React", "Material UI", "JavaScript"],
    liveUrl: "https://firstcrart-d27e3.web.app",
    roles: ["software-developer", "frontend", "freelance"],

  },
  {
    slug: "Trek-N-Tread",
    title: "TREK & TREAD   - (Booking/Payment-Integrated Static website)",
    shortDescription:
      "Service platform integrated with Paystack payment gateway.",
    overview:
      "A web-based services platform featuring secure Paystack payment integration with transaction verification flow.",
    features: [
      "Service booking interface",
      "Paystack payment integration",
      "Transaction verification logic",
      "Responsive frontend",
      "Backend communication",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Paystack API"],
    liveUrl: "https://outdoor-1.onrender.com",
    roles: ["developer", "backend", "freelance"],

  },
];
