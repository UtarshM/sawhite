import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, FileText, Award } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internship Programs | ScaleZix Academy',
  description: 'Explore our range of internship programs designed for aspiring tech professionals.',
};

const programs = [
  {
    duration: '15 Days',
    description: 'A quick, intensive program to build a foundational project. Perfect for beginners.',
  },
  {
    duration: '30 Days',
    description: 'Dive deeper into a specific technology stack and build a more complex application.',
  },
  {
    duration: '45 Days',
    description: 'A comprehensive program covering advanced topics and a feature-rich project.',
  },
  {
    duration: '3 Months',
    description: 'An in-depth internship experience equivalent to a junior developer role, focusing on a major project.',
  },
  {
    duration: '6 Months',
    description: 'The ultimate internship experience for mastering a domain and building a production-ready system.',
  },
];

export default function InternshipsPage() {
  return (
    <div className="bg-secondary py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Internship Programs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a variety of programs to fit your learning pace and career aspirations. Every program includes mentorship, a certificate, and full project documentation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {programs.map((program, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  {program.duration} Program
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-muted-foreground">{program.description}</p>
                <div className="space-y-2 pt-2">
                   <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-primary" />
                    <span>Completion Certificate</span>
                   </div>
                   <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Full Project Documentation</span>
                   </div>
                </div>
              </CardContent>
              <CardFooter>
                 <Button asChild className="w-full">
                  <Link href="/contact">Enroll Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
