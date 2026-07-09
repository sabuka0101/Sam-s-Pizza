import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const woltUrl = import.meta.env.VITE_WOLT_URL || 'https://wolt.com';
  const boltUrl = import.meta.env.VITE_BOLT_URL || 'https://food.bolt.eu';

  return (
    <footer id="footer-container" className="bg-brand-charcoal text-gray-300 pt-16 pb-8 border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight font-display">
              SAM'S <span className="text-brand-red font-sans font-light tracking-widest text-base">PIZZA</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {language === 'ka' 
                ? 'გთავაზობთ საუკეთესო პიცას, ხრაშუნა შაურმას, საფირმო ფალაფელს, ნედლ სალათებსა და ოქროსფერ კარტოფილ ფრის თბილისში. გვაქვს ჰალალ ვარიანტები.'
                : 'Serving the absolute best pizza, crispy shawarma, house-made falafel, fresh salads, and golden fries in Tbilisi, Georgia. Halal options available.'}
            </p>
            <div className="flex space-x-4 pt-2">
              <span className="text-xs bg-brand-red/10 text-brand-red border border-brand-red/30 py-1 px-2.5 rounded-full font-medium">
                {language === 'ka' ? 'ჰალალი' : 'Halal Available'}
              </span>
              <span className="text-xs bg-brand-charcoal border border-gray-700 py-1 px-2.5 rounded-full font-medium text-gray-400">
                {language === 'ka' ? 'მეგობრული გარემო' : 'LGBTQ+ Friendly'}
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-semibold font-display mb-4 text-sm uppercase tracking-wider">
              {language === 'ka' ? 'სწრაფი ლინკები' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors duration-150">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-brand-gold transition-colors duration-150">{t('nav.menu')}</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-brand-gold transition-colors duration-150">{t('nav.reviews')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold font-display mb-4 text-sm uppercase tracking-wider">
              {language === 'ka' ? 'კონტაქტი' : 'Contact Us'}
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  {t('home.address')}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-red shrink-0" />
                <a href="tel:+995555633366" className="text-gray-300 hover:text-brand-gold transition-colors duration-150 font-medium">
                  {t('home.phone')}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-brand-red shrink-0" />
                <span className="text-gray-400">{t('home.hours')}</span>
              </li>
            </ul>
          </div>

          {/* Delivery Column */}
          <div>
            <h4 className="text-white font-semibold font-display mb-4 text-sm uppercase tracking-wider">
              {language === 'ka' ? 'შეუკვეთე ონლაინ' : 'Order Online'}
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              {language === 'ka'
                ? 'შეუკვეთეთ ცხელი და გემრიელი სემის პიცა პირდაპირ თქვენს სახლში თბილისის წამყვანი მიტანის პლატფორმებით:'
                : "Get Sam's Pizza delivered hot and fresh straight to your doorstep via Tbilisi's leading delivery platforms:"}
            </p>
            <div className="flex flex-col space-y-3">
              <a
                href={woltUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-brand-charcoal border border-gray-700 hover:border-[#00c2e8] px-4 py-2.5 rounded-lg text-sm text-white hover:text-[#00c2e8] transition-colors"
              >
                <span>{language === 'ka' ? 'შეუკვეთე Wolt-ით' : 'Order with Wolt'}</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={boltUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-brand-charcoal border border-gray-700 hover:border-[#34d399] px-4 py-2.5 rounded-lg text-sm text-white hover:text-[#34d399] transition-colors"
              >
                <span>{language === 'ka' ? 'შეუკვეთე Bolt-ით' : 'Order with Bolt Food'}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} Sam's Pizza. {language === 'ka' ? 'ყველა უფლება დაცულია.' : 'All rights reserved.'}</p>
          <p className="mt-2 md:mt-0 flex items-center space-x-1.5">
            <span>Official Website: sams.ge</span>
            <span>•</span>
            <span>{language === 'ka' ? 'სიყვარულით დამზადებულია თბილისში' : 'Designed with dedication in Tbilisi'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
