import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Code2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import { whyWorkWithMe } from '../data/portfolioData';
import DynamicIcon from '../components/DynamicIcon';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Focused Value Highlights */}
      <section className="py-12 bg-[#090F1E] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0E1628] border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Modern Tech Stack</h3>
                <p className="text-xs text-slate-400 mt-0.5">React 19, Tailwind CSS, Node.js & clean code principles.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0E1628] border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-cyan-600/15 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Responsive Across All Screens</h3>
                <p className="text-xs text-slate-400 mt-0.5">Tested for smartphones, tablets, and desktop devices.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0E1628] border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/15 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Direct Collaboration</h3>
                <p className="text-xs text-slate-400 mt-0.5">Transparent milestones, direct communication & clean handover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Brief Services Overview (Focused top 3) */}
      <Services limit={3} />

      {/* 4. Selected Featured Projects Preview (Focused top 3) */}
      <Portfolio limit={3} />

      {/* 5. Why Work With Me Snapshot */}
      <section className="py-20 bg-[#0B1120] relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/40 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
                <span>Working Principles</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Why Clients Trust My Development
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-xl">
                A disciplined engineering approach focused on maintainability, speed, and clear communication.
              </p>
            </div>

            <Link
              to="/why-work-with-me"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group shrink-0"
            >
              <span>Explore All Strengths & Working Advantages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyWorkWithMe.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all hover:bg-[#131F38]"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center mb-4">
                  <DynamicIcon name={item.icon} className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. High-Impact Call-to-Action Banner */}
      <section className="py-20 bg-gradient-to-b from-[#0B1120] to-[#070B14] relative border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#0F1B38] via-[#12224A] to-[#0E1A36] border border-blue-500/30 p-8 sm:p-12 text-center shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Build Something Exceptional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
              Ready to Turn Your Business Vision Into Reality?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mt-4 leading-relaxed">
              Whether you need a brand-new website, an interactive custom web application, or an interface redesign, I am ready to collaborate.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all duration-200"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/process"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm transition-all"
              >
                <span>View How I Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
