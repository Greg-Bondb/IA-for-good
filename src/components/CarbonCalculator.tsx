import React, { useState } from 'react';
import { Calculator, Car, Plane, Home, Utensils, Shirt, Lightbulb } from 'lucide-react';

const CarbonCalculator = () => {
  const [activeTab, setActiveTab] = useState('transport');
  const [results, setResults] = useState(null);
  
  const [formData, setFormData] = useState({
    transport: { car: 0, plane: 0, public: 0 },
    energy: { electricity: 0, gas: 0, heating: 0 },
    lifestyle: { diet: 'mixed', shopping: 0, waste: 0 }
  });

  const categories = [
    { id: 'transport', icon: Car, label: 'Transport', color: 'bg-blue-500' },
    { id: 'energy', icon: Home, label: 'Énergie', color: 'bg-orange-500' },
    { id: 'lifestyle', icon: Utensils, label: 'Mode de Vie', color: 'bg-green-500' },
  ];

  const calculateCarbon = () => {
    const transport = (formData.transport.car * 0.21) + (formData.transport.plane * 0.25) + (formData.transport.public * 0.05);
    const energy = (formData.energy.electricity * 0.4) + (formData.energy.gas * 0.2) + (formData.energy.heating * 0.3);
    const dietMultiplier = formData.lifestyle.diet === 'meat' ? 2.3 : formData.lifestyle.diet === 'vegetarian' ? 1.2 : 1.6;
    const lifestyle = (formData.lifestyle.shopping * 0.1) + (formData.lifestyle.waste * 0.05) + dietMultiplier;
    
    const total = transport + energy + lifestyle;
    setResults({
      total: total.toFixed(1),
      transport: transport.toFixed(1),
      energy: energy.toFixed(1),
      lifestyle: lifestyle.toFixed(1),
      comparison: total > 16 ? 'above' : total > 8 ? 'average' : 'below'
    });
  };

  const updateFormData = (category, field, value) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Calculateur <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Carbone</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Découvrez votre impact environnemental et recevez des recommandations personnalisées pour réduire votre empreinte carbone.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-emerald-200 hover:bg-white/20'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Transport Tab */}
          {activeTab === 'transport' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Car className="h-6 w-6 mr-2 text-blue-400" />
                Transport
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-emerald-200 mb-2">Voiture (km/semaine)</label>
                  <input
                    type="number"
                    value={formData.transport.car}
                    onChange={(e) => updateFormData('transport', 'car', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-300 focus:border-blue-400 focus:outline-none"
                    placeholder="150"
                  />
                </div>
                <div>
                  <label className="block text-emerald-200 mb-2">Vols (heures/an)</label>
                  <input
                    type="number"
                    value={formData.transport.plane}
                    onChange={(e) => updateFormData('transport', 'plane', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-300 focus:border-blue-400 focus:outline-none"
                    placeholder="20"
                  />
                </div>
                <div>
                  <label className="block text-emerald-200 mb-2">Transport Public (km/semaine)</label>
                  <input
                    type="number"
                    value={formData.transport.public}
                    onChange={(e) => updateFormData('transport', 'public', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-300 focus:border-blue-400 focus:outline-none"
                    placeholder="50"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Energy Tab */}
          {activeTab === 'energy' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Home className="h-6 w-6 mr-2 text-orange-400" />
                Énergie Domestique
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-emerald-200 mb-2">Électricité (kWh/mois)</label>
                  <input
                    type="number"
                    value={formData.energy.electricity}
                    onChange={(e) => updateFormData('energy', 'electricity', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-300 focus:border-orange-400 focus:outline-none"
                    placeholder="300"
                  />
                </div>
                <div>
                  <label className="block text-emerald-200 mb-2">Gaz Naturel (m³/mois)</label>
                  <input
                    type="number"
                    value={formData.energy.gas}
                    onChange={(e) => updateFormData('energy', 'gas', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-300 focus:border-orange-400 focus:outline-none"
                    placeholder="50"
                  />
                </div>
                <div>
                  <label className="block text-emerald-200 mb-2">Fioul de Chauffage (L/mois)</label>
                  <input
                    type="number"
                    value={formData.energy.heating}
                    onChange={(e) => updateFormData('energy', 'heating', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-300 focus:border-orange-400 focus:outline-none"
                    placeholder="100"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Lifestyle Tab */}
          {activeTab === 'lifestyle' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Utensils className="h-6 w-6 mr-2 text-green-400" />
                Choix de Mode de Vie
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-emerald-200 mb-2">Type de Régime</label>
                  <select
                    value={formData.lifestyle.diet}
                    onChange={(e) => updateFormData('lifestyle', 'diet', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-green-400 focus:outline-none"
                  >
                    <option value="meat" className="bg-emerald-900">Riche en viande</option>
                    <option value="mixed" className="bg-emerald-900">Régime mixte</option>
                    <option value="vegetarian" className="bg-emerald-900">Végétarien</option>
                  </select>
                </div>
                <div>
                  <label className="block text-emerald-200 mb-2">Achats (€/mois)</label>
                  <input
                    type="number"
                    value={formData.lifestyle.shopping}
                    onChange={(e) => updateFormData('lifestyle', 'shopping', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-300 focus:border-green-400 focus:outline-none"
                    placeholder="200"
                  />
                </div>
                <div>
                  <label className="block text-emerald-200 mb-2">Déchets (kg/semaine)</label>
                  <input
                    type="number"
                    value={formData.lifestyle.waste}
                    onChange={(e) => updateFormData('lifestyle', 'waste', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-300 focus:border-green-400 focus:outline-none"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <button
              onClick={calculateCarbon}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-emerald-500/25 flex items-center space-x-2 mx-auto"
            >
              <Calculator className="h-5 w-5" />
              <span>Calculer Mon Empreinte</span>
            </button>
          </div>

          {/* Results */}
          {results && (
            <div className="mt-8 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl p-6 border border-emerald-400/30">
              <h4 className="text-2xl font-bold text-white mb-4 text-center">Votre Empreinte Carbone</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">{results.total}</div>
                  <div className="text-emerald-200">tonnes CO₂/an</div>
                  <div className="text-sm text-emerald-300">Total</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">{results.transport}</div>
                  <div className="text-blue-200">Transport</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-orange-400">{results.energy}</div>
                  <div className="text-orange-200">Énergie</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400">{results.lifestyle}</div>
                  <div className="text-green-200">Mode de Vie</div>
                </div>
              </div>

              <div className="text-center">
                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
                  results.comparison === 'above' ? 'bg-red-500/20 text-red-300' :
                  results.comparison === 'average' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-green-500/20 text-green-300'
                }`}>
                  <Lightbulb className="h-4 w-4" />
                  <span>
                    {results.comparison === 'above' ? 'Au-dessus de la moyenne mondiale (16t)' :
                     results.comparison === 'average' ? 'Proche de la moyenne mondiale (8-16t)' :
                     'En dessous de la moyenne mondiale (8t)'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CarbonCalculator;