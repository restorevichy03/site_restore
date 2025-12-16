import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', to: 'hero' },
    { name: 'Services', to: 'services' },
    { name: 'Pourquoi ReStore', to: 'why-restore' },
    { name: 'Envoyez votre appareil', to: 'envoi', external: true, url: '/envoi-appareil' },
    { name: 'Devis en ligne', to: 'devis', external: true, url: 'https://fr.phonilab.app/generate-ticket-steps/restore-phone-03' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
            <img
              src="https://customer-assets.emergentagent.com/job_d2a7eab4-9d0e-4e8c-953b-0296df2a175a/artifacts/k9nfafgu_ReSt%20Re%20-%202.png"
              alt="ReStore Logo"
              className="h-[140px] w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 font-medium hover:text-[#0097b2] cursor-pointer transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0097b2] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-700 font-medium hover:text-[#0097b2] cursor-pointer transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0097b2] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-[#0097b2] hover:bg-[#007a8f] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
              onClick={() => window.location.href = 'tel:0782830830'}
            >
              07 82 83 08 30
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-[#0097b2] transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 font-medium hover:text-[#0097b2] cursor-pointer transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-700 font-medium hover:text-[#0097b2] cursor-pointer transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button
              className="bg-[#0097b2] hover:bg-[#007a8f] text-white w-full py-3 rounded-lg font-medium transition-all duration-300"
              onClick={() => {
                window.location.href = 'tel:0782830830';
                setMobileMenuOpen(false);
              }}
            >
              07 82 83 08 30
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;