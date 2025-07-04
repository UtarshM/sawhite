import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Web Development Intern',
    quote: 'The hands-on experience I gained was invaluable. The mentorship was top-notch and helped me land my first developer job!',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'SJ'
  },
  {
    name: 'Michael Chen',
    title: 'Data Science Intern',
    quote: 'A fantastic program! I learned so much and the project I built became the centerpiece of my portfolio.',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    title: 'UI/UX Design Intern',
    quote: 'I highly recommend ScaleZix. The curriculum is very practical and the certificate really boosted my resume.',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'ER'
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Loved by Students Worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our alumni have to say about their experience.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-2">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-highlight fill-highlight" />)}
                </div>
                <blockquote className="text-foreground mb-6 italic">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person" />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
