import React from 'react';
import { 
  Globe, 
  MapPin, 
  Activity, 
  Flame, 
  Bot, 
  Sparkles, 
  ExternalLink, 
  Compass, 
  TrendingUp,
  Cpu,
  BarChart3
} from 'lucide-react';

export default function ProjectMockup({ type, title }) {
  switch (type) {
    case 'portal':
      // E-Cell SITRC Portal Mockup
      return (
        <div className="w-full h-48 bg-gradient-to-b from-[#101935] to-[#0A1024] p-3 flex flex-col justify-between border-b border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span className="text-[10px] text-slate-400 font-mono ml-2">ecell-sitrc.org</span>
            </div>
            <span className="text-[10px] text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">
              Campus Portal
            </span>
          </div>
          <div className="space-y-2 py-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-600/30 text-blue-400 flex items-center justify-center text-xs font-bold">
                E
              </div>
              <div>
                <div className="h-2 w-28 bg-slate-300 rounded"></div>
                <div className="h-1.5 w-16 bg-slate-600 rounded mt-1"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="p-2 rounded bg-[#131F3B] border border-slate-800 text-[9px] text-slate-300">
                <div className="text-blue-400 font-bold text-xs">SIH '26</div>
                <div>Hackathon</div>
              </div>
              <div className="p-2 rounded bg-[#131F3B] border border-slate-800 text-[9px] text-slate-300">
                <div className="text-emerald-400 font-bold text-xs">E-Cell</div>
                <div>Incubation</div>
              </div>
              <div className="p-2 rounded bg-[#131F3B] border border-slate-800 text-[9px] text-slate-300">
                <div className="text-purple-400 font-bold text-xs">Events</div>
                <div>Speakers</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/60">
            <span>SITRC Outreach Initiative</span>
            <span className="text-emerald-400">● Active</span>
          </div>
        </div>
      );

    case 'dashboard':
      // Smart Tourism & Traffic Platform (STIP) Mockup
      return (
        <div className="w-full h-48 bg-[#090F1E] p-3 flex flex-col justify-between border-b border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] text-blue-300 font-mono">STIP Command Center — Nashik</span>
            </div>
            <span className="text-[9px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
              SIH Hackathon
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="bg-[#101A33] border border-blue-900/40 p-2 rounded-lg">
              <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                <span>Traffic Flow</span>
                <Activity className="w-3 h-3 text-cyan-400" />
              </div>
              <div className="text-sm font-bold text-white">Moderate</div>
              <div className="w-full bg-slate-800 h-1 rounded mt-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full w-2/3"></div>
              </div>
            </div>
            <div className="bg-[#101A33] border border-blue-900/40 p-2 rounded-lg">
              <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                <span>Hotspot Alert</span>
                <Flame className="w-3 h-3 text-amber-400" />
              </div>
              <div className="text-sm font-bold text-white">Trimbak Rd</div>
              <div className="text-[9px] text-amber-300/80 mt-1">Crowd Index: 78%</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-blue-400" /> Digital Twin Map Ready
            </span>
            <span className="text-slate-400 font-mono text-[9px]">SIH26202</span>
          </div>
        </div>
      );

    case 'portfolio':
      // Portfolio Website Mockup
      return (
        <div className="w-full h-48 bg-[#0B132B] p-3 flex flex-col justify-between border-b border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span className="text-[10px] text-slate-300 font-mono">pranav-portfolio.dev</span>
            </div>
            <span className="text-[9px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              Live Production
            </span>
          </div>
          <div className="space-y-2 py-2">
            <div className="h-3 w-3/4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded"></div>
            <div className="h-2 w-1/2 bg-slate-600 rounded"></div>
            <div className="flex gap-2 pt-1">
              <div className="px-2 py-1 rounded bg-blue-600/30 text-[9px] text-blue-300">Hire Me CTA</div>
              <div className="px-2 py-1 rounded bg-slate-800 text-[9px] text-slate-300">Direct WhatsApp</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
            <span>Fast Vite + Tailwind Engine</span>
            <span className="text-blue-400">SPA Architecture</span>
          </div>
        </div>
      );

    case 'utility':
      // Petrol Tracker Mockup
      return (
        <div className="w-full h-48 bg-[#0B1426] p-3 flex flex-col justify-between border-b border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[10px] text-slate-300 font-mono">petrol-tracker-app</span>
            </div>
            <span className="text-[9px] text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
              Utility
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="p-2 rounded bg-[#101A33] border border-slate-800 text-center">
              <div className="text-[9px] text-slate-400">Efficiency</div>
              <div className="text-xs font-bold text-emerald-400 mt-0.5">48 km/L</div>
            </div>
            <div className="p-2 rounded bg-[#101A33] border border-slate-800 text-center">
              <div className="text-[9px] text-slate-400">Total Logs</div>
              <div className="text-xs font-bold text-white mt-0.5">32 Entries</div>
            </div>
            <div className="p-2 rounded bg-[#101A33] border border-slate-800 text-center">
              <div className="text-[9px] text-slate-400">Cost/km</div>
              <div className="text-xs font-bold text-cyan-400 mt-0.5">₹2.18</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
            <span>Expense Tracking Engine</span>
            <span className="text-emerald-400">✓ Tested</span>
          </div>
        </div>
      );

    case 'chat':
      // Father Chatbot Mockup
      return (
        <div className="w-full h-48 bg-[#090E1D] p-3 flex flex-col justify-between border-b border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] text-slate-300 font-mono">Father AI Assistant</span>
            </div>
            <span className="text-[9px] text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
              Dialogue Model
            </span>
          </div>
          <div className="space-y-2 my-auto text-[10px]">
            <div className="bg-[#121B33] text-slate-300 p-2 rounded-lg max-w-[80%] rounded-tl-none border border-slate-800">
              "How can I plan my schedule effectively today?"
            </div>
            <div className="bg-blue-600/20 text-blue-200 p-2 rounded-lg max-w-[85%] ml-auto rounded-tr-none border border-blue-500/30">
              "Focus on your high-priority milestone first, then allocate time for review."
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
            <span>Structured Prompt Flow</span>
            <span className="text-cyan-400">Demo Prototype</span>
          </div>
        </div>
      );

    case 'future':
    default:
      // Future Custom Project Mockup
      return (
        <div className="w-full h-48 bg-gradient-to-br from-[#0B1530] via-[#0E1B3E] to-[#080E20] p-4 flex flex-col justify-between items-center text-center border-b border-slate-800">
          <div className="w-full flex justify-end">
            <span className="text-[9px] text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">
              Custom Commission
            </span>
          </div>
          <div className="space-y-1">
            <div className="w-10 h-10 mx-auto rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-white pt-1">Your Digital Vision</div>
            <div className="text-[10px] text-slate-400">Landing Page • Web App • E-Commerce</div>
          </div>
          <div className="text-[10px] text-blue-300 flex items-center gap-1 font-medium">
            <span>Book Your Development Slot →</span>
          </div>
        </div>
      );
  }
}
