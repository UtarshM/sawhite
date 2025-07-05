import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Scalezix.Academy',
  description: 'Frequently Asked Questions about Scalezix.Academy.',
};

const faqs = [
  {
    question: 'What kind of AI programs do you offer?',
    answer: 'We offer a wide range of programs from beginner to advanced levels, covering topics like Machine Learning, Deep Learning, Natural Language Processing, and more.',
  },
  {
    question: 'Are the courses online or in-person?',
    answer: 'Currently, all our courses are conducted online, allowing you to learn from anywhere in the world.',
  },
  {
    question: 'Do I get a certificate upon completion?',
    answer: 'Yes, all students who successfully complete our programs receive a verified certificate from Scalezix.Academy.',
  },
  {
    question: 'Is there any prerequisite for enrolling in the beginner courses?',
    answer: 'No prior experience in AI is required for our beginner-level courses. A basic understanding of programming concepts is beneficial but not mandatory.',
  },
];

export default function FaqPage() {
  return (
    <div className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our academy and programs.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
