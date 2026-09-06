export type FocusArea = {
  name: string;
  /** One line, as set on the page. */
  summary: string;
  /** Long form, used for the crawlable fallback and metadata. */
  description: string;
};

export type DispatchEssay = {
  title: string;
  descriptor: string;
  href: string;
  image: string;
};

const social = [
  { label: "X / Twitter", href: "https://x.com/briandevans" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/briandevansla/" },
] as const;

const dispatch = [
  {
    title: "Chips Across the Felt",
    descriptor: "The AI Credit Reset Wars of 2026",
    href: "https://briandevans.substack.com/p/chips-across-the-felt",
    image: "/images/dispatch-chips-across-the-felt.jpg",
  },
  {
    title: "AI Agents Need Crypto Rails",
    descriptor:
      "The infrastructure gap between AI and crypto is bigger than anyone wants to admit.",
    href: "https://briandevans.substack.com/p/ai-agents-need-crypto-rails",
    image: "/images/dispatch-ai-agents-need-crypto-rails.jpg",
  },
  {
    title: "The Generalist Era Is Here",
    descriptor:
      "Look, I’m going to tell you something that goes against basically everything you’ve heard about career advice.",
    href: "https://briandevans.substack.com/p/the-generalist-era-is-here",
    image: "/images/dispatch-the-generalist-era-is-here.jpg",
  },
] as const satisfies readonly DispatchEssay[];

export const SITE = {
  siteUrl: "https://bde.io/",
  social,
  navigation: [
    { label: "Active Thesis", href: "#thesis" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Founder", href: "#founder" },
    { label: "Connect", href: "#connect" },
  ],
  focusAreas: [
    {
      name: "Blockchain",
      summary:
        "Navigating decentralized protocols and token economies for enduring value.",
      description:
        "We back founders building the decentralized infrastructure and token-based economies that will define the next iteration of the internet. We look for technical edge and the ability to drive real adoption.",
    },
    {
      name: "AI",
      summary:
        "Strategic application of large language models and generative intelligence.",
      description:
        "We invest aggressively in the AI space, backing founders who leverage artificial intelligence to create new technological paradigms. Beyond capital, we deploy our extensive network and fundraising strategies to ensure these foundational models scale without friction.",
    },
    {
      name: "Infrastructure",
      summary: "Building the foundational rails for next-generation systems.",
      description:
        "We partner with teams building the core technological layers and engineering innovations required to solve generational challenges and support global-scale applications.",
    },
    {
      name: "Consumer Platforms & Brands",
      summary: "Merging community, culture, and commerce for market dominance.",
      description:
        "We help founders turn attention into durable advantage. We back consumer platforms, brands, and the advertising technologies that scale them, bringing our global distribution expertise to the cap table.",
    },
  ] satisfies FocusArea[],
  operatingModel: [
    {
      name: "Operator DNA",
      summary: "Battle-tested insights from building and scaling ventures.",
      description:
        "We are built through work, not optics. We spend time where important companies are actually shaped: product reviews, launch plans, distribution strategy, and moments where the next decision matters more than the next deck.",
    },
    {
      name: "Active Strategy",
      summary: "High-touch advisory for critical inflection points.",
      description:
        "We are most useful when conviction needs sharpening and leverage needs creating. We deploy our deep network and bespoke fundraising strategies to ensure founders have the capital and connections to dominate. Founders call when a launch has to matter, a round has to clear, a hire has to close, or a narrative has to cut through noise.",
    },
    {
      name: "Enduring Value",
      summary: "Long-term partnership for sustainable growth.",
      description:
        "We combine company building, institutional investing, and global-scale distribution into one cap-table partner, helping founders build what consensus misses.",
    },
  ],
  dispatch,
  hero: {
    eyebrow: "BDE Ventures",
    title: "Advisory for the architects of tomorrow.",
    lede: "We provide cross-disciplinary, operator-led advisory for founders building at the intersection of AI, blockchain, and consumer brands.",
    description:
      "We provide cross-disciplinary, operator-led advisory for founders building at the intersection of AI, blockchain, and consumer brands. We help you identify hard-to-replicate moats, leveraging deep, edge-case knowledge and human taste to turn complex technological advantages into defensible market dominance.",
  },
  philosophy: {
    title: "Judgment at the inflection point.",
    description:
      "BDE Ventures is focused exclusively on early-stage partnerships. We bring operating experience, technical fluency, and a firsthand understanding of how culture and narrative move markets. Viewing the world through a marketing lens is our bread and butter. Our partnership is unusual by design: we back founders with non-consensus insight and help them turn attention into durable advantage.",
  },
  founder: {
    name: "Brian D. Evans",
    role: "Founder & Managing Partner · BDE Ventures",
    credentials: ["Inc. 500", "40 Under 40"],
    bio: [
      "Brian D. Evans is a serial entrepreneur, investor, and advisor who identifies the inflection points of major technological shifts and helps founders build the narratives that drive early, massive adoption — mastering the edge cases, then applying a refined human taste that algorithms cannot replicate.",
      "As an unconventional generalist, he connects dots others miss, viewing emerging markets through the distinct lens of an operator who has built, scaled, and exited companies to construct hard-to-replicate moats. Rather than relying on traditional, siloed playbooks, Brian leverages his broad expertise to fix broken growth engines and open strategic bottlenecks.",
    ],
    portrait: "/images/brian-d-evans-portrait.png",
  },
  publications: ["Forbes", "Inc.", "Entrepreneur", "Rolling Stone"],
} as const;
