import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Clock } from 'lucide-react';

const programs = [
  { duration: '15 Days' },
  { duration: '30 Days' },
  { duration: '3 Months' },
];

export function InternshipsPreviewSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Internship Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the program that fits your schedule and career goals. All programs come with certificates and project documentation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  {program.duration} Program
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>
                  An intensive program focused on building a complete project from scratch. Includes certificate and documentation.
                </CardDescription>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0 font-semibold">
                  <Link href="/internships">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/internships">See All Programs <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
