export interface Project { title: string; category: string; description: string; tools: string; href?: string }
// Homepage project copy confirmed by the user; Vocabuddy retained from the audit.
export const projects: Project[] = [
  { title: 'LLM Conversational AI Research', category: 'Applied AI', description: 'Explored retrieval-augmented generation and self-critique methods to improve language model responses through research at the Amazon–Illinois AICE Center.', tools: 'RAG · Retrieval · Self-critique' },
  { title: 'Real-Time Earthquake Detection', category: 'Data Engineering', description: 'Built a streaming data pipeline combining official seismic alerts and live social signals to support earthquake event monitoring.', tools: 'Airflow · Kafka · PostgreSQL · Docker' },
  { title: 'Vocabuddy', category: 'Software Engineering', description: 'A vocabulary learning application for GRE and TOEFL preparation, with RESTful APIs and a normalized MySQL database.', tools: 'Node.js · MySQL · GCP', href: 'https://github.com/erikalee1217/Vocabuddy' }
];
// Confirmed by the user; no project destination has been supplied.
export const featuredProject: Project = {
  title: 'ClearStep',
  category: 'Applied AI',
  description: 'An AI-assisted task management app that turns unstructured thoughts into actionable tasks, with structured extraction, user review, and deterministic prioritization.',
  tools: 'React · TypeScript · FastAPI · Python · LLM'
};
export const secondaryProjects = projects.slice(0, 2);
// Approved first article; the remaining two titles are in progress.
export const writingSeries = {
  title: 'From Chatting with AI to Building with It',
  description: 'A three-part series exploring how language models work, how they connect to tools and external knowledge, and what it takes to build AI agents.',
  firstArticleId: 'why-does-ai-sometimes-get-it-wrong',
  articles: [
    'Why Does AI Sometimes Get It Wrong?',
    'From Chatbots to Applications: Tools & Retrieval',
    'From Tools to Agents: Building Multi-Step Workflows'
  ]
};
// Profile destinations verified against the existing Home.vue during the audit.
export const professionalLinks = [
  { label: 'GitHub', href: 'https://github.com/erikalee1217' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/i-hsuan-lee/' }
];
