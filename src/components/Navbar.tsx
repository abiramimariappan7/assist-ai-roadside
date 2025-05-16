
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-brand-dark">
              Mech<span className="text-brand-blue">Connect</span>
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-brand-dark hover:text-brand-blue transition-colors">Features</a>
          <a href="#how-it-works" className="text-brand-dark hover:text-brand-blue transition-colors">How It Works</a>
          <a href="#testimonials" className="text-brand-dark hover:text-brand-blue transition-colors">Testimonials</a>
          <a href="#faq" className="text-brand-dark hover:text-brand-blue transition-colors">FAQ</a>
          <div className="flex space-x-3">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Join as Mechanic
            </Button>
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
              Download App
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-dark focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-brand-dark hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-brand-dark hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
            <a href="#testimonials" className="text-brand-dark hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <a href="#faq" className="text-brand-dark hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full">
              Join as Mechanic
            </Button>
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white w-full">
              Download App
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
