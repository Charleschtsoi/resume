/**
 * Older Medium posts outside Medium's RSS window (latest ~10 only).
 * Merged with live RSS in /api/medium so the blog page can show the full set.
 * Add new older stories here if they fall off the RSS feed.
 */
export type MediumArchivePost = {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories: string[];
};

export const mediumArchivePosts: MediumArchivePost[] = [
  {
    id: "18e9eef9d68d",
    title:
      'The "If-Then" Fallacy: Why You Can\'t Build a Custom LLM with 10 GPUs',
    link: "https://medium.com/@charleschtsoi/the-if-then-fallacy-why-you-cant-build-a-custom-llm-with-10-gpus-18e9eef9d68d",
    pubDate: "2026-03-25T07:07:07.000Z",
    description:
      "Why custom LLMs are a probabilistic systems problem — not an if-then script you can force with a small GPU cluster.",
    categories: ["LLM", "GenAI", "AI"],
  },
  {
    id: "9c5828587e88",
    title:
      "Stop Building Chatbots. Start Building Logic Gates: A Blueprint for Enterprise AI Agents",
    link: "https://medium.com/@charleschtsoi/stop-building-chatbots-start-building-logic-gates-a-blueprint-for-enterprise-ai-agents-9c5828587e88",
    pubDate: "2026-03-03T06:53:02.000Z",
    description:
      "A sandwich-model architecture for enterprise AI agents — moving past chat UIs toward reliable logic gates.",
    categories: ["AI Agents", "Enterprise", "Architecture"],
  },
  {
    id: "02610a3e9d18",
    title: "Your AI Has a Memory Problem — And RAG Alone Won't Fix It",
    link: "https://medium.com/@charleschtsoi/your-ai-has-a-memory-problem-and-rag-alone-wont-fix-it-02610a3e9d18",
    pubDate: "2026-01-09T06:53:12.000Z",
    description:
      "A practical framework for what agents “know” — and why retrieval alone doesn’t solve memory.",
    categories: ["RAG", "AI Agents", "Memory"],
  },
  {
    id: "2c3ff85a5494",
    title:
      "Transformer: How One Paper Redefined the Future of Artificial Intelligence",
    link: "https://medium.com/@charleschtsoi/transformer-how-one-paper-redefined-the-future-of-artificial-intelligence-2c3ff85a5494",
    pubDate: "2026-01-06T01:57:30.000Z",
    description:
      "From RNN limits to attention — how one paper reshaped modern AI architecture.",
    categories: ["Transformers", "Deep Learning", "GenAI"],
  },
  {
    id: "1693c76298c5",
    title:
      "GenAI Broke REST. Here's What Comes Next — An introduction to Event-Driven Architecture for AI workloads",
    link: "https://medium.com/@charleschtsoi/genai-broke-rest-1693c76298c5",
    pubDate: "2025-12-31T06:47:05.000Z",
    description:
      "Why event-driven architecture is the real answer for AI workloads when request-response breaks down.",
    categories: ["GenAI", "Architecture", "Event-Driven"],
  },
  {
    id: "7adb450a5f14",
    title: "Transformer：一篇論文如何重新定義人工智慧的未來(GenAI之 4)",
    link: "https://medium.com/@charleschtsoi/transformer-%E4%B8%80%E7%AF%87%E8%AB%96%E6%96%87%E5%A6%82%E4%BD%95%E9%87%8D%E6%96%B0%E5%AE%9A%E7%BE%A9%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E7%9A%84%E6%9C%AA%E4%BE%86-7adb450a5f14",
    pubDate: "2025-12-23T00:00:00.000Z",
    description:
      "Deep dive into the architecture that changed everything — from the 2017 Attention Is All You Need paper.",
    categories: ["Transformers", "GenAI", "AI"],
  },
];
