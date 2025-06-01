'use client';

import { Card } from '@/components/ui/card';
import { Clock, Search, FileSpreadsheet, MoonStar } from 'lucide-react';
import Image from 'next/image';

export function ProblemSection() {
  const problems = [
    {
      time: '아침 9시',
      description: '어제와 똑같은 엑셀 작업으로 하루 시작',
      icon: <Clock className="h-8 w-8 text-accent-500" />,
    },
    {
      time: '오후 2시',
      description: '"이 데이터 어디 있더라?" 10분째 파일 찾기',
      icon: <Search className="h-8 w-8 text-accent-500" />,
    },
    {
      time: '저녁 8시',
      description: '또 다른 보고서 만들기... 집에 언제 가지?',
      icon: <FileSpreadsheet className="h-8 w-8 text-accent-500" />,
    },
    {
      time: '밤 11시',
      description: '"내일도 이런 일의 연속이겠지..."',
      icon: <MoonStar className="h-8 w-8 text-accent-500" />,
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/기초의 해변(Upscale) - 가로.png"
          alt="기초의 해변"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "또 야근이야..." 매일 반복되는 찌꺼기 업무에 지쳐가고 있나요?
          </h2>
          <p className="text-xl text-light/80 max-w-3xl mx-auto">
            수십 개 엑셀 파일을 복사-붙여넣기하며, 같은 보고서를 또 만들고... 이런 일이 내가 하고 싶었던 일인가요?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 bg-secondary border-none">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold mb-2">{problem.time}</h3>
                <p className="text-light/80">{problem.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-xl">
          <p className="mb-4">
            당신도 이런 경험 있으시죠? 중요한 전략 업무는 미뤄두고, 기계도 할 수 있는 반복 작업만 하루 종일...
          </p>
          <p className="font-bold text-accent-500">
            이제 정말 지겹지 않나요?
          </p>
          <p className="mt-4">
            분명 더 창의적이고 가치 있는 일을 하고 싶었을 텐데, 언제부터 이렇게 <span className="font-bold">"업무의 노예"</span>가 되어버린 걸까요?
          </p>
        </div>
      </div>
    </section>
  );
} 