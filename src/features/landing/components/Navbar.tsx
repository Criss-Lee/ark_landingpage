'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-light">노다의 방주</span>
        </div>
        
        {/* Center Logo - removed */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('problem')}
            className="text-light/80 hover:text-accent-500 transition-colors"
          >
            문제
          </button>
          <button 
            onClick={() => scrollToSection('solution')}
            className="text-light/80 hover:text-accent-500 transition-colors"
          >
            솔루션
          </button>
          <button 
            onClick={() => scrollToSection('testimonial')}
            className="text-light/80 hover:text-accent-500 transition-colors"
          >
            후기
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-light/80 hover:text-accent-500 transition-colors"
          >
            가격
          </button>
          <Button 
            onClick={() => scrollToSection('contact-form')}
            className="bg-accent-500 hover:bg-accent-500/90 text-white"
          >
            지금 신청하기
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md">
          {/* Mobile Logo - replaced with text */}
          <div className="flex justify-center py-4">
            
          </div>
          <div className="flex flex-col space-y-4 p-4">
            <button 
              onClick={() => scrollToSection('problem')}
              className="text-light/80 hover:text-accent-500 transition-colors py-2"
            >
              문제
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className="text-light/80 hover:text-accent-500 transition-colors py-2"
            >
              솔루션
            </button>
            <button 
              onClick={() => scrollToSection('testimonial')}
              className="text-light/80 hover:text-accent-500 transition-colors py-2"
            >
              후기
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-light/80 hover:text-accent-500 transition-colors py-2"
            >
              가격
            </button>
            <Button 
              onClick={() => scrollToSection('contact-form')}
              className="bg-accent-500 hover:bg-accent-500/90 text-white w-full"
            >
              지금 신청하기
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
} 