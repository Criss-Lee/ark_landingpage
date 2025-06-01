'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import Image from 'next/image';

export function PricingSection() {
  const plans = [
    {
      name: 'Core 플랜',
      subtitle: '기본',
      description: '시스템 구축의 기초를 탄탄히',
      price: '228만원',
      originalPrice: '380만원',
      discount: '40% 할인',
      features: [
        'NTT마스터클래스 (매주 수요일, 1년간)',
        'ND\'s Collection 그룹웨어 템플릿 전체',
        '매월 오프라인 모임 (네트워킹 & 실습)',
      ],
      isPopular: false,
    },
    {
      name: 'Boost 플랜',
      subtitle: '추천',
      description: 'Core + 심화 학습',
      price: '298만원',
      originalPrice: '480만원',
      discount: '38% 할인',
      features: [
        'Core 플랜의 모든 혜택',
        '메이크 미니 챌린지 (자동화 사전체험)',
        'ND\'s Collection 메이크 블루프린트',
        '월간 노다지 (월 1회 심화 강의)',
      ],
      isPopular: true,
    },
    {
      name: 'Black 플랜',
      subtitle: '프리미엄',
      description: 'Boost + 개인 맞춤 코칭',
      price: '498만원',
      originalPrice: '780만원',
      discount: '36% 할인',
      features: [
        'Boost 플랜의 모든 혜택',
        '업무 컨설팅 4회 (2시간씩, 1:1 맞춤)',
        'NTT부트캠프 케이스 스터디',
        'Notion QnA 무제한 이용권',
        '1:1 커피챗 (1시간)',
      ],
      isPopular: false,
    },
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black to-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/images/툴킷의 정원(Upscale).png"
          alt="툴킷의 정원"
          fill
          className="object-cover object-center"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            1년 투자로 평생 써먹는 시스템, 지금이 가장 저렴합니다
          </h2>
          <p className="text-xl text-light/80 max-w-3xl mx-auto">
            슈퍼얼리버드는 단 1일간, 얼리버드는 3일간만 제공됩니다. 다음 기수부터는 가격이 계속 올라갑니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-none flex flex-col ${
                plan.isPopular ? 'bg-accent-500/20' : 'bg-secondary'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-accent-500 text-white px-3 py-1 rounded-bl-lg flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" /> 추천
                  </div>
                </div>
              )}
              
              <CardHeader>
                <p className="text-sm text-light/70">{plan.subtitle}</p>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-sm">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <p className="text-3xl font-bold">{plan.price}</p>
                  <div className="flex items-center mt-1">
                    <p className="text-sm line-through text-light/70 mr-2">{plan.originalPrice}</p>
                    <p className="text-xs bg-accent-500 text-white px-2 py-0.5 rounded-full">{plan.discount}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex">
                      <Check className="h-5 w-5 text-accent-500 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  onClick={scrollToForm}
                  className={`w-full ${
                    plan.isPopular 
                      ? 'bg-accent-500 hover:bg-accent-500/90' 
                      : 'bg-primary-500 hover:bg-primary-500/90'
                  } text-white`}
                >
                  지금 신청하기
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-light/70">💡 특별 혜택: NTT수강생이 부트캠프 수강 시 80만원 전액 환급 (1기 한정)</p>
        </div>
      </div>
    </section>
  );
} 