export interface Citation {
  id: number;
  text: string;
  link: string;
}

export const customerServiceCitations: Citation[] = [
  {
    id: 1,
    text: "Klarna achieved remarkable results with their AI implementation, reducing support ticket resolution time from 11 minutes to 2 minutes and generating $40 million in annual profit improvements",
    link: "https://www.singlegrain.com/blog/ms/klarna-ai/"
  },
  {
    id: 2,
    text: "Businesses typically save around 30% on their customer support costs by implementing chatbots",
    link: "https://adamconnell.me/chatbot-statistics/"
  },
  {
    id: 3,
    text: "Companies can reduce their cost per support ticket from $40 to $8, representing an 80% reduction, while AI systems can autonomously handle 93% of customer support questions",
    link: "https://ai-for.business/ai-case-study-saving-80-on-customer-support-costs-with-generative-ai/"
  }
];