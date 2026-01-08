'use client';

import { useState } from 'react';
import { Button, Drawer, Input, List, Typography } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { appConfig } from '@/config';

const { Text } = Typography;

type Role = 'bot' | 'user';

const QA: { keywords: string[]; answer: string }[] = [
  // Greetings / Help
  {
    keywords: ['hi', 'hello', 'hey', 'help', 'need help', 'support'],
    answer:
      'Hi 👋 I can help developers and companies. Ask about how it works, pricing, requirements, or support.',
  },

  // General
  {
    keywords: ['what is theogs', 'about'],
    answer:
      'TheOGs is a swipe-based hiring platform connecting experienced developers with companies, with transparent salaries.',
  },

  // Developers
  {
    keywords: ['free', 'developer cost'],
    answer: 'TheOGs is completely free for developers.',
  },
  {
    keywords: ['experience', 'requirements'],
    answer: 'Developers need at least 2 years of professional experience.',
  },
  {
    keywords: ['salary', 'pay'],
    answer: 'All roles include transparent salary information.',
  },

  // Companies
  {
    keywords: ['pricing', 'company pricing', 'employer pricing', 'cost'],
    answer:
      'Companies pay a 5% success fee only after a successful hire. No upfront fees.',
  },
  {
    keywords: ['refund', 'guarantee'],
    answer: `If a hire leaves within ${appConfig.refundPeriodDays} days, a refund applies according to the pricing terms.`,
  },

  // Platform
  {
    keywords: ['how it works', 'process'],
    answer:
      'Create a profile, get verified, swipe to match, then chat after mutual interest.',
  },

  // Legal & Support
  {
    keywords: ['terms'],
    answer: 'Full Terms & Conditions are available on the TheOGs website.',
  },
  {
    keywords: ['contact', 'email'],
    answer: 'Contact support at support@theogs.app.',
  },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: Role; text: string }[]>([
    { role: 'bot', text: 'Hi! How can I help you today?' },
  ]);

  function getAnswer(text: string) {
    const lower = text.toLowerCase();
    const match = QA.find((q) => q.keywords.some((k) => lower.includes(k)));
    return (
      match?.answer ||
      'I can help with how TheOGs works, pricing, requirements, or support. Try asking one of those.'
    );
  }

  function send() {
    if (!input.trim()) return;
    const reply = getAnswer(input);
    setMessages((m) => [
      ...m,
      { role: 'user', text: input },
      { role: 'bot', text: reply },
    ]);
    setInput('');
  }

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        icon={<MessageOutlined />}
        onClick={() => setOpen(true)}
        size="large"
        style={{
          position: 'fixed',
          bottom: 24,
          height: 60,
          width: 60,
          right: 24,
          zIndex: 1000,
          fontSize: 24,
        }}
      />

      <Drawer
        title="TheOGs Assistant"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        size={360}
      >
        <List
          dataSource={messages}
          renderItem={(item) => (
            <List.Item
              style={{
                justifyContent:
                  item.role === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <div
                style={{
                  maxWidth: '80%',
                  padding: '8px 12px',
                  borderRadius: 8,
                  background: item.role === 'user' ? '#1677ff' : '#f5f5f5',
                  color: item.role === 'user' ? '#fff' : '#000',
                }}
              >
                <Text>{item.text}</Text>
              </div>
            </List.Item>
          )}
        />

        <Input.Search
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSearch={send}
          placeholder="Ask a question…"
          enterButton="Send"
        />
      </Drawer>
    </>
  );
}
