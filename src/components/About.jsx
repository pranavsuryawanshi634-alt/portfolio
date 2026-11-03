import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Briefcase, 
  Code2, 
  ExternalLink,
  CheckCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { personalInfo, skillsData } from '../data/portfolioData';
import DynamicIcon from './DynamicIcon';

export default function About({ isFullPage = false }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Database & ORM' },
    { id: 'coreAndTools', label: 'Core & Tooling' },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...skillsData.frontend.map(s => ({ ...s, group: 'Frontend' })),
        ...skillsData.backend.map(s => ({ ...s, group: 'Backend' })),
        ...skillsData.database.map(s => ({ ...s, group: 'Database' })),
        ...skillsData.coreAndTools.map(s => ({ ...s, group: 'Core & Tools' })),
      ];
    }
    return (skillsData[activeCategory] || []).map(s => ({ 
      ...s, 
      group: categories.find(c => c.id === activeCategory)?.label || '' 
    }));
  };

  return (
    <section className={`bg-[#080D1A] relative border-t border-slate-800/80 ${isFullPage ? 'pt-32 pb-24 md:pt-40 md:pb-28' : 'py-20'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/40 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>About Me</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Building Useful Digital Solutions with Clean Code
          </h1>
          <p className="text-base sm:text-lg text-slate-300">
            Learn more about my background, technical expertise, and what drives my approach to web development.
          </p>
        </div>

        {/* Top Grid: Bio, Education & Core Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Bio card */}
          <div className="lg:col-span-7 bg-[#0E1628] border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <span>Who I Am</span>
              <span className="text-xs font-mono font-normal text-blue-400 bg-blue-950/70 px-2.5 py-0.5 rounded-full border border-blue-800/40">
                Web Developer
              </span>
            </h2>

            <p className="text-slate-300 leading-relaxed text-base">
              {personalInfo.bio}
            </p>

            {/* Quick Facts Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-slate-200">{personalInfo.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-600/10 text-emerald-400 shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Current Focus</div>
                  <div className="text-sm font-semibold text-slate-200">Full-Stack Web Development</div>
                </div>
              </div>
            </div>

            {/* Genuine Campus Involvement / Activities */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Leadership & Verified Hackathons
              </div>
              <div className="space-y-2">
                {personalInfo.roles.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-300 bg-[#121C34] px-3.5 py-2 rounded-xl border border-slate-800">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Genuine Education Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0E1628] border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/15 border border-blue-500/20 text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Academic Background</h3>
                  <p className="text-xs text-slate-400">Engineering Foundation</p>
                </div>
              </div>

              <div className="bg-[#121C34] border border-slate-800 p-4 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs text-blue-400 font-mono">
                  <span>{personalInfo.education.duration}</span>
                  <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                    {personalInfo.education.currentStatus}
                  </span>
                </div>
                <h4 className="font-semibold text-white text-base">
                  {personalInfo.education.degree}
                </h4>
                <p className="text-sm text-slate-300">
                  {personalInfo.education.institution}
                </p>
                <div className="text-xs text-slate-400 pt-1 border-t border-slate-800">
                  Academic Performance: <span className="text-slate-200 font-medium">{personalInfo.education.academicHighlights}</span>
                </div>
              </div>

              {/* What I Value */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Development Philosophy
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  I believe a great website combines clean, maintainable architecture under the hood with a clean, responsive interface that visitors understand immediately.
                </p>
              </div>

              {/* Action */}
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/30 text-blue-400 font-medium text-sm transition-all"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Technical Skills Showcase */}
        <div className="bg-[#0D1527] border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                <span>Technical Skills & Tools</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Technologies and tools I use to design, develop, and deploy solutions.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {getFilteredSkills().map((skill, index) => (
              <div
                key={index}
                className="group relative bg-[#121B32] hover:bg-[#16223F] border border-slate-800 hover:border-blue-500/40 p-3.5 rounded-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <DynamicIcon name={skill.icon} className="w-4 h-4" />
                  </div>
                  {skill.group && (
                    <span className="text-[10px] text-slate-500 font-mono">
                      {skill.group.split(' ')[0]}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick note */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-800/60">
            <span>Verified practical experience across projects and open-source contributions.</span>
            <Link to="/portfolio" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium">
              <span>View In Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
