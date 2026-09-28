import React from 'react';
import { Hero } from '../components/Hero';
import { PillarsShowcase } from '../components/PillarsShowcase';
import { StudioIntro } from '../components/StudioIntro';
import { ConstructionSystems } from '../components/ConstructionSystems';
import { PartnerRibbon } from '../components/PartnerRibbon';
import { GreenConstruction } from '../components/GreenConstruction';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
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
      {/* 1. Large Photographic Hero Section with 3 Rotating Slides */}
      <Hero onOpenConsultation={() => onOpenConsultation()} />

      {/* 2. Three Feature Cards Directly Below Hero with Shared Button to /construction-solutions */}
      <PillarsShowcase onSelectServiceForInquiry={onSelectServiceForInquiry} />

      {/* 3. About Vriksha with 50+ Projects, 100+ Clients, 5+ Years, and Blue Info Block */}
      <StudioIntro />

      {/* 4. Construction Systems Summary: MS Box, PVC, and Mivan Comparison */}
      <ConstructionSystems />

      {/* 5. Brand Partner Carousel in the Middle of the Page with Real Brand Logos */}
      <PartnerRibbon />

      {/* 6. Green Construction Section: Dark Blue 2-Column with 4 Practices & Orange Block */}
      <GreenConstruction />

      {/* 7. Featured Projects: Modern Villa, Corporate Office, Luxury Apartment */}
      <Projects onStartProjectWithRef={onStartProjectWithRef} />

      {/* 8. Services: Complete Solutions Under One Roof (Residential, Commercial, Interior, Renovation) */}
      <Services onSelectServiceForInquiry={onSelectServiceForInquiry} />

      {/* 9. Process: 4 Steps (Consultation, Design & Plan, Build & Execute, Handover) */}
      <Process />

      {/* 10. Testimonial: Full-width Blue Hero Quote + Client Reviews */}
      <Testimonial />

      {/* 11. Final CTA: "Have a space in mind? Let's build it well." + Get a Quote & Call +91 99893 82877 */}
      <ContactCTA onOpenConsultation={() => onOpenConsultation()} />
    </>
  );
};
