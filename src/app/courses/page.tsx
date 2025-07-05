import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, FileText, Award, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses | Scalezix.Academy',
  description: 'Explore our range of AI courses designed for aspiring tech professionals.',
};

const programs = [
  {
    name: 'Introduction to Machine Learning',
    description: 'A quick, intensive program to build a foundational understanding of ML. Perfect for beginners.',
  },
  {
    name: 'Advanced Deep Learning',
    description: 'Dive deeper into neural networks and build more complex AI applications.',
  },
  {
    name: 'Natural Language Processing',
    description: 'A comprehensive program covering advanced topics in language models and text analysis.',
  },
  {
    name: 'Computer Vision Fundamentals',
    description: 'An in-depth experience focusing on image recognition and analysis.',
  },
  {
    name: 'AI for Business Leaders',
    description: 'The ultimate experience for mastering AI strategy and implementation in business.',
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-secondary py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our AI Courses</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a variety of programs to fit your learning pace and career aspirations. Every program includes mentorship and a certificate.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {programs.map((program, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                  {program.name}
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
                    <span>Expert-Led Coursework</span>
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
