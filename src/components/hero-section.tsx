import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-secondary">
      <div className="container grid md:grid-cols-2 gap-8 items-center py-20 md:py-32">
        <div className="space-y-6">
          <span className="font-semibold text-primary uppercase tracking-wider">Unlock Your AI Potential</span>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            The Future of Intelligence, <span className="text-primary">Mastered.</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Scalezix Academy provides world-class AI training programs to equip you with the skills to lead in the new era of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild variant="highlight">
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Futuristic AI concept"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
            data-ai-hint="ai intelligence"
          />
        </div>
      </div>
    </section>
  );
}
