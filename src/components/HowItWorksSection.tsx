
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState("vehicle-owner");

  const vehicleOwnerSteps = [
    {
      number: "01",
      title: "Download & Register",
      description: "Download the MechConnect app from the App Store or Google Play and create your account in seconds.",
      image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?auto=format&fit=crop&w=600"
    },
    {
      number: "02",
      title: "Request Service",
      description: "Describe your vehicle issue and request immediate assistance with just a few taps.",
      image: "https://images.unsplash.com/photo-1560253675-b8e8c4565865?auto=format&fit=crop&w=600"
    },
    {
      number: "03",
      title: "Get Matched",
      description: "Our AI instantly matches you with the nearest qualified mechanic for your specific problem.",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=600"
    },
    {
      number: "04",
      title: "Track & Pay",
      description: "Track your mechanic's arrival in real-time and pay securely through the app once service is complete.",
      image: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=600"
    }
  ];

  const mechanicSteps = [
    {
      number: "01",
      title: "Apply & Get Verified",
      description: "Complete our application process and verification checks to join our network of trusted mechanics.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600"
    },
    {
      number: "02",
      title: "Set Your Schedule",
      description: "Define when you're available for jobs and the service areas you cover.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600"
    },
    {
      number: "03",
      title: "Receive Job Alerts",
      description: "Get instant notifications about nearby service requests matching your skills and vehicle specialties.",
      image: "https://images.unsplash.com/photo-1586892478025-2b5472316501?auto=format&fit=crop&w=600"
    },
    {
      number: "04",
      title: "Complete Jobs & Earn",
      description: "Provide quality service, build your reputation, and receive secure payments directly to your account.",
      image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=600"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-brand-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            How MechConnect Works
          </h2>
          <p className="text-lg text-gray-600">
            Our streamlined process makes it easy for both vehicle owners and mechanics to connect and solve problems fast.
          </p>
        </div>

        <Tabs defaultValue="vehicle-owner" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-2 h-14 items-stretch bg-gray-100 w-full max-w-md">
              <TabsTrigger 
                value="vehicle-owner" 
                className={`text-base rounded-l-lg ${activeTab === 'vehicle-owner' ? 'bg-brand-blue text-white data-[state=active]:bg-brand-blue data-[state=active]:text-white' : ''}`}
              >
                For Vehicle Owners
              </TabsTrigger>
              <TabsTrigger 
                value="mechanic" 
                className={`text-base rounded-r-lg ${activeTab === 'mechanic' ? 'bg-brand-blue text-white data-[state=active]:bg-brand-blue data-[state=active]:text-white' : ''}`}
              >
                For Mechanics
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="vehicle-owner" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vehicleOwnerSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="relative h-48">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-brand-blue text-white text-lg font-bold h-10 w-10 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-dark mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg">
                Download App
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="mechanic" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mechanicSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="relative h-48">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-brand-orange text-white text-lg font-bold h-10 w-10 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-dark mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white px-8 py-6 text-lg">
                Join as Mechanic
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorksSection;
