'use client';

import { Collapse, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState, useMemo } from 'react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    category: 'Payment',
    question: 'When do I pay the 5% commission?',
    answer:
      'You pay when the candidate officially joins and starts working. We charge 5% of their annual salary as a flat fee.',
  },
  {
    id: '2',
    category: 'Payment',
    question: 'What counts as "annual salary" for the 5% calculation?',
    answer:
      'Only the base salary is included. Bonuses, equity, stock options, and benefits are not counted in the 5% calculation.',
  },
  {
    id: '3',
    category: 'Payment',
    question: 'Do I get a refund if the hired person leaves early?',
    answer:
      'Yes. If the candidate leaves within 30 days of accepting, we refund 100% of your payment. After 30 days, no refund is available.',
  },
  {
    id: '4',
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer:
      'We accept credit cards, bank transfers and digital wallets. Payment is processed instantly when an offer is accepted.',
  },
  {
    id: '5',
    category: 'Job Posting',
    question: 'How long does my job posting stay active?',
    answer:
      'Job postings are active for 30 days. After that, they expire automatically. You can repost if you need to continue hiring.',
  },
  {
    id: '6',
    category: 'Job Posting',
    question: 'Can I edit a job posting after publishing?',
    answer:
      'Yes, you can edit certain details like job title, description, and requirements. However, you cannot edit the salary after publishing. If you need to change the salary, you must close it and create a new posting.',
  },
  {
    id: '7',
    category: 'Job Posting',
    question: 'How many job postings can I create?',
    answer:
      'There are no limits on the number of job postings you can create. Post as many as you need.',
  },
  {
    id: '8',
    category: 'Matching',
    question: 'How does the matching process work?',
    answer:
      "Our platform uses smart matching to connect you with qualified candidates based on job requirements. Swipe right to like candidates, left to pass. When both parties like each other, it's a match!",
  },
  {
    id: '9',
    category: 'Matching',
    question: 'Can I communicate with matched candidates?',
    answer:
      'Yes, once you match with a candidate, you can message them directly in the platform. You can interview, negotiate, and finalize details all in one place.',
  },
  {
    id: '10',
    category: 'Matching',
    question: 'What happens after I make an offer?',
    answer:
      'Once you make an offer, the candidate can accept or decline. When they officially join and start working, the 5% commission is charged to your account.',
  },
  {
    id: '11',
    category: 'Account',
    question: 'How do I delete my account?',
    answer:
      'Go to Account Settings > Deactivation. You can temporarily suspend or permanently delete your account. All data will be removed within 30 days.',
  },
  {
    id: '12',
    category: 'Account',
    question: 'Is my data secure?',
    answer:
      'Yes. We use bank-level encryption (AES-256) for all data. Your information is GDPR compliant and never shared with third parties.',
  },
];

const categories = Array.from(new Set(faqData.map((item) => item.category)));

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredFAQ = useMemo(() => {
    return faqData.filter((item) => {
      const matchesSearch =
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        !activeCategory || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const groupedFAQ = useMemo(() => {
    return categories.map((category) => ({
      category,
      items: filteredFAQ.filter((item) => item.category === category),
    }));
  }, [filteredFAQ]);

  const items = groupedFAQ
    .filter((group) => group.items.length > 0)
    .map((group) => ({
      key: group.category,
      label: (
        <span className="text-base font-semibold text-gray-200">
          {group.category}
        </span>
      ),
      children: (
        <div className="space-y-3">
          {group.items.map((item) => (
            <div key={item.id} className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2">
                {item.question}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      ),
    }));

  return (
    <div className="animate-fade-in-scale max-w-4xl mx-auto bg-black text-white p-10 border border-gray-800 shadow-xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
          <span className="text-gray-400">Frequently Asked Questions</span>
        </h1>
        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Find answers to common questions about payments, job posting, hiring,
          and more.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <Input
          placeholder="Search FAQs..."
          prefix={<SearchOutlined className="text-gray-500" />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="!bg-gray-900 !border-gray-700 !text-white !placeholder-gray-500 text-base py-2"
          style={{
            borderRadius: '8px',
          }}
        />
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === null
              ? 'bg-gray-700 text-white'
              : 'bg-gray-900 text-gray-300 border border-gray-700 hover:bg-gray-800'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-gray-700 text-white'
                : 'bg-gray-900 text-gray-300 border border-gray-700 hover:bg-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      {filteredFAQ.length > 0 ? (
        <Collapse
          items={items}
          accordion
          className="!bg-black !border-gray-800"
          style={{
            backgroundColor: 'black',
            borderColor: 'rgb(31, 41, 55)',
          }}
        />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            No FAQs found matching &quot;{searchTerm}&quot;. Try a different
            search term.
          </p>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-12 bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold text-gray-200 mb-3">
          Still have questions?
        </h3>
        <p className="text-gray-400 mb-6">
          Can&apos;t find the answer you&apos;re looking for? Our support team
          is here to help.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}
