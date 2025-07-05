import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="container text-center bg-secondary p-8 md:p-12 rounded-lg">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Join Scalezix.Academy today and take the first step towards a rewarding career in technology.
        </p>
        <Button size="lg" asChild>
          <Link href="/courses">Explore Our Courses</Link>
        </Button>
      </div>
    </section>
  );
}
