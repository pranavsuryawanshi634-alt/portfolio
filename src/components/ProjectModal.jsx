import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import ProjectMockup from './ProjectMockup';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose, onDiscussProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-2xl bg-[#0D1527] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090F1C]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-blue-400 bg-blue-950/80 px-2.5 py-0.5 rounded-full border border-blue-800/40">
              {project.category}
            </span>
            {project.isDemonstration && (
              <span className="text-xs font-mono text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-800/40">
                Demonstration / Prototype
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mockup Preview in Modal */}
        <div className="overflow-hidden">
          <ProjectMockup type={project.mockupType} title={project.title} />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-blue-400">
              {project.subtitle}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Project Overview
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Key Features & Architecture
              </h4>
              <div className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#131E38] text-slate-300 border border-slate-700/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Status Note */}
          <div className="bg-[#121B32] border border-slate-800 p-4 rounded-xl flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Project Status: <strong className="text-white">{project.status}</strong></span>
            </div>
            {project.badge && (
              <span className="text-slate-400 font-mono text-[11px]">{project.badge}</span>
            )}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:px-6 bg-[#090F1C] border-t border-slate-800">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors border border-slate-700 w-full sm:w-auto"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveUrl && project.liveUrl !== '#contact' && (
              <a
                href={project.liveUrl}
                target={project.liveUrl.startsWith('#') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors border border-slate-700 w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live View / Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              onClose();
              if (onDiscussProject) {
                onDiscussProject(`Inquiry regarding ${project.title}`);
              }
              const target = document.querySelector('#contact');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all w-full sm:w-auto"
          >
            <span>Build Something Similar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
