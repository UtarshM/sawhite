import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Scalezix.Academy',
  description: 'Get in touch with Scalezix.Academy for any inquiries about our internship programs.',
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Fill out the form below or reach out to us through our contact details.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-secondary p-8 rounded-lg">
            <h2 className="font-headline text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">contact@scalezix.academy</p>
                  <a href="mailto:contact@scalezix.academy" className="text-primary font-semibold hover:underline">Send an email</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <a href="tel:+15551234567" className="text-primary font-semibold hover:underline">Call us</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office</h3>
                  <p className="text-muted-foreground">123 Tech Avenue, Silicon Valley, CA 94043</p>
                  <a href="#" className="text-primary font-semibold hover:underline">Get directions</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary p-8 rounded-lg">
             <h2 className="font-headline text-2xl font-bold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
