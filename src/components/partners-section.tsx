"use client"

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from 'react';

const partners = [
  { name: 'Partner 1', logo: 'https://placehold.co/150x60.png' },
  { name: 'Partner 2', logo: 'https://placehold.co/150x60.png' },
  { name: 'Partner 3', logo: 'https://placehold.co/150x60.png' },
  { name: 'Partner 4', logo: 'https://placehold.co/150x60.png' },
  { name: 'Partner 5', logo: 'https://placehold.co/150x60.png' },
  { name: 'Partner 6', logo: 'https://placehold.co/150x60.png' },
  { name: 'Partner 7', logo: 'https://placehold.co/150x60.png' },
  { name: 'Partner 8', logo: 'https://placehold.co/150x60.png' },
];

export function PartnersSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section className="py-16 bg-background">
      <div className="container animate-in fade-in duration-500 delay-300">
        <h2 className="text-center text-xl font-semibold text-muted-foreground mb-8">
          Partners with Industry Leaders
        </h2>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex items-center justify-center h-24">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={50}
                    className="object-contain"
                    data-ai-hint="company logo"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
