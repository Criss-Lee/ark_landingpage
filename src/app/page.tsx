'use client';

import { Hero } from '@/features/landing/components/Hero';
import { ProblemSection } from '@/features/landing/components/ProblemSection';
import { SolutionSection } from '@/features/landing/components/SolutionSection';
import { TestimonialSection } from '@/features/landing/components/TestimonialSection';
import { PricingSection } from '@/features/landing/components/PricingSection';
import { Footer } from '@/features/landing/components/Footer';
import { Navbar } from '@/features/landing/components/Navbar';
import { DigitalFloodEraImageSection } from '@/features/landing/components/DigitalFloodEraImageSection';
import { ContactSection } from '@/features/landing/components/ContactSection';
import {
  CONTACT_FORM_HEADING,
  CONTACT_FORM_SUBHEADING,
  CONTACT_FORM_QUOTE,
  CONTACT_FORM_MESSAGE,
  CONTACT_FORM_WARNING_1,
  CONTACT_FORM_WARNING_2,
  CONTACT_FORM_FINAL_MESSAGE,
} from '@/features/landing/constants/contact-form.constants';

export default function Home() {
  return (
    <main className="bg-dark text-light min-h-screen">
      <Navbar />
      <Hero />
      
      <DigitalFloodEraImageSection />
      
      <section id="problem">
        <ProblemSection />
      </section>
      
      <section id="solution">
        <SolutionSection />
      </section>
      
      <section id="testimonial">
        <TestimonialSection />
      </section>
      
      <section id="pricing">
        <PricingSection />
      </section>
      
      <ContactSection />
      
      <Footer />
    </main>
  );
}
