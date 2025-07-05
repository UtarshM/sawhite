import Link from 'next/link';
import { Button } from './ui/button';
import { Logo } from './logo';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center gap-4">
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[300px]">
                  <div className="flex flex-col h-full">
                    <div className="p-6">
                      <Logo />
                    </div>
                    <nav className="flex flex-col gap-4 px-6">
                      {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground hover:text-primary">
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden md:flex">
              <Logo />
            </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-auto">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
