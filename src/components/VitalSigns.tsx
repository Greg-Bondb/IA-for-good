import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Thermometer, Droplets, Wind, Zap, TreePine, Fish } from 'lucide-react';

const VitalSigns = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  
  const metrics = [
    {
      icon: Thermometer,
      title: 'Température Mondiale',
      current: '+1,2°C',
      trend: 'up',
      change: '+0,18°C/décennie',
      description: 'Au-dessus de la moyenne pré-industrielle',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      progress: 68,
    },
    {
      icon: Zap,
      title: 'CO₂ Atmosphérique',
      current: '421 ppm',
      trend: 'up',
      change: '+2,4 ppm/an',
      description: 'Le plus élevé depuis 3 millions d\'années',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      progress: 85,
    },
    {
      icon: Droplets,
      title: 'Élévation du Niveau de la Mer',
      current: '+21,5 cm',
      trend: 'up',
      change: '+3,3 mm/an',
      description: 'Depuis 1993',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      progress: 45,
    },
    {
      icon: Wind,
      title: 'Étendue de la Glace Arctique',
      current: '13,2M km²',
      trend: 'down',
      change: '-13%/décennie',
      description: 'Minimum de septembre',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      progress: 32,
    },
    {
      icon: TreePine,
      title: 'Couverture Forestière',
      current: '31% des terres',
      trend: 'down',
      change: '-10M hectares/an',
      description: 'Taux de déforestation mondial',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      progress: 55,
    },
    {
      icon: Fish,
      title: 'pH des Océans',
      current: '8,1',
      trend: 'down',
      change: '-0,02/décennie',
      description: 'Acidification des océans',
      color: 'from-teal-500 to-blue-600',
      bgColor: 'bg-teal-500/10',
      progress: 72,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="vital-signs" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          {/* Realistic Beating Heart Effect */}
          <div className="absolute inset-0">
            <div className="absolute top-16 left-8 z-0">
              {/* Main Heart Shape */}
              <div className="relative w-12 h-12 animate-heartbeat">
                <div className="absolute inset-0 transform rotate-45">
                  <div className="w-6 h-9 bg-red-500/40 rounded-t-full absolute top-0 left-3 animate-heartbeat-pulse"></div>
                  <div className="w-6 h-6 bg-red-500/40 rounded-full absolute top-0 left-0 animate-heartbeat-pulse"></div>
                  <div className="w-6 h-6 bg-red-500/40 rounded-full absolute top-0 right-0 animate-heartbeat-pulse"></div>
                </div>
              </div>
              
              {/* Heart Pulse Rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 border-2 border-red-400/30 rounded-full animate-ping"></div>
                <div className="absolute top-2 left-2 w-12 h-12 border-2 border-red-400/20 rounded-full animate-ping animation-delay-300"></div>
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-red-400/10 rounded-full animate-ping animation-delay-600"></div>
              </div>
              
              {/* Additional Heartbeat Indicators */}
              <div className="absolute -top-4 -left-4 w-2 h-2 bg-red-400/60 rounded-full animate-pulse animation-delay-200"></div>
              <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-red-400/40 rounded-full animate-pulse animation-delay-800"></div>
              <div className="absolute top-16 left-8 w-1 h-1 bg-red-300/50 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Bilan <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">de Santé</span> de la Planète
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto relative z-10">
            Notre planète montre des signes vitaux préoccupants : réchauffement accéléré, biodiversité en chute libre et ressources naturelles surexploitées. La Terre tire la sonnette d’alarme, il est temps d’agir collectivement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                index === activeMetric
                  ? 'bg-white/20 backdrop-blur-md border-2 border-emerald-400 shadow-2xl shadow-emerald-400/20'
                  : 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15'
              }`}
              onClick={() => setActiveMetric(index)}
            >
              <div className={`absolute inset-0 ${metric.bgColor} opacity-20`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${metric.color}`}>
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {metric.trend === 'up' ? (
                      <TrendingUp className="h-5 w-5 text-red-400" />
                    ) : (
                      <TrendingDown className="h-5 w-5 text-red-400" />
                    )}
                    <span className="text-sm text-red-300">{metric.change}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
                <div className="text-3xl font-bold text-white mb-2">{metric.current}</div>
                <p className="text-emerald-200 text-sm mb-4">{metric.description}</p>

                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${metric.color} transition-all duration-1000`}
                    style={{ width: `${metric.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-6 py-3">
            <Zap className="h-5 w-5 text-amber-400" />
            <span className="text-amber-200 font-medium">
              Données mises à jour toutes les 15 minutes depuis les stations de surveillance mondiales
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14% { transform: scale(1.1); }
          28% { transform: scale(1); }
          42% { transform: scale(1.1); }
          70% { transform: scale(1); }
        }
        
        @keyframes heartbeat-pulse {
          0%, 100% { 
            opacity: 0.4;
            transform: scale(1);
          }
          14% { 
            opacity: 0.8;
            transform: scale(1.05);
          }
          28% { 
            opacity: 0.4;
            transform: scale(1);
          }
          42% { 
            opacity: 0.8;
            transform: scale(1.05);
          }
          70% { 
            opacity: 0.4;
            transform: scale(1);
          }
        }
        
        .animate-heartbeat {
          animation: heartbeat 2s infinite;
        }
        
        .animate-heartbeat-pulse {
          animation: heartbeat-pulse 2s infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default VitalSigns;