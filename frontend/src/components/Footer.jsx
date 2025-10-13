import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const openingHours = [
    { day: 'Lundi', hours: '09:45 - 19:00' },
    { day: 'Mardi', hours: '09:45 - 19:00' },
    { day: 'Mercredi', hours: '09:45 - 19:00' },
    { day: 'Jeudi', hours: '09:45 - 19:00' },
    { day: 'Vendredi', hours: '09:45 - 19:00' },
    { day: 'Samedi', hours: '10:30 - 19:00' },
    { day: 'Dimanche', hours: 'Fermé' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_d2a7eab4-9d0e-4e8c-953b-0296df2a175a/artifacts/cmxtow5l_Design%20sans%20titre%20%282%29.png"
              alt="ReStore Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">
              Réparation, reconditionnement et vente de téléphones, ordinateurs, tablettes et consoles.
            </p>
            <div className="space-y-3">
              <a
                href="tel:0782830830"
                className="flex items-center text-gray-300 hover:text-[#95F4D7] transition-colors duration-200"
              >
                <Phone size={18} className="mr-3" />
                07 82 83 08 30
              </a>
              <a
                href="mailto:contact@restore-phone.com"
                className="flex items-center text-gray-300 hover:text-[#95F4D7] transition-colors duration-200"
              >
                <Mail size={18} className="mr-3" />
                contact@restore-phone.com
              </a>
              <a
                href="https://maps.google.com/?q=10+Rue+de+Paris,+03200+Vichy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-[#95F4D7] transition-colors duration-200"
              >
                <MapPin size={18} className="mr-3" />
                10 Rue de Paris, 03200 Vichy
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Clock size={22} className="mr-2 text-[#95F4D7]" />
              Horaires d'ouverture
            </h3>
            <div className="space-y-2">
              {openingHours.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className={item.hours === 'Fermé' ? 'text-gray-500' : 'text-gray-300'}>
                    {item.day}
                  </span>
                  <span className={item.hours === 'Fermé' ? 'text-gray-500' : 'text-gray-400'}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/restore_vichy/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-[#0097b2] transition-all duration-300 hover:scale-110"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/people/ReStore_vichy/61551556002725/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-[#0097b2] transition-all duration-300 hover:scale-110"
              >
                <Facebook size={24} />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-gray-400">Liens utiles</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-gray-400 hover:text-[#95F4D7] transition-colors duration-200">
                  Mentions légales
                </a>
                <a href="#" className="block text-gray-400 hover:text-[#95F4D7] transition-colors duration-200">
                  Politique de confidentialité
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ReStore. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;