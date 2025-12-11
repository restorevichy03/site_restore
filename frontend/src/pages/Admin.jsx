import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Mail, Phone, Calendar, User, MessageSquare, Trash2, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${API}/contact`);
      setMessages(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors du chargement des messages:', error);
      toast.error('Impossible de charger les messages');
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return 'bg-green-500';
      case 'read':
        return 'bg-blue-500';
      case 'archived':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'new':
        return 'Nouveau';
      case 'read':
        return 'Lu';
      case 'archived':
        return 'Archivé';
      default:
        return status;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0097b2] mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Messages de Contact</h1>
          <p className="text-gray-600">Gérez les demandes de contact de vos clients</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Messages</p>
                <p className="text-3xl font-bold text-gray-900">{messages.length}</p>
              </div>
              <MessageSquare size={40} className="text-[#0097b2]" />
            </div>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Nouveaux</p>
                <p className="text-3xl font-bold text-green-600">
                  {messages.filter((m) => m.status === 'new').length}
                </p>
              </div>
              <Mail size={40} className="text-green-600" />
            </div>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Lus</p>
                <p className="text-3xl font-bold text-blue-600">
                  {messages.filter((m) => m.status === 'read').length}
                </p>
              </div>
              <Eye size={40} className="text-blue-600" />
            </div>
          </Card>
        </div>

        {/* Messages List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Liste des messages</h2>
          </div>

          {messages.length === 0 ? (
            <div className="p-12 text-center">
              <MessageSquare size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Aucun message pour le moment</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="p-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  onClick={() => setSelectedMessage(message)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-[#0097b2] p-2 rounded-full">
                        <User size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{message.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center">
                            <Mail size={14} className="mr-1" />
                            {message.email}
                          </span>
                          <span className="flex items-center">
                            <Phone size={14} className="mr-1" />
                            {message.phone}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={`${getStatusColor(message.status)} text-white`}>
                        {getStatusLabel(message.status)}
                      </Badge>
                      <span className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(message.timestamp)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 line-clamp-2">{message.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Message Detail Modal */}
        {selectedMessage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedMessage(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Détails du message</h2>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedMessage(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <User size={24} className="text-[#0097b2]" />
                  <div>
                    <p className="text-sm text-gray-600">Nom</p>
                    <p className="font-semibold text-gray-900">{selectedMessage.name}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Mail size={24} className="text-[#0097b2]" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      className="font-semibold text-[#0097b2] hover:underline"
                    >
                      {selectedMessage.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Phone size={24} className="text-[#0097b2]" />
                  <div>
                    <p className="text-sm text-gray-600">Téléphone</p>
                    <a
                      href={`tel:${selectedMessage.phone}`}
                      className="font-semibold text-[#0097b2] hover:underline"
                    >
                      {selectedMessage.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Calendar size={24} className="text-[#0097b2]" />
                  <div>
                    <p className="text-sm text-gray-600">Date de réception</p>
                    <p className="font-semibold text-gray-900">
                      {formatDate(selectedMessage.timestamp)}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Message</p>
                  <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <Button
                  className="flex-1 bg-[#0097b2] hover:bg-[#007a8f] text-white"
                  onClick={() => {
                    window.location.href = `mailto:${selectedMessage.email}`;
                  }}
                >
                  Répondre par email
                </Button>
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    window.location.href = `tel:${selectedMessage.phone}`;
                  }}
                >
                  Appeler
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
