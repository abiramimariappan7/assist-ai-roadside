
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I expect a mechanic to arrive?",
    answer: "In most urban and suburban areas, our average response time is under 30 minutes. The app will provide you with an accurate ETA based on the mechanic's location and current traffic conditions, so you'll always know exactly when help will arrive."
  },
  {
    question: "How are your mechanics verified?",
    answer: "All mechanics undergo a thorough verification process that includes professional certification checks, experience validation, background checks, and an interview process. We also maintain a rating system where only mechanics maintaining a high satisfaction score remain active on our platform."
  },
  {
    question: "What types of vehicle issues can be fixed?",
    answer: "Our mechanics can handle a wide range of issues including flat tires, battery problems, engine troubleshooting, overheating, fluid leaks, and minor repairs. For complex problems requiring specialized equipment, our mechanics can arrange towing to an appropriate facility."
  },
  {
    question: "How does pricing work?",
    answer: "Pricing is transparent and provided upfront before you confirm service. The cost is calculated based on the type of service, parts required, time of day, and location. There are no hidden fees, and you'll only pay for the services you approve."
  },
  {
    question: "Is there a subscription fee to use the app?",
    answer: "No, the app is free to download and use. You only pay for the services you request and receive."
  },
  {
    question: "How do I become a mechanic on the platform?",
    answer: "You can apply through the app or website by selecting 'Join as Mechanic.' You'll need to provide proof of your mechanical qualifications, experience, insurance, and undergo our verification process. Once approved, you can set your availability and start receiving service requests."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-brand-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium text-brand-dark py-5 hover:text-brand-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <a 
            href="mailto:support@mechconnect.com" 
            className="inline-flex items-center text-brand-blue hover:text-brand-blue/90 font-medium"
          >
            Contact Support
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
