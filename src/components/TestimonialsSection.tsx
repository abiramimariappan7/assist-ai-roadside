
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "I got a flat tire on the highway at night. Within 15 minutes of using the app, a mechanic arrived and fixed it. The tracking feature gave me peace of mind knowing exactly when help would arrive.",
    name: "Sarah Johnson",
    title: "Vehicle Owner",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    quote: "As a mechanic, this app has transformed my business. I'm getting steady jobs in my area, and the upfront payment system means I never have to worry about invoicing or chasing payments.",
    name: "Michael Rodriguez",
    title: "Certified Mechanic",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    quote: "The transparent pricing saved me from getting ripped off. I could see the estimated cost before confirming, and what I paid was exactly what was quoted. No hidden fees or surprises.",
    name: "Emily Chen",
    title: "Vehicle Owner",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-brand-cream">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-brand-blue/70">
            Trusted by thousands of vehicle owners and mechanics across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-6 flex-grow">
                  <div className="flex text-yellow-500 mb-4">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-brand-blue/70 italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center mt-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-brand-blue">{testimonial.name}</h4>
                    <p className="text-sm text-brand-blue/60">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-blue to-brand-blue/80 rounded-2xl p-8 md:p-12 shadow-lg text-brand-cream text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Network</h3>
            <p className="mb-8 text-brand-cream/90">
              Whether you're a vehicle owner seeking reliable service or a mechanic looking to grow your business, MechConnect is here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-brand-cream backdrop-blur rounded-xl p-6 text-center flex-1">
                <div className="text-4xl font-bold text-brand-blue mb-2">25,000+</div>
                <p className="text-brand-blue/70">Vehicle Owners</p>
              </div>
              <div className="bg-brand-cream backdrop-blur rounded-xl p-6 text-center flex-1">
                <div className="text-4xl font-bold text-brand-blue mb-2">3,500+</div>
                <p className="text-brand-blue/70">Certified Mechanics</p>
              </div>
              <div className="bg-brand-cream backdrop-blur rounded-xl p-6 text-center flex-1">
                <div className="text-4xl font-bold text-brand-blue mb-2">98%</div>
                <p className="text-brand-blue/70">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
