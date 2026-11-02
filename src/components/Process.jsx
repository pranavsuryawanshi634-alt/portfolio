import React from 'react';
import { workflowSteps } from '../data/portfolioData';
import DynamicIcon from './DynamicIcon';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Process({ onStartProject }) {
  return (
    <section id="process" className="py-24 bg-[#080D1A] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/40 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>Workflow & Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Work: From Concept to Launch
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A structured, 4-step process designed to eliminate confusion, keep timelines on schedule, and deliver exactly what your project requires.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {workflowSteps.map((item, index) => (
            <div
              key={item.step}
              className="relative bg-[#0E1628] border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-[#121D38] flex flex-col justify-between shadow-xl group"
            >
              <div>
                {/* Step badge and icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black font-mono text-blue-500/80 group-hover:text-blue-400 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <DynamicIcon name={item.icon} className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-blue-400/80 mb-3">
                  {item.shortTitle}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Key check items */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress indicator */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Phase 0{index + 1}</span>
                <span>{index === 3 ? 'Completed' : 'Next →'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Process CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => {
              if (onStartProject) onStartProject('New Project Inquiry (Step 1 Initiation)');
              const target = document.querySelector('#contact');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all"
          >
            <span>Ready to Begin? Start at Step 1</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
