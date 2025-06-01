import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: '디지털 대홍수 속에서 살아남는 법, 1년만 배우면 평생 써먹는다',
  description: '매일 3시간씩 찌꺼기 업무에 빠져 사는 당신. 노션·자동화·AI로 \'나만의 시스템\'을 구축하여 진짜 중요한 일에만 집중하세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ko">
      <body className="font-pretendard antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
