import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Why Me', path: '/why-work-with-me' },
    { label: 'Process', path: '/process' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1120]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-[#070B14]/80 backdrop-blur-sm border-b border-slate-900/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
            aria-label="Pranav Web Studio Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-[1.5px] shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0B1120] rounded-[10px] flex items-center justify-center">
                <span className="text-sm font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  PS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight group-hover:text-blue-400 transition-colors">
                Pranav Suryawanshi
              </span>
              <span className="text-xs text-blue-400/90 font-medium hidden sm:block">
                Web Studio & Development
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#131E36]/60 border border-slate-800/80 px-3 py-1 rounded-full shadow-inner">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-blue-600 shadow-sm shadow-blue-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${personalInfo.whatsappNumber}?text=Hi%20Pranav%2C%20I%20would%20like%20to%20discuss%20a%20website%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 bg-[#131E36]/60 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-[#131E36] transition-all duration-200"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-sm focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:opacity-90"></span>
              <span className="relative flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white font-medium text-sm transition-all duration-200 group-hover:bg-blue-500 shadow-md shadow-blue-600/30">
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contact"
              className="text-xs px-3 py-1.5 rounded-lg bg-blue-600 text-white font-medium sm:hidden"
            >
              Hire Me
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-slate-800 bg-[#131E36] text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0B1120]/98 backdrop-blur-xl border-b border-slate-800 shadow-2xl px-6 py-6 transition-all duration-300 max-h-[calc(100vh-65px)] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-500">→</span>
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all"
              >
                Discuss a Project (Hire Me)
              </Link>

              <a
                href={`https://wa.me/${personalInfo.whatsappNumber}?text=Hi%20Pranav%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 font-medium text-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat Directly on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
