import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import DynamicIcon from './DynamicIcon';

export default function Services({ isFullPage = false, limit }) {
  const navigate = useNavigate();

  const handleServiceClick = (serviceTitle) => {
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}`);
  };

  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className={`bg-[#0B1120] relative ${isFullPage ? 'pt-32 pb-24 md:pt-40 md:pb-28' : 'py-20'}`}>
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/40 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>Services & Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Web Development Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300">
            From modern responsive websites to custom interactive web applications, I deliver high-quality digital solutions tailored to your goals.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#0F172A] hover:bg-[#131F38] border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div>
                {/* Header: Icon + Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md shadow-blue-500/10">
                    <DynamicIcon name={service.icon} className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/70 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors">
                    {service.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-2 pb-6 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Features:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => handleServiceClick(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600/10 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-600 text-blue-400 hover:text-white text-sm font-semibold transition-all duration-200 group/btn shadow-sm cursor-pointer"
                  aria-label={`Discuss ${service.title}`}
                >
                  <span>Discuss This Service</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick Custom Package Callout (Shown when viewing all services) */}
          {!limit && (
            <div className="relative bg-gradient-to-br from-[#111A33] to-[#0A1020] border border-blue-600/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5 shadow-lg shadow-blue-500/30">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2.5">
                  Have a Unique Requirement?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Need a combination of custom services, specialized integrations, or an end-to-end web deployment? Let's discuss a tailored package tailored to your exact roadmap.
                </p>
                <div className="bg-[#0B1120] border border-slate-800 rounded-xl p-4 text-xs text-slate-300 space-y-2 mb-4">
                  <div className="text-blue-400 font-semibold">Direct Collaboration Includes:</div>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Direct developer communication</li>
                    <li>Transparent milestone pricing</li>
                    <li>Post-launch code handover & support</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => handleServiceClick('Custom Web Solution')}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 shadow-md shadow-blue-600/30 cursor-pointer"
              >
                <span>Request Custom Consultation</span>
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* If on home page with limit, show "View All Services" button */}
        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/30 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-all"
            >
              <span>Explore All 5 Service Offerings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
