import { Button } from './ui/button';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="container text-center bg-secondary p-12 rounded-lg">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Join ScaleZix Academy today and take the first step towards a rewarding career in technology.
        </p>
        <Button size="lg" asChild>
          <Link href="/internships">Explore Internship Programs</Link>
        </Button>
      </div>
    </section>
  );
}
