import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Utensils, 
  ShoppingBag, 
  ChevronRight, 
  Compass, 
  Award, 
  ShieldCheck,
  Heart,
  MessageSquare
} from 'lucide-react';
import { initialProducts } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const HOURS_CONFIG = {
  openTimeStr: '10:00 AM',
  closeTimeStr: '9:00 PM',
  openHour: 10,
  closeHour: 21
};

export default function Home() {
  const { language, t } = useLanguage();
  const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpenNow, setIsOpenNow] = useState(false);

  const woltUrl = import.meta.env.VITE_WOLT_URL || 'https://wolt.com';
  const boltUrl = import.meta.env.VITE_BOLT_URL || 'https://food.bolt.eu';

  useEffect(() => {
    // Determine Tbilisi Open Status
    const checkOpenStatus = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const tbilisiTime = new Date(utc + (3600000 * 4)); // Tbilisi is UTC+4
      const currentHour = tbilisiTime.getHours();
      setIsOpenNow(currentHour >= HOURS_CONFIG.openHour && currentHour < HOURS_CONFIG.closeHour);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute

    // Use local popular products list instead of API fetch
    const popular = initialProducts.filter((p) => p.isPopular && p.isAvailable);
    setPopularProducts(popular);
    setLoading(false);

    return () => clearInterval(interval);
  }, []);

  // Paraphrased natural reviews
  const reviews = [
    {
      name: 'Levan M.',
      role: language === 'ka' ? 'ადგილობრივი გიდი' : 'Local Guide',
      rating: 5,
      text: language === 'ka' 
        ? 'პორციის ზომები ფასთან შედარებით ძალიან დიდია! საჭმლის ხარისხი და თბილი მომსახურება უმაღლესი დონისაა. ფონური მუსიკა რომ ჩაირთოს, ეს ადგილი სრულყოფილება იქნება!' 
        : 'The portion sizes here are massive compared to the prices! The food quality and friendly service are top-notch. Honestly, if they played some background music, this place would be absolute perfection!',
    },
    {
      name: 'Aisha K.',
      role: language === 'ka' ? 'ვერიფიცირებული სტუმარი' : 'Verified Customer',
      rating: 5,
      text: language === 'ka'
        ? 'თბილისში ნამდვილი, გემრიელი ჰალალ ვარიანტების პოვნა რთულია, მაგრამ სემის პიცა საოცრებაა. მფლობელი ძალიან კეთილია, ქათმის შაურმა და საფირმო ნივრის სოუსი კი - საოცარი!'
        : 'Finding authentic, delicious halal options in Tbilisi can be tough, but Sam\'s Pizza is amazing. The owner is so incredibly kind, and the chicken shawarma with their signature garlic sauce is to die for!',
    },
    {
      name: 'Nino T.',
      role: language === 'ka' ? 'პიცის მოყვარული' : 'Pizza Enthusiast',
      rating: 5,
      text: language === 'ka'
        ? 'მათ საფირმო ცომს იდეალური სტრუქტურა აქვს. ნივრიანი ქათმის დელუქსი და ოთხი ყველი შევუკვეთეთ, ორივე საუკეთესო იყო. სწრაფი მომსახურებაც აქვთ. ნამდვილად ჩვენი ახალი საყვარელი ადგილია!'
        : 'Their sourdough crust has the perfect chewiness. We ordered the Garlic Chicken Deluxe and the Four Cheese, and both were outstanding. Super quick takeaway too. Definitely our new favorite spot!',
    }
  ];

  const serviceBadges = [
    { 
      icon: Utensils, 
      label: language === 'ka' ? 'ადგილზე კვება' : 'Dine-in Available', 
      desc: language === 'ka' ? 'მყუდრო გარემო' : 'Cozy seating' 
    },
    { 
      icon: Compass, 
      label: language === 'ka' ? 'გატანა' : 'Takeaway', 
      desc: language === 'ka' ? 'სწრაფი მომზადება' : 'Quick pickup' 
    },
    { 
      icon: ShoppingBag, 
      label: language === 'ka' ? 'მიტანის სერვისი' : 'Delivery', 
      desc: language === 'ka' ? 'Wolt & Bolt' : 'Wolt & Bolt' 
    },
    { 
      icon: Award, 
      label: language === 'ka' ? 'ჰალალი' : 'Halal Options', 
      desc: language === 'ka' ? '100% სერტიფიცირებული' : '100% certified' 
    },
    { 
      icon: Heart, 
      label: language === 'ka' ? 'მეგობრული გარემო' : 'Welcoming Space', 
      desc: language === 'ka' ? 'ყველასთვის ღია' : 'Welcoming space' 
    },
  ];

  return (
    <div id="home-page-container" className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-brand-cream text-brand-charcoal pt-16 pb-24 border-b border-gray-200/50">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(188,52,37,0.06),transparent_60%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-brand-red">
                <Star size={14} className="fill-brand-red text-brand-red" />
                <span>4.6 / 5 {t('menu.rating')} (293 {t('nav.reviews')})</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-display leading-[0.95] text-brand-charcoal tracking-tight">
                {t('hero.title1')} <br />
                <span className="text-brand-red font-bold font-display">{t('hero.title2')}</span> <br />
                {t('hero.title3')}
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed font-normal">
                {t('hero.subtitle')}
              </p>

              {/* Attributes block */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1.5">
                  <Clock size={16} className="text-brand-red" />
                  <span>{language === 'ka' ? 'ყოველდღე' : 'Daily'} 10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex items-center space-x-1.5 border-l border-gray-200 pl-4">
                  <span className="font-bold text-brand-red">20–30 ₾</span>
                  <span>{t('hero.avgPerson')}</span>
                </div>
                <div className="flex items-center space-x-2 border-l border-gray-200 pl-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
                  <span className="font-semibold text-brand-charcoal">
                    {isOpenNow ? t('hero.openNow') : t('hero.closed')}
                  </span>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={woltUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#00c2e8] hover:bg-[#00a8ca] text-white px-8 py-4 rounded-xl font-bold text-base transition-transform hover:-translate-y-0.5 shadow"
                >
                  <ShoppingBag size={18} />
                  <span>{t('hero.orderWolt')}</span>
                </a>
                <a
                  href={boltUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#34d399] hover:bg-[#059669] text-white px-8 py-4 rounded-xl font-bold text-base transition-transform hover:-translate-y-0.5 shadow"
                >
                  <ShoppingBag size={18} />
                  <span>{t('hero.orderBolt')}</span>
                </a>
                <Link
                  to="/menu"
                  className="flex items-center justify-center space-x-1 bg-brand-red hover:bg-brand-charcoal text-white px-8 py-4 rounded-xl font-bold text-base transition-colors shadow"
                >
                  <span>{t('hero.exploreMenu')}</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right Column Visual Pizza Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Pizza Plate Underlay Decoration */}
                <div className="absolute -inset-4 bg-brand-red/5 rounded-full blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
                  alt="Delicious Artisanal Pizza"
                  className="rounded-2xl w-80 h-80 sm:w-96 sm:h-96 object-cover border-8 border-white shadow-xl relative z-10 hover:rotate-6 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Accent Tags */}
                <div className="absolute top-12 -left-6 bg-brand-red text-white py-2 px-4 rounded-lg shadow-lg font-display font-bold text-sm tracking-tight z-20 transform -rotate-6">
                  {language === 'ka' ? 'ბესტსელერი ⭐' : 'Best Seller ⭐'}
                </div>
                <div className="absolute bottom-12 -right-4 bg-brand-gold text-brand-charcoal py-2 px-4 rounded-lg shadow-lg font-display font-bold text-sm tracking-tight z-20 transform rotate-3">
                  {language === 'ka' ? 'ჰალალ ქათამი 🍗' : 'Halal Chicken 🍗'}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES BADGES ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card bg-white p-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center text-center">
            {serviceBadges.map((badge, idx) => {
              const IconComp = badge.icon;
              return (
                <div key={idx} className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-red border border-brand-red/10">
                    <IconComp size={22} />
                  </div>
                  <h4 className="font-semibold text-brand-charcoal text-sm font-display">{badge.label}</h4>
                  <p className="text-xs text-gray-500">{badge.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. POPULAR MENU ITEMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <span className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] font-display">{t('home.favorites')}</span>
            <h2 className="text-3xl font-extrabold font-display text-brand-charcoal tracking-tight mt-1">{t('home.popularTitle')}</h2>
          </div>
          <Link
            to="/menu"
            className="flex items-center space-x-1 text-brand-red font-semibold hover:text-brand-charcoal transition-colors mt-4 md:mt-0"
          >
            <span>{t('home.viewFullMenu')}</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="card bg-white overflow-hidden animate-pulse h-96" />
            ))}
          </div>
        ) : popularProducts.length === 0 ? (
          <div className="text-center py-12 card bg-white">
            <p className="text-gray-500 font-medium">{t('home.noPopular')}</p>
            <Link to="/menu" className="mt-4 inline-block bg-brand-red hover:bg-brand-charcoal text-white py-2 px-6 rounded-xl font-medium">
              {t('hero.exploreMenu')}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularProducts.map((product) => {
              const discountedPrice = product.price - (product.price * product.discountPercentage / 100);
              const nameText = language === 'ka' ? (product.nameKa || product.name) : (product.nameEn || product.name);
              const descText = language === 'ka' ? (product.descriptionKa || product.description) : (product.descriptionEn || product.description);

              return (
                <div 
                  key={product._id} 
                  className="card bg-white overflow-hidden hover:border-brand-red/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative">
                    <img 
                      src={product.imageUrl} 
                      alt={nameText} 
                      className="w-full h-48 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {product.discountPercentage > 0 && (
                      <span className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold font-display tracking-tight py-1 px-2.5 rounded-full">
                        -{product.discountPercentage}% {t('menu.discount')}
                      </span>
                    )}
                    <span className="absolute top-3 right-3 bg-brand-gold text-brand-charcoal text-xxs font-bold font-display uppercase tracking-wider py-1 px-2.5 rounded-full shadow">
                      {language === 'ka' ? 'პოპულარული' : 'Popular'}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-brand-charcoal text-lg font-display leading-snug">{nameText}</h3>
                        <span className="text-xs bg-brand-cream text-brand-red font-semibold px-2 py-0.5 rounded-lg border border-brand-red/10">
                          {product.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{descText}</p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-baseline space-x-1.5">
                        {product.discountPercentage > 0 ? (
                          <>
                            <span className="text-lg font-extrabold text-brand-charcoal">{discountedPrice.toFixed(2)} ₾</span>
                            <span className="text-xs text-gray-400 line-through">{product.price.toFixed(2)} ₾</span>
                          </>
                        ) : (
                          <span className="text-lg font-extrabold text-brand-charcoal">{product.price.toFixed(2)} ₾</span>
                        )}
                      </div>

                      <Link 
                        to="/menu" 
                        className="bg-brand-red hover:bg-brand-charcoal text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors"
                      >
                        {t('home.orderNow')}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. SHORT ABOUT SECTION */}
      <section className="bg-white border-y border-gray-200/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] font-display">{t('home.whoWeAre')}</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-charcoal tracking-tight">
                {t('home.aboutTitle')}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {t('home.aboutDesc')}
              </p>
              <p className="text-gray-600 leading-relaxed text-base font-medium italic">
                {t('home.aboutQuote')}
              </p>
              <div className="flex items-center space-x-4 pt-2">
                <div className="flex items-center space-x-1.5 text-sm font-semibold text-brand-red">
                  <ShieldCheck size={18} />
                  <span>{language === 'ka' ? '100% ჰალალი' : '100% Halal Certified'}</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center space-x-1.5 text-sm font-semibold text-brand-red">
                  <Heart size={18} />
                  <span>{language === 'ka' ? 'მეგობრული გარემო' : 'LGBTQ+ Friendly'}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1547058886-af77d94436d2?w=400" 
                alt="Artisanal Falafel" 
                className="rounded-xl h-48 w-full object-cover border border-gray-100 shadow-sm"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1642821373181-696a54913e93?w=400" 
                alt="Tasty Chicken Shawarma" 
                className="rounded-xl h-48 w-full object-cover border border-gray-100 shadow-sm mt-6"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS / REVIEWS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] font-display">{t('home.lovedByLocals')}</span>
          <h2 className="text-3xl font-extrabold font-display text-brand-charcoal tracking-tight">{t('home.whatCustomersSay')}</h2>
          <div className="flex justify-center items-center space-x-1.5 text-brand-gold pt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={18} className="fill-brand-gold text-brand-gold" />
            ))}
            <span className="text-brand-charcoal font-bold ml-2 text-sm">{t('reviews.basedOn', { count: 293 })}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="card bg-white p-8 flex flex-col justify-between relative">
              <div className="absolute top-6 right-6 text-brand-red/10">
                <MessageSquare size={40} className="fill-brand-red/5" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-brand-gold">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{rev.text}"</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col">
                <span className="font-bold text-brand-charcoal text-sm">{rev.name}</span>
                <span className="text-xs text-brand-red font-semibold">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/reviews"
            className="inline-flex items-center space-x-1 bg-brand-charcoal hover:bg-brand-red text-white py-3 px-6 rounded-xl font-bold text-sm transition-colors shadow"
          >
            <span>{t('home.seeAllReviews')}</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {/* 6. MAP & LOCATION SECTION */}
      <section className="bg-brand-cream border-t border-gray-200/50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] font-display">{t('home.visitUs')}</span>
              <h2 className="text-3xl font-extrabold font-display text-brand-charcoal tracking-tight">{t('home.ourLocation')}</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t('home.locationDesc')}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="text-brand-red shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-brand-charcoal">{t('home.addressTitle')}</h4>
                    <p className="text-gray-600">{t('home.address')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-sm">
                  <Clock className="text-brand-red shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-brand-charcoal">{t('home.hoursTitle')}</h4>
                    <p className="text-gray-600">{t('home.hours')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-sm">
                  <Phone className="text-brand-red shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-brand-charcoal">{t('home.phoneTitle')}</h4>
                    <a href="tel:+995555633366" className="text-brand-red hover:underline font-semibold block mt-0.5">
                      {t('home.phone')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-gray-200 h-96 shadow-sm">
              <iframe
                title="Sams Pizza Tbilisi Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.3854124039864!2d44.7570659!3d41.7768565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044736f1b40093f%3A0xc34a413d2fa112e4!2sSam&#39;s%20Pizza!5e0!3m2!1sen!2sge!4v1700000000000!5m2!1sen!2sge"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
