/**
 * skillsData.js
 * Comprehensive Full-Stack Skills & Frameworks dataset
 * Structured for the Cinematic 3D Scroll-Driven Tunnel Gallery.
 */
export const skillsData = [
  {
    id: 'react-next',
    sequence: '01 / 06',
    title: 'React 19 & Next.js 15',
    category: 'Frontend Engineering',
    creator: 'Client Architecture',
    badge: 'SSR · REACT 19',
    aspect: 'landscape',
    accentColor: '#5B95F9',
    secondaryAccent: '#61DAFB',
    description:
      'Engineering high-throughput, component-driven client applications with Next.js App Router, React Server Components, and fluid kinetic micro-interactions.',
    frameworks: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
    metrics: {
      latency: '14ms First Paint',
      score: '100 Core Web Vitals',
      architecture: 'Hybrid RSC + Edge SSR'
    },
    codeSnippet: `// RSC Server Component Execution
export async function TechStackStream() {
  const telemetry = await fetchMetrics({ cache: 'no-store' });
  return <ClientViewport telemetry={telemetry} kinetic />;
}`
  },
  {
    id: 'node-express',
    sequence: '02 / 06',
    title: 'Node.js & Express Architecture',
    category: 'Backend & Systems',
    creator: 'Distributed Services',
    badge: 'ASYNC I/O · API',
    aspect: 'portrait',
    accentColor: '#34A853',
    secondaryAccent: '#22C55E',
    description:
      'Architecting asynchronous RESTful and WebSocket servers, event-driven pipelines, secure authentication protocols, and middleware pipelines.',
    frameworks: ['Node.js', 'Express.js', 'JWT / OAuth', 'REST APIs', 'Socket.io'],
    metrics: {
      latency: '8ms P99 Latency',
      score: '15k Req/Sec',
      architecture: 'Event-Loop Non-blocking'
    },
    codeSnippet: `// Asynchronous Stream Pipeline
app.use('/api/v2/stream', async (req, res) => {
  const auth = await verifyToken(req.headers.auth);
  eventBus.pipe(res.writeHead(200, SSE_HEADERS));
});`
  },
  {
    id: 'postgres-prisma',
    sequence: '03 / 06',
    title: 'PostgreSQL & Database Systems',
    category: 'Data Persistence',
    creator: 'Database Infrastructure',
    badge: 'ACID · PRISMA',
    aspect: 'landscape',
    accentColor: '#3B82F6',
    secondaryAccent: '#6366F1',
    description:
      'Designing ACID relational schemas, indexing strategies, optimized query plans, and resilient caching tiers with Redis and MongoDB document stores.',
    frameworks: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'Redis Caching', 'SQL Tuning'],
    metrics: {
      latency: '2.4ms Query Plan',
      score: '99.999% Reliability',
      architecture: 'Distributed Read Replicas'
    },
    codeSnippet: `// High-Performance Indexed Query
const records = await prisma.userProfile.findMany({
  where: { activeStatus: true },
  include: { metrics: true },
  take: 50
});`
  },
  {
    id: 'ts-python',
    sequence: '04 / 06',
    title: 'TypeScript & Python Core',
    category: 'Core Languages',
    creator: 'Type Safety & Automation',
    badge: 'STRICT TS · PY3',
    aspect: 'portrait',
    accentColor: '#FFCE35',
    secondaryAccent: '#EAB308',
    description:
      'Enforcing strict static type invariants across end-to-end contracts while leveraging Python for high-performance scripting, data processing, and automation.',
    frameworks: ['TypeScript Strict', 'Python 3', 'AsyncIO', 'Zod Validation', 'Data Scripts'],
    metrics: {
      latency: '0 Runtime Type Bugs',
      score: '100% Type Coverage',
      architecture: 'Shared Contract Schemas'
    },
    codeSnippet: `// Bulletproof Invariant Validation
type Result<T> = Success<T> | Failure<Error>;
export const parseSchema = <T>(spec: z.ZodType<T>) =>
  (raw: unknown): Result<T> => spec.safeParse(raw);`
  },
  {
    id: 'docker-devops',
    sequence: '05 / 06',
    title: 'Docker & Cloud DevOps',
    category: 'DevOps & Deployment',
    creator: 'Infrastructure & Cloud',
    badge: 'CONTAINER · CI/CD',
    aspect: 'landscape',
    accentColor: '#FF7E36',
    secondaryAccent: '#F97316',
    description:
      'Packaging containerized reproducible microservices, configuring GitHub Actions CI/CD workflows, and managing global edge deployment across cloud providers.',
    frameworks: ['Docker', 'AWS / Vercel', 'GitHub Actions', 'CI/CD Pipelines', 'Linux Shell'],
    metrics: {
      latency: '45s Deploy Time',
      score: 'Zero-Downtime Rollouts',
      architecture: 'Multi-Stage Containerized'
    },
    codeSnippet: `# Multi-stage Distroless Build
FROM node:20-alpine AS builder
RUN pnpm build
FROM gcr.io/distroless/nodejs20-debian12
COPY --from=builder /app/dist ./`
  },
  {
    id: 'genai-agents',
    sequence: '06 / 06',
    title: 'GenAI & Autonomous Agents',
    category: 'Applied Intelligence',
    creator: 'Intelligent Systems',
    badge: 'GEMINI · MCP',
    aspect: 'portrait',
    accentColor: '#E04E7A',
    secondaryAccent: '#FF4D6D',
    description:
      'Deploying multi-agent reasoning loops, Gemini API integrations, Model Context Protocol (MCP) tool-calling sidecars, and contextual retrieval pipelines.',
    frameworks: ['Gemini 2.5', 'Model Context Protocol', 'Function Calling', 'Vector Embeddings', 'Prompt Ops'],
    metrics: {
      latency: '320ms TTFT',
      score: 'Autonomous Tool Use',
      architecture: 'Multi-Agent Swarm Logic'
    },
    codeSnippet: `// Agent Context Loop & MCP Tool Calling
const agent = new Assistant({ model: 'gemini-2.5-pro' });
const decision = await agent.dispatchTools({
  instruction: 'Synthesize fullstack telemetry',
  mcpContext
});`
  }
];

export default skillsData;
