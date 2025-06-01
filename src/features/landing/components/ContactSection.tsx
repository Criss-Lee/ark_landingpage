'use client';

import Image from 'next/image';
import {
  CONTACT_FORM_HEADING,
  CONTACT_FORM_SUBHEADING,
  CONTACT_FORM_QUOTE,
  CONTACT_FORM_MESSAGE,
  CONTACT_FORM_WARNING_1,
  CONTACT_FORM_WARNING_2,
  CONTACT_FORM_FINAL_MESSAGE,
} from '@/features/landing/constants/contact-form.constants';
import { ContactForm } from '@/features/landing/components/ContactForm';

export function ContactSection() {
  return (
    <section id="contact-form" className="relative py-20 px-4 bg-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/립 업 스트림.png"
          alt="립 업 스트림"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 whitespace-pre-line">
            {CONTACT_FORM_HEADING}
          </h2>
          <p className="text-xl text-light/80 max-w-3xl mx-auto whitespace-pre-line">
            {CONTACT_FORM_SUBHEADING}
          </p>
        </div>

        <ContactForm />

        <div className="mt-16 text-center">
          <p className="text-xl font-bold mb-4">
            {CONTACT_FORM_QUOTE}
          </p>
          <p className="text-light/80 max-w-3xl mx-auto">
            {CONTACT_FORM_MESSAGE}
          </p>
          <div className="mt-6 space-y-2 text-accent-500 font-semibold">
            <p>{CONTACT_FORM_WARNING_1}</p>
            <p>{CONTACT_FORM_WARNING_2}</p>
          </div>
          <p className="mt-6 text-light/80">
            {CONTACT_FORM_FINAL_MESSAGE}
          </p>
        </div>
      </div>
    </section>
  );
} 