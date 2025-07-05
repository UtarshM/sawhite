import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workshops | Scalezix.Academy',
  description: 'Join our hands-on AI workshops.',
};

export default function WorkshopsPage() {
  return (
    <div className="container py-20 text-center">
      <h1 className="font-headline text-4xl font-bold">Our Workshops</h1>
      <p className="text-lg text-muted-foreground mt-4">Workshop schedule will be available soon.</p>
    </div>
  );
}
