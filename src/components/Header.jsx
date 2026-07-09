import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const woltUrl = import.meta.env.VITE_WOLT_URL || 'https://wolt.com';
  const boltUrl = import.meta.env.VITE_BOLT_URL || 'https://food.bolt.eu';

  const isActive = (path) => location.pathname === path;

  const links = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.menu'), path: '/menu' },
    { name: t('nav.reviews'), path: '/reviews' },
  ];

  return (
    <header id="header-container" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md text-brand-charcoal border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tight text-brand-red flex items-center font-display">
                SAM'S <span className="text-brand-charcoal ml-1 font-sans font-light tracking-widest text-lg">PIZZA</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-200 py-2 border-b-2 font-semibold ${
                  isActive(link.path)
                    ? 'border-brand-red text-brand-red'
                    : 'border-transparent hover:text-brand-red hover:border-brand-red text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Section: Language Switcher + Delivery Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Elegant Language Toggle Button Group */}
            <div className="flex items-center bg-brand-cream p-1 rounded-xl border border-gray-200/50">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                  language === 'en'
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'text-gray-500 hover:text-brand-charcoal'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ka')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                  language === 'ka'
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'text-gray-500 hover:text-brand-charcoal'
                }`}
              >
                KA
              </button>
            </div>

            <a
              href={woltUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-[#00c2e8] hover:bg-[#00a8ca] text-white font-medium text-xs py-2 px-3.5 rounded-full transition-transform hover:-translate-y-0.5 shadow"
            >
              <ShoppingBag size={14} />
              <span>{t('hero.orderWolt')}</span>
            </a>
            <a
              href={boltUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-[#34d399] hover:bg-[#059669] text-white font-medium text-xs py-2 px-3.5 rounded-full transition-transform hover:-translate-y-0.5 shadow"
            >
              <ShoppingBag size={14} />
              <span>{t('hero.orderBolt')}</span>
            </a>
          </div>

          {/* Mobile Menu Button + Language Switcher */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Compact language switcher on mobile navbar */}
            <div className="flex items-center bg-brand-cream p-0.5 rounded-lg border border-gray-200/50 mr-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xxs font-extrabold rounded transition-all cursor-pointer ${
                  language === 'en' ? 'bg-brand-red text-white shadow-sm' : 'text-gray-500'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ka')}
                className={`px-2 py-1 text-xxs font-extrabold rounded transition-all cursor-pointer ${
                  language === 'ka' ? 'bg-brand-red text-white shadow-sm' : 'text-gray-500'
                }`}
              >
                KA
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-brand-charcoal hover:bg-brand-cream focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-base font-medium">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-xl font-semibold ${
                  isActive(link.path)
                    ? 'bg-brand-red text-white'
                    : 'text-gray-700 hover:bg-brand-cream hover:text-brand-charcoal'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-100 flex flex-col space-y-2 px-3">
              <a
                href={woltUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#00c2e8] text-white py-2.5 rounded-xl font-medium text-sm"
              >
                <ShoppingBag size={16} />
                <span>{t('hero.orderWolt')}</span>
              </a>
              <a
                href={boltUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#34d399] text-white py-2.5 rounded-xl font-medium text-sm"
              >
                <ShoppingBag size={16} />
                <span>{t('hero.orderBolt')}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
