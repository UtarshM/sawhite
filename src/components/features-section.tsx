import { Award, FileText, Briefcase, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

const features = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Verified Certificates',
    description: 'Receive a certificate upon successful completion of your internship to showcase your skills.',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Project Documentation',
    description: 'Get comprehensive documentation for all your projects, a valuable asset for your portfolio.',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Hands-On Experience',
    description: 'Work on real-world projects and gain practical experience that employers look for.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Expert Mentorship',
    description: 'Learn from industry experts who will guide you through your internship journey.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12 animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">What You Will Get</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our programs are designed to provide you with everything you need to succeed in the tech industry.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-in fade-in-0 slide-in-from-bottom-10 duration-500 delay-300">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-2 sm:p-6 transition-all hover:shadow-md hover:-translate-y-1">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="font-headline mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
