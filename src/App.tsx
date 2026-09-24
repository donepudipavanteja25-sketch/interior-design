import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioIntro } from './components/StudioIntro';
import { Projects } from './components/Projects';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { VisualBreak } from './components/VisualBreak';
import { Process } from './components/Process';
import { Journal } from './components/Journal';
import { Testimonial } from './components/Testimonial';
import { ContactCTA } from './components/ContactCTA';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  useScrollReveal();

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [inquiryPreset, setInquiryPreset] = useState<string>('');

  const handleOpenConsultation = (preset?: string) => {
    if (preset) {
      setInquiryPreset(preset);
    }
    setIsConsultationOpen(true);
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setInquiryPreset(serviceName);
    setIsConsultationOpen(true);
  };

  const handleStartProjectWithRef = (projectTitle: string) => {
    setInquiryPreset(`Inspired by ${projectTitle}`);
    setIsConsultationOpen(true);
  };

  return (
    <div className="verde-form-app">
      {/* Sticky Header Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main>
        {/* Cinematic Hero */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* Studio Introduction */}
        <StudioIntro />

        {/* Selected Work / Projects */}
        <Projects onStartProjectWithRef={handleStartProjectWithRef} />

        {/* Design Philosophy & Tactile Materials */}
        <Philosophy />

        {/* Full Architectural & Interior Disciplines */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* Full-width Atmosphere Break */}
        <VisualBreak />

        {/* 4-Phase Architectural Methodology */}
        <Process />

        {/* Design Journal & Essays */}
        <Journal />

        {/* Client Praise & Critical Acclaim */}
        <Testimonial />

        {/* Project Inquiry & Studio Locations */}
        <ContactCTA initialServiceOrProject={inquiryPreset} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => {
          setIsConsultationOpen(false);
          setInquiryPreset('');
        }}
        presetScopeOrProject={inquiryPreset}
      />
    </div>
  );
};

export default App;
