'use client';

import Image from 'next/image';

export default function IntroPage() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Desktop Image */}
      <Image
        src="/images/landing.png"
        alt="intro page"
        fill
        className="object-cover sm:block hidden"
        priority
      />
      {/* Mobile Image */}
      <Image
        src="/images/mobile.png"
        alt="intro page"
        fill
        className="object-cover sm:hidden block"
        priority
      />
      {/* Optional Overlay (centered content)
      <div className="absolute inset-0 flex items-center justify-center text-white z-10">
       </div> */}
    </section>
  );
}
