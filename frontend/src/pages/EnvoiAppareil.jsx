import React, { useState } from 'react';
import { Package, MapPin, Clock, Shield, CheckCircle, Truck, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select } from '../components/ui/select';
import { toast } from 'sonner';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const EnvoiAppareil = () => {
  const [formData, setFormData] = useState({
    deviceType: '',
    brand: '',
    model: '',
    problem: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    additionalInfo: '',
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const requiredFields = ['deviceType', 'brand', 'model', 'problem', 'name', 'email', 'phone', 'address', 'postalCode', 'city'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Veuillez entrer une adresse email valide');
      return;
    }

    try {
      const response = await axios.post(`${API}/envoi-appareil`, formData);
      
      if (response.status === 200) {
        toast.success('Votre demande d\'envoi a été enregistrée avec succès ! Nous vous contacterons rapidement.');
        setStep(3); // Success step
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la demande:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.');
    }
  };

  const deviceTypes = [
    'Téléphone',
    'Ordinateur portable',
    'Ordinateur fixe',
    'Tablette',
    'Console de jeux',
    'Drone',
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-[#D5F7FF]/20 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 pt-8">
            <div className="inline-flex items-center bg-[#D5F7FF] px-4 py-2 rounded-full text-[#0097b2] font-medium text-sm mb-4">
              <Package size={16} className="mr-2" />
              Service d'envoi par courrier
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Envoyez-nous votre appareil
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous ne pouvez pas vous déplacer ? Envoyez-nous votre appareil par courrier et nous nous occupons de tout !
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-[#0097b2] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Remplissez le formulaire</h3>
              <p className="text-sm text-gray-600">Décrivez votre appareil et le problème</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-[#0097b2] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. Envoyez votre appareil</h3>
              <p className="text-sm text-gray-600">Emballez et envoyez à notre adresse</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-[#0097b2] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. Nous réparons</h3>
              <p className="text-sm text-gray-600">Diagnostic et réparation expert</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-[#0097b2] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">4. Retour rapide</h3>
              <p className="text-sm text-gray-600">Votre appareil réparé vous est renvoyé</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {step === 1 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations sur l'appareil</h2>
                  <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type d'appareil *
                      </label>
                      <select
                        name="deviceType"
                        value={formData.deviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0097b2] focus:border-transparent"
                        required
                      >
                        <option value="">Sélectionnez un type</option>
                        {deviceTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Marque *
                      </label>
                      <Input
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        placeholder="Ex: Apple, Samsung, HP..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Modèle *
                      </label>
                      <Input
                        name="model"
                        value={formData.model}
                        onChange={handleInputChange}
                        placeholder="Ex: iPhone 13, Galaxy S21..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description du problème *
                      </label>
                      <Textarea
                        name="problem"
                        value={formData.problem}
                        onChange={handleInputChange}
                        placeholder="Décrivez en détail le problème rencontré..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#0097b2] hover:bg-[#007a8f] text-white py-6 text-lg rounded-xl font-semibold"
                    >
                      Continuer
                    </Button>
                  </form>
                </>
              )}

              {step === 2 && (
                <>
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center text-[#0097b2] hover:underline mb-6"
                  >
                    <ArrowLeft size={20} className="mr-2" />
                    Retour
                  </button>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Vos coordonnées</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jean.dupont@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="06 12 34 56 78"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse de retour *
                      </label>
                      <Input
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="10 rue de la République"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Code postal *
                        </label>
                        <Input
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          placeholder="03200"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ville *
                        </label>
                        <Input
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Vichy"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Informations complémentaires
                      </label>
                      <Textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        placeholder="Code d'accès, précisions..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#0097b2] hover:bg-[#007a8f] text-white py-6 text-lg rounded-xl font-semibold"
                    >
                      Envoyer la demande
                    </Button>
                  </form>
                </>
              )}

              {step === 3 && (
                <div className="text-center py-8">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Demande envoyée !</h2>
                  <p className="text-gray-600 mb-8">
                    Nous avons bien reçu votre demande. Vous allez recevoir un email de confirmation avec toutes les instructions d'envoi.
                  </p>
                  <Link to="/">
                    <Button className="bg-[#0097b2] hover:bg-[#007a8f] text-white px-8 py-3 rounded-lg">
                      Retour à l'accueil
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Information Panel */}
            <div className="space-y-6">
              {/* Adresse d'envoi */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-4">
                  <MapPin size={24} className="text-[#0097b2] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Adresse d'envoi</h3>
                </div>
                <div className="bg-[#D5F7FF]/30 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">ReStore</p>
                  <p className="text-gray-700">10 rue de Paris</p>
                  <p className="text-gray-700">03200 Vichy</p>
                  <p className="text-gray-700">France</p>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-4">
                  <Package size={24} className="text-[#0097b2] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Instructions d'emballage</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Emballez soigneusement votre appareil dans un carton rembourré</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Retirez carte SIM et carte mémoire si applicable</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Notez votre code d'accès si besoin pour les tests</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Conservez le numéro de suivi de votre envoi</span>
                  </li>
                </ul>
              </div>

              {/* Délais */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-4">
                  <Clock size={24} className="text-[#0097b2] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Délais estimés</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Diagnostic :</strong> 24-48h après réception</p>
                  <p><strong>Réparation :</strong> 2 jours</p>
                  <p><strong>Retour :</strong> 2-3 jours par Colissimo</p>
                </div>
              </div>

              {/* Garantie */}
              <div className="bg-gradient-to-br from-[#0097b2] to-[#007a8f] rounded-2xl shadow-xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <Shield size={24} className="mr-3" />
                  <h3 className="text-xl font-bold">Notre garantie</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Diagnostic gratuit</li>
                  <li>✓ Devis avant réparation</li>
                  <li>✓ Pièces de qualité premium</li>
                  <li>✓ Garantie 1 an</li>
                  <li>✓ Assurance colis recommandée</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default EnvoiAppareil;
