'use client';

import Image from 'next/image';
import { IMAGES } from '@/constants/images';

export function DigitalFloodEraImageSection() {
  return (
    <section className="w-full">
      <div className="relative w-full aspect-[9/16] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src={IMAGES.DIGITAL_FLOOD_ERA}
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