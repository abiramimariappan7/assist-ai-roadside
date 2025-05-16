
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-brand-cream">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-3xl p-8 md:p-16 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute -bottom-10 -right-10 bg-brand-cream/80 rounded-full h-64 w-64" />
            <div className="absolute -top-10 -left-10 bg-brand-cream/80 rounded-full h-48 w-48" />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-cream mb-6">
                Ready to Experience Roadside Assistance, Reimagined?
              </h2>
              <p className="text-brand-cream/90 text-lg mb-8">
                Join thousands of satisfied vehicle owners and mechanics who are already using FixMyRide to make roadside assistance faster, more transparent, and hassle-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-cream hover:bg-brand-cream/90 text-brand-blue hover:text-brand-blue px-8 py-6 text-lg">
                  Download App
                </Button>
                <Button variant="outline" className="border-brand-cream text-brand-cream hover:bg-brand-cream/20 px-8 py-6 text-lg font-medium">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="bg-brand-cream/20 backdrop-blur rounded-xl p-6 hover:bg-brand-cream/30 transition-colors">
                <h3 className="text-brand-cream font-semibold text-lg mb-2">For Vehicle Owners</h3>
                <p className="text-brand-cream/80 mb-4">Get instant access to qualified mechanics wherever and whenever you need them.</p>
                <div className="flex items-center text-brand-cream">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>30-day satisfaction guarantee</span>
                </div>
              </div>

              <div className="bg-brand-cream/20 backdrop-blur rounded-xl p-6 hover:bg-brand-cream/30 transition-colors">
                <h3 className="text-brand-cream font-semibold text-lg mb-2">For Mechanics</h3>
                <p className="text-brand-cream/80 mb-4">Join our platform to find consistent work and grow your business.</p>
                <div className="flex items-center text-brand-cream">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Weekly direct deposits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
