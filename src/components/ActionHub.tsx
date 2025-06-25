import React, { useState } from 'react';
import { MapPin, Users, Calendar, ChevronDown, ExternalLink, Zap, Recycle, TreePine } from 'lucide-react';

const ActionHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedAction, setExpandedAction] = useState(null);
  
  const categories = [
    { id: 'all', label: 'Toutes les Actions', icon: Zap },
    { id: 'local', label: 'Événements Locaux', icon: MapPin },
    { id: 'digital', label: 'Actions Numériques', icon: Users },
    { id: 'lifestyle', label: 'Mode de Vie', icon: Recycle },
  ];

  const actions = [
    {
      id: 1,
      category: 'local',
      title: 'Nettoyage de Plage',
      organization: 'Gardiens des Océans',
      date: '2025-02-15',
      location: 'Plage de Santa Monica, CA',
      participants: 156,
      impact: 'Retirer 500kg de déchets plastiques',
      description: 'Rejoignez les passionnés d\'environnement pour notre nettoyage mensuel de plage. Nous fournissons tout l\'équipement et les rafraîchissements.',
      type: 'Événement',
      difficulty: 'Facile',
      timeCommitment: '3 heures',
      tags: ['océan', 'plastique', 'communauté']
    },
    {
      id: 2,
      category: 'digital',
      title: 'Pétition : Sauver la Forêt Amazonienne',
      organization: 'Coalition Avenir Vert',
      participants: 12847,
      impact: 'Protéger 10 000 hectares',
      description: 'Soutenez la législation pour protéger les zones critiques de la forêt tropicale contre la déforestation agricole.',
      type: 'Pétition',
      difficulty: 'Facile',
      timeCommitment: '2 minutes',
      tags: ['forêts', 'politique', 'mondial']
    },
    {
      id: 3,
      category: 'lifestyle',
      title: 'Défi Zéro Déchet 30 Jours',
      organization: 'Réseau Vie Durable',
      participants: 2341,
      impact: 'Réduire 15kg de déchets personnels',
      description: 'Transformez vos habitudes quotidiennes avec notre guide complet pour une vie zéro déchet.',
      type: 'Défi',
      difficulty: 'Moyen',
      timeCommitment: '30 jours',
      tags: ['déchets', 'personnel', 'habitudes']
    },
    {
      id: 4,
      category: 'local',
      title: 'Plantation d\'Arbres Communautaire',
      organization: 'Initiative Forêt Urbaine',
      date: '2025-02-22',
      location: 'Central Park, NY',
      participants: 89,
      impact: 'Planter 200 arbres indigènes',
      description: 'Aidez à restaurer les espaces verts urbains en plantant des arbres indigènes qui amélioreront la qualité de l\'air pour les générations.',
      type: 'Événement',
      difficulty: 'Moyen',
      timeCommitment: '4 heures',
      tags: ['arbres', 'qualité de l\'air', 'urbain']
    },
    {
      id: 5,
      category: 'digital',
      title: 'Crowdsourcing Données Climatiques',
      organization: 'Hub Science Citoyenne',
      participants: 5632,
      impact: 'Améliorer les modèles climatiques',
      description: 'Contribuez à la recherche climatique mondiale en aidant les scientifiques à analyser les images satellites et les données météorologiques.',
      type: 'Recherche',
      difficulty: 'Difficile',
      timeCommitment: 'Flexible',
      tags: ['science', 'données', 'recherche']
    },
    {
      id: 6,
      category: 'lifestyle',
      title: 'Transition Régime Durable',
      organization: 'Mouvement Végétal Avant',
      participants: 1876,
      impact: 'Réduire 2,3t CO₂/an',
      description: 'Transition progressive vers une alimentation végétale avec plans de repas, recettes et conseils nutritionnels.',
      type: 'Programme',
      difficulty: 'Moyen',
      timeCommitment: '12 semaines',
      tags: ['alimentation', 'carbone', 'santé']
    }
  ];

  const filteredActions = selectedCategory === 'all' 
    ? actions 
    : actions.filter(action => action.category === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Facile': return 'text-green-400 bg-green-500/20';
      case 'Moyen': return 'text-yellow-400 bg-yellow-500/20';
      case 'Difficile': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Événement': return Calendar;
      case 'Pétition': return Users;
      case 'Défi': return Zap;
      case 'Programme': return TreePine;
      case 'Recherche': return ExternalLink;
      default: return Zap;
    }
  };

  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hub <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">d'Action</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Transformez la sensibilisation en action. Rejoignez des événements locaux, soutenez des causes importantes et faites une différence mesurable dans votre communauté et au-delà.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                  : 'bg-white/10 text-emerald-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredActions.map((action) => {
            const TypeIcon = getTypeIcon(action.type);
            const isExpanded = expandedAction === action.id;

            return (
              <div
                key={action.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600">
                      <TypeIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(action.difficulty)}`}>
                        {action.difficulty}
                      </span>
                      <span className="ml-2 text-emerald-300 text-sm">{action.type}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedAction(isExpanded ? null : action.id)}
                    className="text-emerald-300 hover:text-emerald-100 transition-colors duration-300"
                  >
                    <ChevronDown className={`h-5 w-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
                <p className="text-emerald-300 text-sm mb-3">{action.organization}</p>

                <div className="flex flex-wrap gap-4 mb-4">
                  {action.date && (
                    <div className="flex items-center space-x-2 text-emerald-200">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{new Date(action.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                  )}
                  {action.location && (
                    <div className="flex items-center space-x-2 text-emerald-200">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{action.location}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2 text-emerald-200">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{action.participants.toLocaleString()} participants</span>
                  </div>
                </div>

                <div className="bg-emerald-500/20 rounded-lg p-3 mb-4">
                  <div className="text-emerald-300 text-sm font-medium mb-1">Impact Attendu</div>
                  <div className="text-white font-semibold">{action.impact}</div>
                </div>

                {isExpanded && (
                  <div className="space-y-4 border-t border-white/20 pt-4">
                    <p className="text-emerald-100">{action.description}</p>
                    
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="text-emerald-300">Engagement Temps :</span>
                        <span className="text-white ml-2">{action.timeCommitment}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {action.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-white/10 text-emerald-200 px-2 py-1 rounded-full text-xs border border-white/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3 pt-2">
                      <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                        Rejoindre l'Action
                      </button>
                      <button className="px-4 py-3 bg-white/10 hover:bg-white/20 text-emerald-200 rounded-xl transition-all duration-300 border border-white/20">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-emerald-500/25">
            Soumettre Votre Action
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActionHub;