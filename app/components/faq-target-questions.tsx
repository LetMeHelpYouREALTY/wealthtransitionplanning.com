import { FAQSchema } from './faq-schema'

/**
 * Target FAQ Questions for SEO
 * Based on keyword research and common search queries
 */
export const targetFAQQuestions = {
  financialPlanner: [
    {
      question: 'Should I work with a financial planner before selling my home?',
      answer: 'Yes, working with a CERTIFIED Financial Planner before selling your home is highly recommended. A financial planner can help you understand the tax implications, timing considerations, and how the sale impacts your overall financial plan, retirement income, and estate planning goals. This coordination ensures optimal financial outcomes.',
    },
    {
      question: 'What\'s the difference between a financial advisor and real estate agent?',
      answer: 'A financial advisor (especially a CERTIFIED Financial Planner or fiduciary advisor) focuses on your comprehensive financial picture, including how real estate decisions impact your financial plans, tax strategies, and wealth transition goals. A real estate agent specializes in property transactions, market analysis, and property sales. Working with both ensures that real estate decisions align with your financial objectives.',
    },
    {
      question: 'How do fiduciary advisors approach real estate decisions?',
      answer: 'Fiduciary financial advisors in Las Vegas approach real estate decisions by prioritizing your best interests, analyzing how property choices impact your financial plans, tax situations, and wealth transition objectives. They ensure real estate recommendations align with your comprehensive financial goals and support long-term financial success, rather than focusing solely on property transactions.',
    },
    {
      question: 'What should I look for in a financial planner Las Vegas?',
      answer: 'When looking for a financial planner in Las Vegas, seek a CERTIFIED Financial Planner (CFP®) who is a fiduciary, has expertise in real estate planning, understands the Las Vegas market, and can coordinate real estate decisions with your financial plans. Look for advisors who specialize in downsizer transitions, 55+ community planning, and wealth transition strategies.',
    },
    {
      question: 'Do financial advisors in Las Vegas help with real estate planning?',
      answer: 'Yes, many financial advisors in Las Vegas, especially those specializing in wealth transition planning, help with real estate planning. They coordinate property decisions with financial plans, analyze tax implications, assess market timing, and ensure real estate choices support retirement planning, estate planning, and wealth transfer goals.',
    },
  ],
  emptyNester: [
    {
      question: 'How can a financial planner help with downsizer real estate transitions?',
      answer: 'A CERTIFIED Financial Planner can help with downsizer real estate transitions by analyzing the financial implications of downsizing, coordinating property sales with tax strategies, assessing timing for optimal financial outcomes, and ensuring that downsizing decisions support retirement planning and estate planning goals.',
    },
    {
      question: 'What are the tax implications of selling my home as a downsizer?',
      answer: 'Tax implications of selling your home as a downsizer depend on factors including capital gains exclusions, length of ownership, and how proceeds are used. A fiduciary financial advisor in Las Vegas can help you understand these implications and structure the transaction to minimize taxes while supporting your financial planning goals.',
    },
  ],
  communities: [
    {
      question: 'Should I consult a financial planner before moving to a 55+ community?',
      answer: 'Yes, consulting a CERTIFIED Financial Planner before moving to a 55+ community is essential. They can analyze how community choices impact retirement income, estate planning, tax strategies, and long-term financial security, ensuring that your 55+ community decision supports your comprehensive financial objectives.',
    },
    {
      question: 'How do 55+ communities in Las Vegas impact financial planning?',
      answer: '55+ communities in Las Vegas impact financial planning through monthly fees, purchase prices, potential resale values, and how they affect retirement income planning. A fiduciary financial advisor can help you assess these impacts and ensure community choices align with your financial plans and retirement goals.',
    },
  ],
}

/**
 * FAQ Component with Target Questions
 * Use this on pages where specific FAQ topics are relevant
 */
interface TargetFAQProps {
  category: 'financialPlanner' | 'emptyNester' | 'communities' | 'all'
}

export function TargetFAQ({ category }: TargetFAQProps) {
  let questions: Array<{ question: string; answer: string }> = []
  
  if (category === 'all') {
    questions = [
      ...targetFAQQuestions.financialPlanner,
      ...targetFAQQuestions.emptyNester,
      ...targetFAQQuestions.communities,
    ]
  } else {
    questions = targetFAQQuestions[category]
  }

  return <FAQSchema faqs={questions} />
}

