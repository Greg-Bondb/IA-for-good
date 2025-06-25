import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, Globe, Users, BarChart3 } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: Globe, label: 'Signes Vitaux', href: '#vital-signs' },
    { icon: BarChart3, label: 'Calculateur', href: '#calculator' },
    { icon: Users, label: 'Communauté', href: '#community' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-emerald-900/95 backdrop-blur-md shadow-lg border-b border-emerald-700/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Leaf className="h-8 w-8 md:h-10 md:w-10 text-emerald-400 transform rotate-12" />
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-sm animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white">EcoVital</h1>
              <p className="text-xs text-emerald-300 hidden sm:block">Signes Vitaux de la Terre</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-2 text-emerald-100 hover:text-emerald-300 transition-colors duration-300 group"
              >
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-emerald-800/50 text-emerald-100 hover:bg-emerald-700/50 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-emerald-900/95 backdrop-blur-md border-b border-emerald-700/30">
            <nav className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 py-2 text-emerald-100 hover:text-emerald-300 transition-colors duration-300"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;