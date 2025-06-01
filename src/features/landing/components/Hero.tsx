'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';

export function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-black/80 -z-10" />
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-20 opacity-30">
        <Image
          src={IMAGES.DIGITAL_FLOOD_ERA}
          alt="디지털 대홍수 시대"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Image 
            src={IMAGES.LOGO} 
            alt="노다의 방주 로고" 
            width={225}
            height={75}
            className="h-auto mx-auto"
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          디지털 대홍수 속에서 살아남는 법,
          <br />
          <span className="text-accent-500">1년만 배우면 평생 써먹는다</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-light/80">
          매일 3시간씩 찌꺼기 업무에 빠져 사는 당신.
          <br />
          노션·자동화·AI로 '나만의 시스템'을 구축하여
          <br />
          진짜 중요한 일에만 집중하세요.
          <br />
          <br />
          <span className="font-semibold">380만원 → 228만원</span>
          <br />
          (슈퍼얼리버드 40% 할인, 단 1일간)
        </p>
        
        <Button 
          onClick={scrollToForm}
          size="lg" 
          className="bg-accent-500 hover:bg-accent-500/90 text-white font-semibold px-8 py-6 text-lg rounded-full"
        >
          지금 노다의 방주에 승선하기 <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
        
        <p className="mt-4 text-sm text-light/70">슈퍼얼리버드 마감 임박!</p>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="h-6 w-6 text-light/50" />
      </div>
    </section>
  );
} 