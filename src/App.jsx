import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingScrollTop from './components/FloatingScrollTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import WhyWorkWithMePage from './pages/WhyWorkWithMePage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden flex flex-col justify-between">
      {/* Reset scroll position on route transitions */}
      <ScrollToTop />

      {/* Global Persistent Navigation Bar */}
      <Navbar />

      {/* Page Routing */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/why-work-with-me" element={<WhyWorkWithMePage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Persistent Footer */}
      <Footer />

      {/* Floating Back to Top Button on Long Pages */}
      <FloatingScrollTop />
    </div>
  );
}
