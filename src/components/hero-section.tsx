import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-secondary">
      <div className="container grid md:grid-cols-2 gap-8 items-center py-20 md:py-32">
        <div className="space-y-6">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Launch Your Tech Career with <span className="text-primary">Real-World Experience</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Join our internship programs to build production-grade projects, gain hands-on skills, and earn a certificate that matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/internships">View Programs <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Students collaborating on a project"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
            data-ai-hint="students collaboration"
          />
        </div>
      </div>
    </section>
  );
}
