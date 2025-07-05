import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery | Scalezix.Academy',
  description: 'See our students and projects in action.',
};

export default function GalleryPage() {
  return (
    <div className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Gallery</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A glimpse into the life at Scalezix.Academy.
        </p>
      </div>
       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-lg overflow-hidden">
            <Image
              src={`https://placehold.co/600x400.png`}
              alt={`Gallery image ${i + 1}`}
              width={600}
              height={400}
              className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-300"
              data-ai-hint="student event"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
