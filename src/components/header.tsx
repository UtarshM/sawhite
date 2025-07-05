import Link from 'next/link';
import { Button } from './ui/button';
import { Logo } from './logo';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const programLinks = [
    { href: '/courses', label: 'Courses' },
    { href: '/workshops', label: 'Workshops' },
    { href: '/internships', label: 'Internships' },
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
                        <Link href="/" className="text-lg font-medium text-foreground hover:text-primary">
                          Home
                        </Link>
                        
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="programs" className="border-b-0">
                            <AccordionTrigger className="p-0 text-lg font-medium text-foreground hover:text-primary hover:no-underline">
                                Programs
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pl-4">
                                <nav className="flex flex-col gap-2">
                                {programLinks.map((link) => (
                                    <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-base font-medium text-muted-foreground hover:text-primary"
                                    >
                                    {link.label}
                                    </Link>
                                ))}
                                </nav>
                            </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                      
                        <Link href="/gallery" className="text-lg font-medium text-foreground hover:text-primary">
                          Gallery
                        </Link>
                        <Link href="/faq" className="text-lg font-medium text-foreground hover:text-primary">
                          FAQ
                        </Link>
                        <Link href="/contact" className="text-lg font-medium text-foreground hover:text-primary">
                          Contact
                        </Link>
                    </nav>
                     <div className="mt-auto p-6">
                      <Button asChild variant="highlight" className="w-full">
                        <Link href="/contact">Registration</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden md:flex">
              <Logo />
            </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-auto">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 font-medium transition-colors hover:text-primary">
                Programs <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                {programLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/gallery" className="transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="/faq" className="transition-colors hover:text-primary">
              FAQ
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary">
              Contact
            </Link>

            <Button asChild variant="highlight">
                <Link href="/contact">Registration</Link>
            </Button>
        </nav>
      </div>
    </header>
  );
}