import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Search, Tag, Compass, Flame } from 'lucide-react';
import { initialProducts } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const CATEGORIES = ['All', 'Pizza', 'Shawarma', 'Falafel', 'Salads', 'Fries'];

const CATEGORY_LABELS = {
  'All': { en: 'All', ka: 'ყველა' },
  'Pizza': { en: 'Pizza', ka: 'პიცა' },
  'Shawarma': { en: 'Shawarma', ka: 'შაურმა' },
  'Falafel': { en: 'Falafel', ka: 'ფალაფელი' },
  'Salads': { en: 'Salads', ka: 'სალათები' },
  'Fries': { en: 'Fries', ka: 'კარტოფილი ფრი' }
};

export default function Menu() {
  const { language, t } = useLanguage();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const woltUrl = import.meta.env.VITE_WOLT_URL || 'https://wolt.com';
  const boltUrl = import.meta.env.VITE_BOLT_URL || 'https://food.bolt.eu';

  useEffect(() => {
    setProducts(initialProducts);
    setLoading(false);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category.toLowerCase() === activeCategory.toLowerCase();
    
    const nameText = language === 'ka' ? (product.nameKa || product.name || '') : (product.nameEn || product.name || '');
    const descText = language === 'ka' ? (product.descriptionKa || product.description || '') : (product.descriptionEn || product.description || '');

    const matchesSearch = 
      nameText.toLowerCase().includes(searchQuery.toLowerCase()) || 
      descText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch && product.isAvailable;
  });

  return (
    <div id="menu-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] font-display flex items-center justify-center space-x-1">
          <Flame size={16} className="text-brand-red" />
          <span>{language === 'ka' ? 'ყოველდღე ახალი და გემრიელი' : 'Fresh & Delicious Daily'}</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-display text-brand-charcoal tracking-tight">
          {t('menu.title')}
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          {t('menu.subtitle')}
        </p>

        {/* Quick Order Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={woltUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 bg-[#00c2e8] hover:bg-[#00a8ca] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm"
          >
            <ShoppingBag size={14} />
            <span>{t('hero.orderWolt')}</span>
          </a>
          <a
            href={boltUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 bg-[#34d399] hover:bg-[#059669] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm"
          >
            <ShoppingBag size={14} />
            <span>{t('hero.orderBolt')}</span>
          </a>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="card bg-white p-6 flex flex-col md:flex-row gap-6 justify-between items-center sticky top-20 z-40">
        
        {/* Categories Carousel */}
        <div className="flex space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const label = language === 'ka' ? CATEGORY_LABELS[cat]?.ka : CATEGORY_LABELS[cat]?.en;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2 rounded-xl text-sm font-semibold tracking-tight transition-all shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'bg-brand-cream text-brand-charcoal hover:bg-gray-200'
                }`}
              >
                {label || cat}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder={language === 'ka' ? 'მოძებნე გემრიელი კერძები...' : 'Search our delicious dishes...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-brand-cream border border-gray-200 hover:border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none"
          />
        </div>

      </div>

      {/* Menu Cards Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div 
              key={n} 
              className="card bg-white h-96 animate-pulse"
            />
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-20 card bg-white">
          <Compass size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-bold font-display text-brand-charcoal mb-1">
            {language === 'ka' ? 'კერძები ვერ მოიძებნა' : 'No Menu Items Found'}
          </h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            {language === 'ka' 
              ? `სამწუხაროდ, კატეგორიაში "${CATEGORY_LABELS[activeCategory]?.ka || activeCategory}" თქვენს ძიებაზე კერძები ვერ მოიძებნა.`
              : `We couldn't find any products in category "${activeCategory}" matching your search. Try searching for something else or browse another category.`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const hasDiscount = product.discountPercentage > 0;
            const finalPrice = product.price - (product.price * product.discountPercentage / 100);
            const nameText = language === 'ka' ? (product.nameKa || product.name) : (product.nameEn || product.name);
            const descText = language === 'ka' ? (product.descriptionKa || product.description) : (product.descriptionEn || product.description);
            const categoryLabel = language === 'ka' ? (CATEGORY_LABELS[product.category]?.ka || product.category) : (CATEGORY_LABELS[product.category]?.en || product.category);

            return (
              <motion.div
                key={product._id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="card bg-white overflow-hidden flex flex-col justify-between hover:border-brand-red/30 transition-all duration-300 relative"
              >
                {/* Product Image Header */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={nameText}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {hasDiscount && (
                    <div className="absolute top-3.5 left-3.5 bg-brand-red text-white text-xs font-bold font-display tracking-tight py-1 px-3 rounded-full flex items-center space-x-1 shadow-md">
                      <Tag size={12} className="fill-white" />
                      <span>-{product.discountPercentage}% {t('menu.discount')}</span>
                    </div>
                  )}
                  {product.isPopular && (
                    <span className="absolute top-3.5 right-3.5 bg-brand-gold text-brand-charcoal text-xxs font-bold font-display uppercase tracking-wider py-1 px-3 rounded-full shadow">
                      {language === 'ka' ? 'პოპულარული' : 'Popular'}
                    </span>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-bold text-brand-charcoal text-xl font-display leading-snug">
                        {nameText}
                      </h3>
                      <span className="text-xs bg-brand-cream text-brand-red font-bold px-2.5 py-1 rounded-lg border border-brand-red/15 whitespace-nowrap">
                        {categoryLabel}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed font-normal">
                      {descText}
                    </p>
                  </div>

                  {/* Price & Cart Actions */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      {hasDiscount ? (
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-400 line-through leading-none mb-1">
                            {product.price.toFixed(2)} ₾
                          </span>
                          <span className="text-2xl font-extrabold text-brand-charcoal leading-none">
                            {finalPrice.toFixed(2)} <span className="text-lg font-bold">₾</span>
                          </span>
                        </div>
                      ) : (
                        <span className="text-2xl font-extrabold text-brand-charcoal leading-none">
                          {product.price.toFixed(2)} <span className="text-lg font-bold">₾</span>
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <a
                        href={woltUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#00c2e8] hover:bg-[#00a8ca] text-white p-2.5 rounded-xl transition-colors shadow-sm"
                        title={t('hero.orderWolt')}
                      >
                        <ShoppingBag size={18} />
                      </a>
                      <a
                        href={boltUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#34d399] hover:bg-[#059669] text-white p-2.5 rounded-xl transition-colors shadow-sm"
                        title={t('hero.orderBolt')}
                      >
                        <ShoppingBag size={18} />
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      )}

    </div>
  );
}
