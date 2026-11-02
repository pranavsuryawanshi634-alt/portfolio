import React, { useState } from 'react';
import { ArrowRight, Code, Sparkles, CheckCircle2, MessageSquare, Terminal, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onDiscussProject }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-[400px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Grid background texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131E36] border border-blue-500/30 shadow-sm shadow-blue-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide">
                Available for New Projects & Freelance
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Turning Your Ideas Into{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Powerful Digital Experiences
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
              I build modern, responsive websites and web applications that help businesses, startups, and individuals establish their online presence.
            </p>

            {/* Quick value badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 pb-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Responsive & Mobile-First</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Clean & Maintainable Code</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Modern React & Node.js</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onDiscussProject) onDiscussProject();
                  const target = document.querySelector('#contact');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#portfolio');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700/80 bg-[#131E36]/50 hover:bg-[#131E36] hover:border-slate-600 text-slate-200 hover:text-white font-medium text-base transition-all duration-200"
              >
                <span>Explore My Work</span>
              </a>
            </div>

            {/* Contact quick actions strip */}
            <div className="pt-4 flex items-center gap-3 text-xs text-slate-400">
              <span className="font-medium text-slate-300">Direct contact:</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                title="Click to copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{personalInfo.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Developer-Themed Interactive Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative behind glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-indigo-600/30 blur-xl opacity-75"></div>

              {/* Terminal Card */}
              <div className="relative rounded-2xl border border-slate-700/80 bg-[#0D1527] shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#090F1C] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">pranav-developer.jsx</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-blue-400/80 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900/60">
                    <Terminal className="w-3 h-3" />
                    <span>v2.0</span>
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed overflow-x-auto">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">'{personalInfo.fullName}'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-amber-300">'B.Tech Computer Engineering'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">location:</span>{' '}
                    <span className="text-emerald-300">'Nashik, Maharashtra'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">techStack:</span> [
                    <div className="pl-4 grid grid-cols-2 gap-x-2 text-cyan-300">
                      <span>'React.js',</span>
                      <span>'JavaScript (ES6+)',</span>
                      <span>'Node.js & Express',</span>
                      <span>'Java & Spring Boot',</span>
                      <span>'PostgreSQL',</span>
                      <span>'Tailwind CSS',</span>
                    </div>
                    <span className="text-slate-300">],</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span>{' '}
                    <span className="text-emerald-300">'Building High-Converting Web Products'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-emerald-400 font-semibold">'Ready to collaborate 🚀'</span>
                  </div>
                  <div>&#125;;</div>

                  <div className="pt-2 text-slate-500 border-t border-slate-800 text-[11px]">
                    // Available for direct consultation & website development
                  </div>
                </div>

                {/* Floating Micro-Card / Stats Pill */}
                <div className="bg-[#111C35] px-4 py-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                      <Code className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-slate-300 font-medium">Responsive & Clean React Code</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    Active
                  </span>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#0E172B]/95 border border-slate-700/80 p-3.5 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Need a Website?</div>
                  <div className="text-[11px] text-slate-400">Delivering quality digital solutions</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
