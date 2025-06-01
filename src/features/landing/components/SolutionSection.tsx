'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Lightbulb, Zap } from 'lucide-react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';

export function SolutionSection() {
  const solutions = [
    {
      title: 'NTT 마스터클래스',
      subtitle: '매주 쌍방향 실시간',
      benefits: [
        '6명 한정 쌍방향 수업으로 "내 화면을 보며 직접 코칭" - 혼자 막히는 구간 제로',
        '범용 템플릿이 아닌 "내 업무에 딱 맞는 시스템" 설계 - 남의 틀에 끼워 맞추기 끝',
        '매주 수요일 실시간 피드백으로 "1년 후엔 자동화 전문가" - 더 이상 기술에 끌려다니지 않음',
      ],
      icon: <Users className="h-12 w-12 text-accent-500" />,
    },
    {
      title: "ND's Collection",
      subtitle: '즉시 활용 가능한 검증된 템플릿',
      benefits: [
        '5년간 현장에서 검증된 "그룹웨어 템플릿 + 자동화 시나리오" - 실패 위험 제로',
        '복사-붙여넣기 한 번으로 "즉시 내 업무에 적용" - 몇 달 걸릴 시스템 구축이 하루 만에',
        '계속 업데이트되는 최신 노하우로 "평생 써먹는 자산" 확보',
      ],
      icon: <Lightbulb className="h-12 w-12 text-accent-500" />,
    },
    {
      title: '도반 커뮤니티',
      subtitle: '함께 성장하는 동료',
      benefits: [
        '같은 고민하는 "진짜 동료들과 24시간 소통" - 막힐 때마다 즉시 해결',
        '1:1 커피챗과 오프라인 모임으로 "진짜 인맥 형성" - 비즈니스 기회까지 연결',
        '서로의 성공 사례 공유로 "내 상황에 맞는 아이디어" 지속 획득',
      ],
      icon: <Zap className="h-12 w-12 text-accent-500" />,
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-dark to-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src={IMAGES.AUTOMATION_LAVA}
          alt="자동화의 용암지대"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            노다의 방주에서 당신만의 '디지털 해방' 시스템을 구축하세요
          </h2>
          <p className="text-xl text-light/80 max-w-3xl mx-auto">
            1년 안에 반복 업무는 90% 자동화하고, 당신은 오직 '위대한 일'에만 몰입하는 삶으로 변화합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-secondary border-none overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  {solution.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-center">
                  {solution.title}
                </CardTitle>
                <p className="text-center text-light/70">{solution.subtitle}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent-500 mr-2 font-bold">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 