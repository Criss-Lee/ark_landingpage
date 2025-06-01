'use client';

import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">노다의 방주</h3>
            <p className="text-light/70 mb-4">
              디지털 대홍수 시대, 살아남기 위한 필수 지식과 시스템을 제공합니다.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">블로그</h3>
            <ul className="space-y-2 text-light/70">
              <li>
                <a href="#" className="hover:text-accent-500 transition-colors">
                  찌꺼기 시간 VS 위대한 일: 당신의 하루는 어떻게 구성되어 있나요?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-500 transition-colors">
                  템플릿 지옥에서 벗어나기: TMF 구축 가이드
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-500 transition-colors">
                  AI 시대 1인 기업가가 알아야 할 업무 자동화의 3가지 원칙
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">문의하기</h3>
            <p className="text-light/70">
              이메일: contact@noda.com<br />
              전화: 02-123-4567<br />
              운영시간: 평일 10:00 - 18:00
            </p>
          </div>
        </div>
        
        <Separator className="my-8 bg-light/10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-light/50">
            &copy; {currentYear} 노다의 방주. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-light/50 hover:text-accent-500 transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="text-sm text-light/50 hover:text-accent-500 transition-colors">
              이용약관
            </a>
            <a href="#" className="text-sm text-light/50 hover:text-accent-500 transition-colors">
              사이트맵
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 