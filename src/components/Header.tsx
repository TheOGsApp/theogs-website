'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DynamicIcon } from 'lucide-react/dynamic';

import { appLinks } from '@/constants';
import { LoginModal } from './LoginModal';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Follow Us', href: '#socials' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
      <LoginModal />

      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Brand */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="TheOGs"
            width={60}
            height={60}
            className="rounded-full border border-white/20"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[clamp(14px,0.5vw,24px)] font-semibold uppercase tracking-wide">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-white/80 hover:text-white transition-colors
                         after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                         after:w-0 after:bg-white after:transition-all
                         hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="ml-4 rounded-full bg-white text-black px-5 py-2 text-xs font-bold
                       hover:bg-gray-200 transition"
          >
            Talk to Us
          </Link>

          {/* App Links */}
          <div className="flex items-center gap-3 ml-4">
            {appLinks
              .filter((link) => link.published)
              .map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform"
                >
                  <Image
                    src={link.imgSrc}
                    alt={link.alt}
                    width={110}
                    height={36}
                  />
                </Link>
              ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-white"
          aria-label="Open menu"
        >
          <DynamicIcon name="menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
            <span className="font-playfair text-lg">Menu</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <DynamicIcon name="x" className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-8 space-y-6 text-lg font-semibold">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-white transition"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 inline-flex justify-center rounded-full
                         bg-white text-black py-3 font-bold"
            >
              Talk to Us
            </Link>

            {/* App Links */}
            <div className="pt-6 space-y-3">
              {appLinks
                .filter((link) => link.published)
                .map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={link.imgSrc}
                      alt={link.alt}
                      width={160}
                      height={50}
                    />
                  </Link>
                ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
