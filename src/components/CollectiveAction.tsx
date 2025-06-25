import React from 'react';
import { Users, Heart, Zap, Globe, HandHeart, Sparkles } from 'lucide-react';

const CollectiveAction = () => {
  const impactStories = [
    {
      icon: Users,
      title: 'La Force du Nombre',
      description: 'Quand 47 000 personnes agissent ensemble, l\'impossible devient possible. Chaque geste compte, chaque voix porte.',
      highlight: '47 832 membres actifs',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'L\'Émotion qui Transforme',
      description: 'Derrière chaque action, il y a une émotion : l\'amour pour notre planète, l\'espoir pour nos enfants.',
      highlight: 'Passion partagée',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'L\'Urgence qui Mobilise',
      description: 'Le temps presse, mais ensemble nous sommes plus rapides que le changement climatique.',
      highlight: 'Action immédiate',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const callToActions = [
    {
      icon: Globe,
      title: 'Rejoignez le Mouvement',
      description: 'Votre voix manque à notre chœur mondial',
      action: 'S\'engager Maintenant'
    },
    {
      icon: HandHeart,
      title: 'Organisez dans Votre Ville',
      description: 'Devenez le catalyseur du changement local',
      action: 'Créer un Événement'
    },
    {
      icon: Sparkles,
      title: 'Partagez Votre Histoire',
      description: 'Inspirez d\'autres par votre exemple',
      action: 'Témoigner'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              Ensemble,
            </span>
            <br />
            <span className="text-white">Nous Sommes</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Puissants
            </span>
          </h2>
          <p className="text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed font-medium">
            L'écologie n'est pas qu'une cause, c'est un <span className="text-pink-300 font-bold">élan du cœur</span> qui nous unit. 
            Chaque action partagée multiplie notre impact. Chaque événement local résonne à l'échelle mondiale.
          </p>
        </div>

        {/* Impact Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactStories.map((story, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${story.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <story.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{story.title}</h3>
              <p className="text-emerald-100 leading-relaxed mb-4">{story.description}</p>
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${story.color} bg-opacity-20 border border-white/30`}>
                <span className="text-white font-semibold">{story.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional Call to Action */}
        <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl p-12 mb-16 border border-purple-400/30 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Votre Planète Vous Appelle
          </h3>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Chaque seconde qui passe sans action est une seconde de perdue pour les générations futures. 
            Mais chaque seconde où nous agissons ensemble est une seconde gagnée pour l'espoir.
            <br /><br />
            <span className="text-pink-300 font-bold text-2xl">
              Ne laissez pas l'histoire se faire sans vous.
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">12 459</div>
              <div className="text-emerald-200">tonnes de CO₂ économisées</div>
              <div className="text-sm text-emerald-300">grâce à VOUS</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">8 734</div>
              <div className="text-emerald-200">arbres plantés</div>
              <div className="text-sm text-emerald-300">par notre communauté</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">156,7k</div>
              <div className="text-emerald-200">tonnes de déchets évités</div>
              <div className="text-sm text-emerald-300">ensemble</div>
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {callToActions.map((cta, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <cta.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{cta.title}</h4>
              <p className="text-emerald-200 mb-4">{cta.description}</p>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                {cta.action}
              </button>
            </div>
          ))}
        </div>

        {/* Final Rallying Cry */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            L'Avenir se Décide <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Maintenant</span>
          </h3>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            Dans 10 ans, que direz-vous à vos enfants ? Que vous avez regardé ou que vous avez agi ?
          </p>
          <button className="bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 hover:from-emerald-600 hover:via-teal-600 hover:to-blue-600 text-white px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-emerald-500/25">
            Je Passe à l'Action
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectiveAction;