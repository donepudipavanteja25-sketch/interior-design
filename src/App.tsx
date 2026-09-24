import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { StudioPage } from './pages/StudioPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PhilosophyPage } from './pages/PhilosophyPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessPage } from './pages/ProcessPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
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
      {/* Scroll restoration on route change */}
      <ScrollToTop />

      {/* Persistent Sticky Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main id="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenConsultation={handleOpenConsultation}
                onStartProjectWithRef={handleStartProjectWithRef}
                onSelectServiceForInquiry={handleSelectServiceForInquiry}
              />
            }
          />
          <Route
            path="/studio"
            element={<StudioPage onOpenConsultation={() => handleOpenConsultation()} />}
          />
          <Route
            path="/projects"
            element={
              <ProjectsPage
                onStartProjectWithRef={handleStartProjectWithRef}
                onOpenConsultation={() => handleOpenConsultation()}
              />
            }
          />
          <Route path="/work" element={<Navigate to="/projects" replace />} />
          <Route
            path="/philosophy"
            element={<PhilosophyPage onOpenConsultation={() => handleOpenConsultation()} />}
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onSelectServiceForInquiry={handleSelectServiceForInquiry}
                onOpenConsultation={() => handleOpenConsultation()}
              />
            }
          />
          <Route
            path="/process"
            element={<ProcessPage onOpenConsultation={() => handleOpenConsultation()} />}
          />
          <Route
            path="/journal"
            element={<JournalPage onOpenConsultation={() => handleOpenConsultation()} />}
          />
          <Route
            path="/contact"
            element={<ContactPage initialPreset={inquiryPreset} />}
          />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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
