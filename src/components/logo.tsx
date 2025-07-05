import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Scalezix.Academy Home">
      <GraduationCap className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold font-headline text-foreground">Scalezix.Academy</span>
    </Link>
  );
}
