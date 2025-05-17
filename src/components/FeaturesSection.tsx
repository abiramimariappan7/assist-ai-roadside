
import React from 'react';
import { MapPin, Clock, DollarSign, MessageSquare, Users, Navigation } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const features = [
  {
    icon: <MapPin className="h-6 w-6 text-brand-blue" />,
    title: "Real-time Mechanic Matching",
    description: "AI-powered system connects you with the nearest qualified mechanic for your specific vehicle issue."
  },
  {
    icon: <Navigation className="h-6 w-6 text-brand-blue" />,
    title: "GPS Tracking",
    description: "Track your mechanic's location in real-time so you know exactly when help will arrive."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-brand-blue" />,
    title: "Upfront Pricing",
    description: "Get transparent cost estimates before confirming service, with no hidden fees or surprises."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-brand-blue" />,
    title: "In-app Chat",
    description: "Communicate directly with your mechanic to share details about your vehicle's problem."
  },
  {
    icon: <Users className="h-6 w-6 text-brand-blue" />,
    title: "Verified Mechanics",
    description: "All mechanics are thoroughly vetted for experience, qualifications, and background checks."
  },
  {
    icon: <Clock className="h-6 w-6 text-brand-blue" />,
    title: "Service History",
    description: "Access complete records of your past services, making vehicle maintenance tracking effortless."
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-brand-cream">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Powerful Features for Vehicle Owners & Mechanics
          </h2>
          <p className="text-lg text-brand-blue/70">
            Our app connects vehicle owners with qualified mechanics through innovative technology for a seamless roadside assistance experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow hover:border-brand-blue/20 group"
            >
              <div className="bg-brand-blue/10 rounded-lg p-3 inline-block mb-5 group-hover:bg-brand-blue/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-3">{feature.title}</h3>
              <p className="text-brand-blue/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-blue to-brand-blue/80 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-cream mb-4">AI-Powered Matching System</h3>
              <p className="text-brand-cream/90 mb-6">
                Our advanced algorithm finds the perfect mechanic for your specific vehicle and issue, factoring in expertise, ratings, distance, and current traffic conditions.
              </p>
              <ul className="space-y-3">
                {[
                  "Fastest response times in the industry",
                  "Specialized mechanic matching for your vehicle make",
                  "Considers mechanic expertise with your specific issue",
                  "Smart traffic routing for optimal arrival times"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-brand-cream">
                    <svg className="h-5 w-5 mr-2 text-brand-cream/80" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <AspectRatio ratio={3/2} className="w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1486684228390-fbd351bb4711?auto=format&fit=crop&w=600" 
                    alt="Mechanic working on engine" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-brand-cream p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Mechanic portrait" 
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white h-4 w-4 rounded-full"></span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-blue">John M.</p>
                    <div className="flex">
                      <span className="text-xs text-yellow-500">★★★★★</span>
                      <span className="text-xs text-brand-blue/60 ml-1">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
