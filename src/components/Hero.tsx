import React, { useEffect, useState } from 'react';
import { ChevronDown, Zap, Droplets, Wind } from 'lucide-react';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { icon: Zap, value: '421 ppm', label: 'Concentration CO₂', color: 'text-red-400', trend: '+2,4 ppm/an' },
    { icon: Droplets, value: '1,2°C', label: 'Hausse Température', color: 'text-orange-400', trend: '+0,18°C/décennie' },
    { icon: Wind, value: '97%', label: 'Perte Glace Arctique', color: 'text-blue-400', trend: '-13%/décennie' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-emerald-900/50 to-blue-900/50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent leading-tight">
            Signes Vitaux
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl">de la Terre</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Surveillance en temps réel de la santé de notre planète. Suivez les changements environnementaux, 
            calculez votre impact et rejoignez le mouvement mondial pour la durabilité.
          </p>
        </div>

        {/* Dynamic Stats Display */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-12 max-w-md mx-auto border border-white/20">
          <div className="flex items-center justify-center mb-4">
            {React.createElement(stats[currentStat].icon, {
              className: `h-8 w-8 ${stats[currentStat].color}`
            })}
          </div>
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">
            {stats[currentStat].value}
          </div>
          <div className="text-emerald-200 text-lg mb-1">
            {stats[currentStat].label}
          </div>
          <div className="text-sm text-emerald-300">
            {stats[currentStat].trend}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-emerald-500/25">
            Explorer le Tableau de Bord
          </button>
          <button className="border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-emerald-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Calculer l'Impact
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-emerald-300" />
      </div>
    </section>
  );
};

export default Hero;