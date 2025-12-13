import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0097b2] to-[#007a8f] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Mentions légales</h1>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Éditeur du site */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Éditeur du site</h2>
            <p className="text-gray-700 mb-2"><strong>ReStore</strong></p>
            <p className="text-gray-700 mb-2">Société par Actions Simplifiée (SAS)</p>
            <p className="text-gray-700 mb-2">Siège social : 10 rue de Paris, 03200 Vichy, France</p>
            <p className="text-gray-700">Adresse e-mail : <a href="mailto:contact@restore-phone.com" className="text-[#0097b2] hover:underline">contact@restore-phone.com</a></p>
          </section>

          {/* Responsable de la publication */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsable de la publication</h2>
            <p className="text-gray-700">ReStore</p>
          </section>

          {/* Hébergement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement</h2>
            <p className="text-gray-700">Le site est hébergé sur les serveurs de la société ReStore, situés à Vichy (France).</p>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
            <p className="text-gray-700 mb-4">Les contenus présents sur ce site (textes, éléments graphiques, logos) sont la propriété exclusive de ReStore, sauf mention contraire.</p>
            <p className="text-gray-700 mb-4">Les images utilisées sur le site proviennent de banques d'images libres de droits ou de sources autorisant leur utilisation.</p>
            <p className="text-gray-700">Toute reproduction, représentation ou diffusion, même partielle, sans autorisation préalable est interdite.</p>
          </section>

          {/* Responsabilité */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsabilité</h2>
            <p className="text-gray-700">ReStore s'efforce de fournir des informations exactes et à jour. Toutefois, la société ne saurait être tenue responsable d'erreurs, d'omissions ou de l'indisponibilité temporaire du site.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;