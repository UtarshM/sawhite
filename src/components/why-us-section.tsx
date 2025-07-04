import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Flexible internship durations',
  'Build a strong project portfolio',
  'Learn industry best practices',
  'Career guidance and support',
];

export function WhyUsSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src="https://placehold.co/600x450.png"
            alt="Instructor teaching students"
            width={600}
            height={450}
            className="rounded-lg shadow-lg"
            data-ai-hint="instructor teaching"
          />
        </div>
        <div className="space-y-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose ScaleZix Academy?</h2>
          <p className="text-lg text-muted-foreground">
            We bridge the gap between academic learning and industry demands, preparing you for a successful career in tech.
          </p>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-lg text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
