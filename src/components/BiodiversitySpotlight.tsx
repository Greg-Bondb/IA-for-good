import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, TrendingDown, Heart, Share2 } from 'lucide-react';

const BiodiversitySpotlight = () => {
  const [currentSpecies, setCurrentSpecies] = useState(0);
  
  const species = [
    {
      name: 'Léopard de l\'Amour',
      scientificName: 'Panthera pardus orientalis',
      status: 'En Danger Critique',
      population: '130-140',
      location: 'Extrême-Orient russe, Nord-Est de la Chine',
      image: 'https://angelettibastien.fr/ia4good/leopar.png',
      threats: ['Perte d\'habitat', 'Braconnage', 'Changement climatique'],
      conservation: 'Réserves protégées, efforts anti-braconnage',
      description: 'Le grand félin le plus rare au monde, adapté aux climats froids avec une fourrure épaisse qui change selon les saisons.',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Marsouin du Golfe',
      scientificName: 'Phocoena sinus',
      status: 'En Danger Critique',
      population: '10-12',
      location: 'Golfe de Californie, Mexique',
      image: 'https://angelettibastien.fr/ia4good/marsouin.png',
      threats: ['Filets de pêche', 'Filets maillants illégaux', 'Dégradation de l\'habitat'],
      conservation: 'Interdictions de pêche, programmes de retrait des filets',
      description: 'Le mammifère marin le plus menacé au monde, trouvé uniquement dans une petite zone du golfe de Californie.',
      color: 'from-blue-500 to-teal-600'
    },
    {
      name: 'Orang-outan de Sumatra',
      scientificName: 'Pongo abelii',
      status: 'En Danger Critique',
      population: '14 000',
      location: 'Sumatra, Indonésie',
      image: 'https://angelettibastien.fr/ia4good/ourangouta.png',
      threats: ['Plantations d\'huile de palme', 'Déforestation', 'Commerce illégal'],
      conservation: 'Aires protégées, centres de réhabilitation',
      description: 'Grands singes très intelligents qui passent la plupart de leur vie dans les arbres, cruciaux pour la santé de l\'écosystème forestier.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Kakapo',
      scientificName: 'Strigops habroptilus',
      status: 'En Danger Critique',
      population: '252',
      location: 'Nouvelle-Zélande',
      image: 'https://angelettibastien.fr/ia4good/kakapo.png',
      threats: ['Prédateurs introduits', 'Perte d\'habitat', 'Maladies'],
      conservation: 'Programmes de reproduction, îles sans prédateurs',
      description: 'Le seul perroquet incapable de voler au monde, nocturne et avec une odeur distinctive musquée-sucrée.',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const nextSpecies = () => {
    setCurrentSpecies((prev) => (prev + 1) % species.length);
  };

  const prevSpecies = () => {
    setCurrentSpecies((prev) => (prev - 1 + species.length) % species.length);
  };

  const currentAnimal = species[currentSpecies];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Focus <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Biodiversité</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Rencontrez les espèces incroyables qui luttent pour leur survie. Découvrez leurs histoires et comment vous pouvez aider à protéger la précieuse biodiversité de la Terre.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20">
          <div className="md:flex">
            {/* Image Section */}
            <div className="relative md:w-1/2 h-64 md:h-96">
              <img
                src={currentAnimal.image}
                alt={currentAnimal.name}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${currentAnimal.color} opacity-30`}></div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSpecies}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSpecies}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Status Badge */}
              <div className="absolute top-4 left-4 bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentAnimal.status}
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">{currentAnimal.name}</h3>
                <p className="text-emerald-300 italic text-lg mb-4">{currentAnimal.scientificName}</p>
                <p className="text-emerald-100 leading-relaxed">{currentAnimal.description}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <TrendingDown className="h-5 w-5 text-red-400" />
                  <div>
                    <span className="text-emerald-200">Population :</span>
                    <span className="text-white font-semibold ml-2">{currentAnimal.population}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <div>
                    <span className="text-emerald-200">Localisation :</span>
                    <span className="text-white ml-2">{currentAnimal.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Principales Menaces</h4>
                <div className="flex flex-wrap gap-2">
                  {currentAnimal.threats.map((threat, index) => (
                    <span
                      key={index}
                      className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm border border-red-400/30"
                    >
                      {threat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Efforts de Conservation</h4>
                <p className="text-emerald-200">{currentAnimal.conservation}</p>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                  <Heart className="h-5 w-5" />
                  <span>Soutenir la Conservation</span>
                </button>
                <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-emerald-200 px-6 py-3 rounded-full font-medium transition-all duration-300 border border-white/20">
                  <Share2 className="h-5 w-5" />
                  <span>Partager</span>
                </button>
              </div>
            </div>
          </div>

          {/* Species Indicator */}
          <div className="flex justify-center space-x-2 p-6">
            {species.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSpecies(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSpecies
                    ? 'bg-emerald-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiodiversitySpotlight;