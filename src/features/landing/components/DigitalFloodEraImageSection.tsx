'use client';

import Image from 'next/image';

export function DigitalFloodEraImageSection() {
  return (
    <section className="w-full">
      <div className="relative w-full aspect-[9/16] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src="/images/02. 디지털 홍수의 시대(glow) - 세로.jpg"
          alt="디지털 홍수의 시대"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
} 