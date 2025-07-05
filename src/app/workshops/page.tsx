import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, UserCheck, MonitorPlay } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workshops | Scalezix.Academy',
  description: 'Join our hands-on AI workshops.',
};

const workshops = [
  {
    title: "AI for Content Creators",
    description: "Learn how to leverage generative AI to create compelling content, from blog posts to social media campaigns.",
    date: "August 15, 2024",
    instructor: "Jane Doe"
  },
  {
    title: "Building Your First AI Agent",
    description: "A hands-on workshop where you'll build and deploy a simple AI agent using modern tools and frameworks.",
    date: "September 5, 2024",
    instructor: "John Smith"
  },
  {
    title: "No-Code AI Automation for Small Business",
    description: "Discover how to automate repetitive tasks and streamline your business operations without writing a single line of code.",
    date: "September 22, 2024",
    instructor: "Alex Ray"
  }
]

export default function WorkshopsPage() {
  return (
    <div className="bg-secondary py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">Hands-On AI Workshops</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our workshops are practical, project-based sessions designed to give you tangible skills in a short amount of time.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {workshops.map((workshop, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <MonitorPlay className="h-6 w-6 text-primary" />
                  {workshop.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-muted-foreground">{workshop.description}</p>
                <div className="space-y-2 pt-2">
                   <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{workshop.date}</span>
                   </div>
                   <div className="flex items-center gap-2 text-sm">
                    <UserCheck className="h-4 w-4 text-primary" />
                    <span>Led by {workshop.instructor}</span>
                   </div>
                </div>
              </CardContent>
              <CardFooter>
                 <Button asChild className="w-full">
                  <Link href="/contact">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
