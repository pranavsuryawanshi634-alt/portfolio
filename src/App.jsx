import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState('Website Development');

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'portfolio', 'why-me', 'process', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  const handleDiscussProject = (inquiryContext) => {
    if (inquiryContext) {
      setSelectedService(inquiryContext);
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onSelectService={handleSelectService}
      />

      {/* Main Sections */}
      <main>
        <Hero onDiscussProject={() => handleDiscussProject('General Web Project Inquiry')} />
        
        <About />
        
        <Services onSelectService={handleSelectService} />
        
        <Portfolio onDiscussProject={handleDiscussProject} />
        
        <WhyWorkWithMe />
        
        <Process onStartProject={handleDiscussProject} />
        
        <Contact initialSelectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
