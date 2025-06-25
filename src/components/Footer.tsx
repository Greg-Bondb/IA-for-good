import React from 'react';
import { Leaf, Mail, Globe, Github, Twitter, Instagram, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Plateforme',
      links: [
        { name: 'Signes Vitaux', href: '#vital-signs' },
        { name: 'Calculateur Carbone', href: '#calculator' },
        { name: 'Hub d\'Action', href: '#community' },
        { name: 'Biodiversité', href: '#biodiversity' },
      ]
    },
    {
      title: 'Ressources',
      links: [
        { name: 'Données Climatiques', href: '#' },
        { name: 'Articles de Recherche', href: '#' },
        { name: 'Guides Éducatifs', href: '#' },
        { name: 'Documentation API', href: '#' },
      ]
    },
    {
      title: 'Communauté',
      links: [
        { name: 'Groupes Locaux', href: '#' },
        { name: 'Calendrier Événements', href: '#' },
        { name: 'Histoires de Succès', href: '#' },
        { name: 'Bénévolat', href: '#' },
      ]
    },
    {
      title: 'Organisation',
      links: [
        { name: 'À Propos d\'EcoVital', href: '#' },
        { name: 'Notre Mission', href: '#' },
        { name: 'Partenaires', href: '#' },
        { name: 'Nous Contacter', href: '#' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Globe, href: '#', label: 'Site Web' },
  ];

  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-md border-t border-emerald-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Leaf className="h-10 w-10 text-emerald-400 transform rotate-12" />
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-sm animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">EcoVital</h3>
                <p className="text-sm text-emerald-300">Signes Vitaux de la Terre</p>
              </div>
            </div>
            <p className="text-emerald-200 mb-6 leading-relaxed">
              Autonomiser l'action environnementale mondiale grâce aux données en temps réel, à l'engagement communautaire et à l'impact mesurable.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Restez Informé</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Entrez votre email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-300 focus:border-emerald-400 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white p-2 rounded-lg transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 p-2 rounded-lg transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-emerald-200 hover:text-emerald-100 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Environmental Impact Statement */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl p-6 mb-8 border border-emerald-400/20">
          <div className="text-center">
            <h4 className="text-white font-semibold mb-2 flex items-center justify-center space-x-2">
              <Heart className="h-5 w-5 text-red-400" />
              <span>Plateforme Neutre en Carbone</span>
            </h4>
            <p className="text-emerald-200 text-sm">
              EcoVital fonctionne avec 100% d'énergie renouvelable et compense toutes les émissions opérationnelles. 
              Chaque action sur notre plateforme contribue à des projets environnementaux vérifiés dans le monde entier.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <div className="text-emerald-200 text-sm mb-4 md:mb-0">
            <p>&copy; 2025 EcoVital. Tous droits réservés.</p>
            <p className="mt-1">
              Construit avec de l'énergie renouvelable et des pratiques durables.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-emerald-200 hover:text-emerald-100 text-sm transition-colors duration-300">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-emerald-200 hover:text-emerald-100 text-sm transition-colors duration-300">
              Conditions d'Utilisation
            </a>
            <button
              onClick={scrollToTop}
              className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 p-2 rounded-lg transition-all duration-300 group"
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;