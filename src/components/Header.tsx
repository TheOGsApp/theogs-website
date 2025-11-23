'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DynamicIcon } from 'lucide-react/dynamic';

import { appLinks } from '@/constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/90 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl font-playfair font-bold tracking-tight">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="TheOGs"
              width={56}
              height={56}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-700 "
            />
          </Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wide font-semibold items-center">
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="#socials"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Follow Us
          </Link>

          {/* App Links */}
          <div className="flex space-x-4 ml-4">
            {appLinks
              .filter((link) => link.published)
              .map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-90 transition-opacity hover:scale-110"
                >
                  <Image
                    src={link.imgSrc}
                    alt={link.alt}
                    width={120}
                    height={40}
                  />
                </a>
              ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <DynamicIcon name={isMenuOpen ? 'x' : 'menu'} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden bg-black/90 border-t border-gray-800 px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[400px] py-4' : 'max-h-0'
        }`}
      >
        <Link
          href="/"
          className="block py-2 text-white hover:text-gray-300 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block py-2 text-white hover:text-gray-300 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block py-2 text-white hover:text-gray-300 transition-colors duration-200"
        >
          Contact
        </Link>

        {/* App Links */}
        <div className="flex flex-col space-y-2 mt-4">
          {appLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src={link.imgSrc} alt={link.alt} width={150} height={50} />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
