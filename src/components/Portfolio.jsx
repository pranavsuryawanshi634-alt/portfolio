import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Filter, Info, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectMockup from './ProjectMockup';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export default function Portfolio({ onDiscussProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Web Development', 'Custom Web Application', 'Web Utility', 'Demonstrations'];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Demonstrations') return project.isDemonstration;
    return project.category === selectedCategory;
  });

  return (
    <section id="portfolio" className="py-24 bg-[#080D1A] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/40 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>Portfolio & Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Development Work
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A curated showcase of real-world websites, interactive utility tools, and hackathon prototypes built with modern web technologies.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105'
                  : 'bg-[#0E1628] text-slate-400 hover:text-white hover:bg-[#131E38] border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#0E1628] border border-slate-800 hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-900/15"
            >
              <div>
                {/* Visual Preview / Mockup */}
                <div 
                  className="relative cursor-pointer overflow-hidden group-hover:opacity-95 transition-opacity"
                  onClick={() => setActiveModalProject(project)}
                >
                  <ProjectMockup type={project.mockupType} title={project.title} />

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200 backdrop-blur-[2px]">
                    <span className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-md flex items-center gap-1.5">
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Category and Status Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-blue-400 bg-blue-950/80 px-2.5 py-0.5 rounded border border-blue-900/60">
                      {project.category}
                    </span>

                    {project.isDemonstration ? (
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40" title="Clearly labeled demonstration project">
                        Demonstration
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                        {project.badge || 'Verified'}
                      </span>
                    )}
                  </div>

                  {/* Title and Short Description */}
                  <div>
                    <h3 
                      onClick={() => setActiveModalProject(project)}
                      className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">
                      {project.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#131E38] text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 sm:px-6 py-4 bg-[#0A1020] border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Case Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                      title="View GitHub Repository"
                      aria-label="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.liveUrl && project.liveUrl !== '#contact' ? (
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith('#') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 transition-all"
                      title="Open Live Website / Preview"
                      aria-label="Open Live Website / Preview"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        if (onDiscussProject) onDiscussProject('Booking inquiry for custom project');
                        const target = document.querySelector('#contact');
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold transition-all"
                    >
                      Inquire
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Customization Guidance Callout */}
        <div className="mt-14 bg-[#0E1628] border border-slate-800 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/15 text-blue-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Need a custom website or application developed?</h4>
              <p className="text-xs text-slate-400">All projects are configured with clean code and production-ready deployments.</p>
            </div>
          </div>
          <button
            onClick={() => {
              if (onDiscussProject) onDiscussProject('Custom Project Discussion');
              const target = document.querySelector('#contact');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all"
          >
            Start Your Project
          </button>
        </div>

      </div>

      {/* Project Modal Component */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onDiscussProject={onDiscussProject}
        />
      )}
    </section>
  );
}
