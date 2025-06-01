'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "노션 테크닉 기대하고 들어왔는데, 철학과 본질에 대해 감동했습니다. 단순한 효율성이 아니라 '사람을 위한 시스템'이라는 관점이 완전히 새로웠어요. 1인 기업은 시스템을 구축해가는 업이라는 정의에 깊이 공감합니다.",
      author: '30년 기업 경험자 (CTO)',
      initials: 'CTO',
    },
    {
      quote: "2년 안에 시스템 만들고 퇴사하려 했는데... 7년이 지나도록 못했어요. 하지만 노션다움님의 조직도 구성 방식을 보고 '내가 나아갈 길'을 찾았습니다. 기술의 냉정함 속에서도 따뜻한 휴머니티를 잃지 않는 철학이 인상 깊었어요.",
      author: '학원장 (7년차 1인 실무자)',
      initials: '학원',
    },
    {
      quote: "시스템 만들기에 목말라 있었는데, 노션다움 웨비나에서 8가지 인사이트를 얻었습니다. '기능이 아닌 해방이라는 가치에 접근한다'는 말이 특히 와닿았어요. 이제 어떻게 표현하면 좋을지 방향이 보입니다.",
      author: '시스템 구축 목마른 개발자',
      initials: '개발',
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/노다지 황금섬(Upscale).png"
          alt="노다지 황금섬"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "기술이 아니라 인생이 바뀌었어요" - 도반들의 진짜 이야기
          </h2>
          <p className="text-xl text-light/80 max-w-3xl mx-auto">
            노다의 방주를 경험한 분들이 말하는 가장 큰 변화는 '시간 해방'이 아니라 '관점의 전환'이었습니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary border-none">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent-500 mb-4" />
                <p className="mb-6 text-light/90 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 bg-accent-500">
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 