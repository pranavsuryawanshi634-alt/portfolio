import React from 'react';
import { whyWorkWithMe } from '../data/portfolioData';
import DynamicIcon from './DynamicIcon';

export default function WhyWorkWithMe() {
  return (
    <section id="why-me" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/40 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>Genuine Strengths</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Work With Me
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A disciplined, reliable development approach focused on writing maintainable code and delivering dependable results for your business.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyWorkWithMe.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0F172A] border border-slate-800 hover:border-blue-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-[#131F38] shadow-lg hover:shadow-xl hover:shadow-blue-900/15"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                  <DynamicIcon name={item.icon} className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400">
                  0{item.id}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Guarantee & Transparency Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0E1628] via-[#111C36] to-[#0E1628] border border-slate-800 text-center space-y-3">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
            Commitment to Quality
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Honest Collaboration, No Hidden Fees, Direct Communication
          </h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            You deal directly with me from initial consultation to final deployment. Every milestone is clearly defined, and all source code is handed over cleanly with documentation.
          </p>
        </div>

      </div>
    </section>
  );
}
