import React from 'react';
import { Hero } from '../components/Hero';
import { PartnerRibbon } from '../components/PartnerRibbon';
import { PillarsShowcase } from '../components/PillarsShowcase';
import { Projects } from '../components/Projects';
import { StudioIntro } from '../components/StudioIntro';
import { Philosophy } from '../components/Philosophy';
import { Services } from '../components/Services';
import { VisualBreak } from '../components/VisualBreak';
import { Process } from '../components/Process';
import { Journal } from '../components/Journal';
import { Testimonial } from '../components/Testimonial';
import { ContactCTA } from '../components/ContactCTA';

interface HomePageProps {
  onOpenConsultation: (preset?: string) => void;
  onStartProjectWithRef: (projectTitle: string) => void;
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultation,
  onStartProjectWithRef,
  onSelectServiceForInquiry
}) => {
  return (
    <>
      {/* Cinematic Hero */}
      <Hero onOpenConsultation={() => onOpenConsultation()} />

      {/* Brand & Client Partner Ribbon */}
      <PartnerRibbon />

      {/* 3-Pillar Architectural Disciplines Showcase */}
      <PillarsShowcase onSelectServiceForInquiry={onSelectServiceForInquiry} />

      {/* Selected Work / Featured Projects */}
      <Projects onStartProjectWithRef={onStartProjectWithRef} />

      {/* About the Studio & Experience Stats */}
      <StudioIntro />

      {/* Design Philosophy & Tactile Materials */}
      <Philosophy />

      {/* Architectural & Interior Disciplines */}
      <Services onSelectServiceForInquiry={onSelectServiceForInquiry} />

      {/* Full-width Atmosphere Break */}
      <VisualBreak />

      {/* 4-Phase Architectural Methodology */}
      <Process />

      {/* Design Journal & Essays */}
      <Journal />

      {/* Client Praise & Critical Acclaim */}
      <Testimonial />

      {/* Project Inquiry & Studio Locations */}
      <ContactCTA />
    </>
  );
};
