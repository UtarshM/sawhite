import Image from 'next/image';

const partners = [
  { name: 'Partner 1', logo: 'https://placehold.co/150x60.png' },
  { name: 'Partner 2', logo: 'https://placehold.co/150x60.png' },
  { name: 'Partner 3', logo: 'https://placehold.co/150x60.png' },
  { name: 'Partner 4', logo: 'https://placehold.co/150x60.png' },
  { name: 'Partner 5', logo: 'https://placehold.co/150x60.png' },
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container animate-in fade-in duration-500 delay-300">
        <h2 className="text-center text-xl font-semibold text-muted-foreground mb-8">
          Partners with Industry Leaders
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-8">
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner.logo}
              alt={partner.name}
              width={140}
              height={50}
              className="object-contain"
              data-ai-hint="company logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
