'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';
import { PersonalInfo } from '@/types';

const navItems = [
  { id: 'about', label: 'HOME' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'news', label: 'NEWS' },
  { id: 'research', label: 'RESEARCH' },
  { id: 'education', label: 'RESUME' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar({ cvUrl, info }: { cvUrl: string; info: PersonalInfo }) {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const isGalleryPage = router?.pathname === '/gallery';

  useEffect(() => {
    if (isGalleryPage) return; // Don't track scroll on gallery page
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isGalleryPage]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  // Show name when scrolled OR when mobile menu is open
  const shouldShowName = isScrolled || isMobileMenuOpen;
  // Show background when scrolled OR when mobile menu is open
  const shouldShowBackground = isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowBackground ? 'bg-[var(--bg-nav)] shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Side - Name (appears when scrolled or mobile menu is open) */}
          <div className="flex items-center">
            <div
              className={`overflow-hidden transition-all duration-300 ${
                shouldShowName
                  ? 'max-w-[300px] opacity-100'
                  : 'max-w-0 opacity-0'
              }`}
            >
              <h1 className="text-base font-semibold text-[var(--text-primary)] whitespace-nowrap">
                {info.name}
              </h1>
            </div>
          </div>

          {/* Center - Desktop Navigation Items */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (isGalleryPage) {
                    router.push('/#' + item.id);
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id && !isGalleryPage
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side - Gallery Link → Theme Toggle → Download CV → Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/gallery"
              className={`text-sm font-medium transition-colors duration-200 ${
                isGalleryPage
                  ? 'text-[var(--accent)] font-semibold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              GALLERY
            </Link>
            <div className="w-px h-6 bg-[var(--border)]"></div>
            <ThemeToggle />
            <a
              href={cvUrl}
              download
              className="hidden sm:block px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 text-sm font-medium uppercase"
            >
              Download CV
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-[var(--text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[var(--border)] pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (isGalleryPage) {
                      router.push('/#' + item.id);
                    } else {
                      scrollToSection(item.id);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id && !isGalleryPage
                      ? 'bg-[var(--accent)] text-white'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/gallery"
                className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isGalleryPage
                    ? 'bg-[var(--accent)] text-white font-semibold'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GALLERY
              </Link>
              <a
                href={cvUrl}
                download
                className="mt-2 px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 text-sm font-medium uppercase text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

