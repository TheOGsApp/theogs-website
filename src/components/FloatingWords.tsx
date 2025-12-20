'use client';

import { useEffect, useState } from 'react';

type FloatingWord = {
  word: string;
  left: number;
  top: number;
  delay: number;
  duration: number;
};

const devWords = [
  'async/await',
  'Microservices',
  'Kubernetes',
  'React Hooks',
  'GraphQL',
  'Docker',
  'CI/CD',
  'Typescript',
  'Redis',
  'Postgres',
  'Mongodb',
  'REST APIs',
  'Websockets',
  'Serverless',
  'Terraform',
  'Jenkins',
];

export function FloatingWords() {
  const [words, setWords] = useState<FloatingWord[]>([]);

  useEffect(() => {
    setWords(
      devWords.map((word, i) => ({
        word,
        left: Math.random() * 80 + 10,
        top: Math.random() * 80 + 10,
        delay: i * 0.2,
        duration: 3 + Math.random() * 2,
      })),
    );
  }, []);

  return (
    <>
      {words.map(({ word, left, top, delay, duration }) => (
        <div
          key={word}
          className="absolute text-slate-500 text-sm font-mono opacity-15 animate-pulse"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          {word}
        </div>
      ))}
    </>
  );
}
