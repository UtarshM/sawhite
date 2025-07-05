import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, BrainCircuit } from 'lucide-react';

const courses = [
  { name: 'Intro to Machine Learning' },
  { name: 'Advanced Deep Learning' },
  { name: 'Natural Language Processing' },
];

export function InternshipsPreviewSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a glimpse of our most popular AI courses designed by industry experts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                  {course.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>
                  A comprehensive course covering fundamentals and advanced topics. Includes hands-on projects and expert mentorship.
                </CardDescription>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0 font-semibold">
                  <Link href="/courses">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/courses">See All Courses <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
