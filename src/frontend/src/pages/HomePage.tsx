import { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import AboutSection from '../components/sections/AboutSection';
import JobRequirementsSection from '../components/sections/JobRequirementsSection';
import ContactSection from '../components/contact/ContactSection';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function HomePage() {
  useDocumentMeta(
    'Trustline Financial Services - Credit Card Solutions',
    'Professional credit card sales and financial services. Partner with Trustline Financial Services for expert guidance and comprehensive solutions.'
  );

  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <AboutSection />
      <JobRequirementsSection />
      <ContactSection />
    </div>
  );
}
