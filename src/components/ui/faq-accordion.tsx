'use client';

import * as React from 'react';
import { HelpCircle, MessageCircle, ChevronDown } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('rounded-2xl border border-blue-100 bg-white shadow-sm transition', className)}
    {...props}
  />
));
CustomAccordionItem.displayName = 'CustomAccordionItem';

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex flex-1 items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left',
        'bg-white transition-all hover:bg-blue-50/70',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        'data-[state=open]:shadow-md',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-accent">
          <HelpCircle className="h-5 w-5" />
        </div>
        <span className="text-base font-medium text-foreground tracking-wide">
          {children}
        </span>
      </div>
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-accent transition-transform group-data-[state=open]:rotate-180">
        <ChevronDown className="h-4 w-4" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = 'CustomAccordionTrigger';

const CustomAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden',
      'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className="mx-6 mb-5 mt-3 rounded-2xl border border-blue-100 bg-blue-50/60 px-5 py-4 text-sm leading-relaxed text-foreground">
      <div className="flex items-start gap-3">
        <span className="flex-1">{children}</span>
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-accent shadow-inner">
          <MessageCircle className="h-4 w-4" />
        </div>
      </div>
    </div>
  </AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = 'CustomAccordionContent';

export {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
};

const faqs = [
  {
    question: 'Do you offer revisions on designs?',
    answer:
      'Absolutely. Every package includes collaborative review rounds so your design evolves with your feedback until it feels right.',
  },
  {
    question: 'What tools do you use for project delivery?',
    answer:
      'Our teams work inside Autodesk Construction Cloud, Revit, and Primavera alongside field technology to keep every milestone coordinated and traceable.',
  },
  {
    question: 'Can you help with approvals and compliance?',
    answer:
      'Yes. We maintain a dedicated approvals cell that liaises with local authorities, prepares documentation, and accelerates permit timelines across Sri Lanka.',
  },
  {
    question: 'How do you onboard a new Buildora Engineers project?',
    answer:
      'We begin with a discovery sprint—clarifying objectives, site constraints, budget bands, and programme. From there, we co-author a delivery roadmap before mobilising teams.',
  },
  {
    question: 'What determines the investment for a build package?',
    answer:
      'Package fees scale with scope, specification, and delivery speed. After our initial consultation you receive a transparent cost model with optional enhancements.',
  },
];

export function AccordionComponent() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-accent md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mb-10 text-center text-sm text-muted-foreground md:text-base">
          Answers to the conversations we have most with new Buildora Engineers partners.
        </p>
        <CustomAccordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-5"
        >
          {faqs.map((faq, index) => (
            <CustomAccordionItem
              key={faq.question}
              value={`item-${index}`}
            >
              <CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
              <CustomAccordionContent>{faq.answer}</CustomAccordionContent>
            </CustomAccordionItem>
          ))}
        </CustomAccordion>
      </div>
    </section>
  );
}


