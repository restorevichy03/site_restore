import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const PolitiqueConfidentialite = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold">Politique de confidentialité</h1>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-700 text-lg">La société ReStore attache une importance particulière à la protection des données personnelles des utilisateurs de son site.</p>
          </section>

          {/* Données collectées */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Données collectées</h2>
            <p className="text-gray-700 mb-3">Les données personnelles collectées via le formulaire de contact sont :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>nom</li>
              <li>adresse e-mail</li>
              <li>numéro de téléphone</li>
              <li>message</li>
            </ul>
            <p className="text-gray-700 mt-4">Aucune autre donnée personnelle n'est collectée.</p>
          </section>

          {/* Finalité du traitement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Finalité du traitement</h2>
            <p className="text-gray-700 mb-4">Les données sont collectées exclusivement afin de répondre aux demandes envoyées via le formulaire de contact.</p>
            <p className="text-gray-700">Elles ne sont en aucun cas utilisées à des fins commerciales, publicitaires ou statistiques.</p>
          </section>

          {/* Durée de conservation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Durée de conservation</h2>
            <p className="text-gray-700">Les données sont conservées pour une durée maximale de 6 mois à compter de leur réception, puis supprimées.</p>
          </section>

          {/* Destinataires des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Destinataires des données</h2>
            <p className="text-gray-700 mb-4">Les données collectées sont strictement destinées à ReStore.</p>
            <p className="text-gray-700">Elles ne sont ni vendues, ni cédées, ni transmises à des tiers.</p>
          </section>

          {/* Sécurité des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sécurité des données</h2>
            <p className="text-gray-700">ReStore met en œuvre des mesures techniques et organisationnelles raisonnables afin de garantir la sécurité et la confidentialité des données personnelles.</p>
          </section>

          {/* Droits des utilisateurs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Droits des utilisateurs</h2>
            <p className="text-gray-700 mb-3">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>droit d'accès</li>
              <li>droit de rectification</li>
              <li>droit de suppression</li>
            </ul>
            <p className="text-gray-700 mt-6 mb-2">Pour exercer ces droits, vous pouvez contacter ReStore à l'adresse suivante :</p>
            <p className="text-gray-700">
              <a href="mailto:contact@restore-phone.com" className="text-[#0097b2] hover:underline font-semibold">
                contact@restore-phone.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;