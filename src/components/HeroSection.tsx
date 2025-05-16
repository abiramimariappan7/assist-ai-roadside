
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-brand-cream to-brand-cream/90 pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div>
              <span className="bg-brand-blue/10 text-brand-blue px-4 py-1 rounded-full text-sm font-medium">
                Roadside Assistance Reimagined
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue">
              Your Vehicle,<br />
              <span className="text-brand-blue/80">Our Mechanics</span>,<br />
              Anytime, Anywhere
            </h1>
            <p className="text-lg text-brand-blue/70 max-w-lg">
              Connect with verified mechanics for fast, transparent roadside assistance with real-time tracking, upfront pricing, and secure payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-brand-blue hover:bg-brand-blue/90 text-brand-cream px-8 py-6 text-lg">
                Download FixMyRide
              </Button>
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-cream px-8 py-6 text-lg">
                Join as Mechanic
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2 text-brand-blue/70">
                <Clock size={20} className="text-brand-blue" />
                <span>24/7 Service</span>
              </div>
              <div className="flex items-center gap-2 text-brand-blue/70">
                <MessageSquare size={20} className="text-brand-blue" />
                <span>In-app Chat</span>
              </div>
              <div className="flex items-center gap-2 text-brand-blue/70">
                <Phone size={20} className="text-brand-blue" />
                <span>Live Support</span>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in animate-delay-200">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80"
                alt="Mechanic helping car owner" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-cream p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-blue">Mechanic Found!</p>
                  <p className="text-xs text-brand-blue/60">ETA: 12 minutes</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 md:-left-10 bg-brand-blue rounded-full h-24 w-24 flex items-center justify-center shadow-lg z-20">
              <div className="text-center text-brand-cream">
                <div className="text-xl font-bold">4.9</div>
                <div className="text-xs">★★★★★</div>
                <div className="text-xs font-medium">Rating</div>
              </div>
            </div>
            <div className="absolute -z-10 -top-6 -left-6 bg-brand-blue/20 rounded-full h-64 w-64 opacity-50 blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -right-10 bg-brand-blue rounded-full h-48 w-48 opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
