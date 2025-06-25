import React, { useEffect, useState } from 'react';
import { Users, Zap, TreePine, Droplets, Award, TrendingUp } from 'lucide-react';

const CommunityStats = () => {
  const [animatedStats, setAnimatedStats] = useState({
    members: 0,
    carbonSaved: 0,
    treesPlanted: 0,
    wasteReduced: 0
  });

  const finalStats = {
    members: 47832,
    carbonSaved: 12459,
    treesPlanted: 8734,
    wasteReduced: 156.7
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats({
        members: Math.floor(finalStats.members * easeOutQuart),
        carbonSaved: Math.floor(finalStats.carbonSaved * easeOutQuart),
        treesPlanted: Math.floor(finalStats.treesPlanted * easeOutQuart),
        wasteReduced: Number((finalStats.wasteReduced * easeOutQuart).toFixed(1))
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const achievements = [
    {
      icon: Award,
      title: 'Ville Neutre en Carbone',
      description: 'Aidé San Francisco à atteindre la neutralité carbone',
      participants: '12 400 membres',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: TreePine,
      title: 'Initiative Million d\'Arbres',
      description: 'Contribué à planter 1M d\'arbres dans 50 villes',
      participants: '28 900 membres',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Droplets,
      title: 'Succès Nettoyage Océans',
      description: 'Retiré 500 tonnes de plastique des océans',
      participants: '8 200 membres',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  const stats = [
    {
      icon: Users,
      label: 'Membres Actifs',
      value: animatedStats.members.toLocaleString('fr-FR'),
      suffix: '',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20'
    },
    {
      icon: Zap,
      label: 'CO₂ Économisé',
      value: animatedStats.carbonSaved.toLocaleString('fr-FR'),
      suffix: ' tonnes',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: TreePine,
      label: 'Arbres Plantés',
      value: animatedStats.treesPlanted.toLocaleString('fr-FR'),
      suffix: '',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      icon: Droplets,
      label: 'Déchets Réduits',
      value: animatedStats.wasteReduced,
      suffix: 'k tonnes',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Communautaire</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Ensemble, nous faisons une différence mesurable. Découvrez comment notre communauté mondiale transforme l'action environnementale en impact concret.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
                <span className="text-lg">{stat.suffix}</span>
              </div>
              <div className="text-emerald-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Réalisations <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Récentes</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-emerald-200 mb-3">{achievement.description}</p>
                <div className="flex items-center space-x-2 text-emerald-300">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">{achievement.participants}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Indicators */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl p-8 border border-emerald-400/30">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Mouvement en Croissance</h3>
            <p className="text-emerald-200">L'impact de notre communauté continue de s'accélérer</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span className="text-2xl font-bold text-green-400">+23%</span>
              </div>
              <div className="text-emerald-200">Nouveaux membres ce mois</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <TrendingUp className="h-5 w-5 text-blue-400" />
                <span className="text-2xl font-bold text-blue-400">+157%</span>
              </div>
              <div className="text-emerald-200">Actions complétées</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <TrendingUp className="h-5 w-5 text-purple-400" />
                <span className="text-2xl font-bold text-purple-400">+89%</span>
              </div>
              <div className="text-emerald-200">Engagement communautaire</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-purple-500/25">
            Rejoindre Notre Communauté
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;