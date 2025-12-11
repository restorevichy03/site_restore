import React, { useState } from 'react';
import { Smartphone, Monitor, Tablet, Gamepad2, Wrench, ShoppingBag, Recycle, Package, Award, Clock, Shield, Leaf, MapPin, Phone, Mail, FileText, Search, Plane } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation frontend
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Veuillez entrer une adresse email valide');
      return;
    }

    try {
      // Envoyer au backend
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.status === 200) {
        toast.success('Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.');
    }
  };

  const services = [
    {
      icon: Wrench,
      title: 'Réparation Express',
      description: 'Écran cassé, batterie défaillante, connecteur endommagé ? Nous réparons tous types d\'appareils rapidement.',
      image: 'https://images.unsplash.com/photo-1746005847013-13291f371f0f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxwaG9uZSUyMHJlcGFpciUyMHRlY2huaWNpYW58ZW58MHx8fHwxNzYwMzU4Mzc4fDA&ixlib=rb-4.1.0&q=85',
    },
    {
      icon: ShoppingBag,
      title: 'Reconditionnement & Vente',
      description: 'Appareils reconditionnés de qualité avec garantie. Performants et accessibles.',
      image: 'https://images.unsplash.com/photo-1604754742629-3e5728249d73?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpcnxlbnwwfHx8fDE3NjAzNTgzODR8MA&ixlib=rb-4.1.0&q=85',
    },
    {
      icon: Recycle,
      title: 'Rachat & Recyclage',
      description: 'Donnez une seconde vie à vos appareils. Nous rachetons et recyclons votre matériel.',
      image: 'https://images.unsplash.com/photo-1763729948735-df50fc3540df',
    },
    {
      icon: Package,
      title: 'Vente d\'Accessoires',
      description: 'Protection d\'écran hydrogel, coques, chargeurs, câbles, blocs secteur et bien plus pour protéger vos appareils.',
      image: 'https://images.unsplash.com/photo-1594731804139-d70328c07f4a',
    },
  ];

  const whyRestore = [
    {
      icon: Award,
      title: 'Pièces Premium',
      description: 'Nous utilisons uniquement des pièces de qualité supérieure avec garantie incluse.',
    },
    {
      icon: Clock,
      title: 'Intervention Rapide',
      description: 'Réparations express disponibles. La plupart des interventions en moins de 2 heures.',
    },
    {
      icon: Shield,
      title: 'Microsoudure Expert',
      description: 'Atelier de microsoudure à Saint-Étienne pour les réparations complexes et précises.',
    },
    {
      icon: Leaf,
      title: 'Engagement Écologique',
      description: 'Nous privilégions le réemploi et le recyclage pour un impact environnemental réduit.',
    },
  ];

  const devices = [
    { icon: Smartphone, name: 'Téléphones' },
    { icon: Monitor, name: 'Ordinateurs' },
    { icon: Tablet, name: 'Tablettes' },
    { icon: Gamepad2, name: 'Consoles' },
    { icon: Wrench, name: 'Drones' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-[#D5F7FF] px-4 py-2 rounded-full text-[#0097b2] font-medium text-sm">
                <Leaf size={16} className="mr-2" />
                Réparation Éco-responsable
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                ReStore
                <span className="block text-[#0097b2] mt-2">Réparation &<br />Reconditionnement</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Votre atelier de confiance à Vichy pour la réparation, le reconditionnement et la vente de téléphones, ordinateurs, tablettes et consoles de jeux.
              </p>

              {/* Device Icons */}
              <div className="flex flex-wrap gap-4">
                {devices.map((device, index) => {
                  const Icon = device.icon;
                  return (
                    <div key={index} className="flex items-center bg-white px-4 py-3 rounded-lg shadow-md border border-gray-100 hover:border-[#0097b2] transition-all duration-300 hover:shadow-lg">
                      <Icon size={24} className="text-[#0097b2] mr-2" />
                      <span className="text-sm font-medium text-gray-700">{device.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://fr.phonilab.app/generate-ticket-steps/restore-phone-03"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#0097b2] hover:bg-[#007a8f] text-white px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 w-full sm:w-auto">
                    Devis en ligne
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="border-2 border-[#0097b2] text-[#0097b2] hover:bg-[#D5F7FF] px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
                  onClick={() => window.location.href = 'tel:0782830830'}
                >
                  07 82 83 08 30
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1735875530804-d661ca2001da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHJlcGFpciUyMHRlY2huaWNpYW58ZW58MHx8fHwxNzYwMzU4Mzc4fDA&ixlib=rb-4.1.0&q=85"
                  alt="Technicien réparant un smartphone"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0097b2]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-[#D5F7FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos appareils électroniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-[#0097b2] p-3 rounded-xl shadow-lg">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tracking & Online Quote Section */}
      <section className="py-16 bg-gradient-to-br from-[#0097b2] to-[#007a8f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Devis en ligne */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-4 rounded-xl">
                  <FileText size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Devis en ligne gratuit</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Obtenez votre devis instantané en quelques clics. Choisissez votre appareil, décrivez le problème et recevez une estimation immédiate.
                  </p>
                  <a
                    href="https://fr.phonilab.app/generate-ticket-steps/restore-phone-03"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-white text-[#0097b2] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                      Faire un devis
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Suivi de réparation */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-4 rounded-xl">
                  <Search size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Suivre ma réparation</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Suivez l'état d'avancement de votre réparation en temps réel. Saisissez votre numéro de ticket pour consulter le statut.
                  </p>
                  <a
                    href="https://fr.phonilab.app/index.php?slug=restore-phone-03"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-white text-[#0097b2] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                      Suivre mon appareil
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ReStore Section */}
      <section id="why-restore" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi choisir ReStore ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'excellence au service de vos appareils
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyRestore.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-[#D5F7FF]/30 to-white rounded-2xl border border-[#95F4D7]/30 hover:border-[#0097b2] transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0097b2] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-[#D5F7FF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-600">
              Notre équipe est là pour vous répondre
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Jean Dupont"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="jean.dupont@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="06 12 34 56 78"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px]"
                    placeholder="Décrivez votre problème ou votre demande..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#0097b2] hover:bg-[#007a8f] text-white py-6 text-lg rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h3>
                <div className="space-y-4">
                  <a
                    href="https://maps.google.com/?q=10+Rue+de+Paris,+03200+Vichy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start group cursor-pointer"
                  >
                    <MapPin size={24} className="text-[#0097b2] mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-[#0097b2] transition-colors duration-200">Adresse</p>
                      <p className="text-gray-600">10 Rue de Paris<br />03200 Vichy</p>
                    </div>
                  </a>
                  <a href="tel:0782830830" className="flex items-start group cursor-pointer">
                    <Phone size={24} className="text-[#0097b2] mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-[#0097b2] transition-colors duration-200">Téléphone</p>
                      <p className="text-gray-600">07 82 83 08 30</p>
                    </div>
                  </a>
                  <a href="mailto:contact@restore-phone.com" className="flex items-start group cursor-pointer">
                    <Mail size={24} className="text-[#0097b2] mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-[#0097b2] transition-colors duration-200">Email</p>
                      <p className="text-gray-600">contact@restore-phone.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.234567890123!2d3.426944315671234!3d46.12777897911234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f178d5e6f1c123%3A0x1234567890abcdef!2s10%20Rue%20de%20Paris%2C%2003200%20Vichy!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ReStore Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;