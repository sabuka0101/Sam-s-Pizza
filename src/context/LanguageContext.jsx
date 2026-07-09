import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.reviews': 'Reviews',
    
    // Hero
    'hero.title1': 'Best',
    'hero.title2': 'Pizza',
    'hero.title3': 'in Town.',
    'hero.subtitle': 'Handcrafted sourdough pizza, legendary shawarma, and the best falafel on Mirian Mepe St. Authentic flavors, served with kindness.',
    'hero.openNow': 'Open Now',
    'hero.closed': 'Closed (Opens 10 AM)',
    'hero.avgPerson': 'Avg. per person',
    'hero.exploreMenu': 'Explore Menu',
    'hero.orderWolt': 'Order on Wolt',
    'hero.orderBolt': 'Order on Bolt',
    
    // Home sections
    'home.favorites': 'Customer Favorites',
    'home.popularTitle': 'Popular Menu Items',
    'home.viewFullMenu': 'View Full Menu',
    'home.noPopular': 'No popular items found. Explore the full menu below.',
    'home.orderNow': 'Order Now',
    'home.whoWeAre': 'Who We Are',
    'home.aboutTitle': 'Authentic Taste, Warm Georgian Hospitality',
    'home.aboutDesc': "Sam's Pizza is a beloved family-owned culinary landmark located on Mirian Mepe Street in Didi Dighomi, Tbilisi. We take incredible pride in our craftsmanship, preparing traditional sourdough crusts baked to bubbly golden perfection, rich garlic chicken specialties, premium beef pepperoni, and authentic crispy shawarmas.",
    'home.aboutQuote': '"Our philosophy is simple: serve large, satisfying portions at competitive, transparent prices, and treat every single guest like our own family."',
    'home.lovedByLocals': 'Loved by Locals',
    'home.whatCustomersSay': 'What Our Customers Say',
    'home.seeAllReviews': 'See All Reviews & Breakdown',
    'home.visitUs': 'Visit Us',
    'home.ourLocation': 'Our Location',
    'home.locationDesc': 'We are conveniently located in the vibrant district of Didi Dighomi, Tbilisi. Dine in with us in our clean, cozy shop, or order for immediate takeaway!',
    'home.addressTitle': 'Address',
    'home.address': 'T, 100 Mirian Mepe St, Tbilisi 0158, Georgia',
    'home.phoneTitle': 'Phone Number',
    'home.phone': '555 63 33 66 (Tap to Call)',
    'home.hoursTitle': 'Working Hours',
    'home.hours': 'Open Daily: 10:00 AM - 9:00 PM',
    
    // Menu
    'menu.freshDelicious': 'Fresh & Delicious Daily',
    'menu.title': "Sam's Pizza Menu",
    'menu.subtitle': 'We use only fresh ingredients, daily made dough, and premium halal meats. Browse our categories and find your favorites.',
    'menu.searchPlaceholder': 'Search our delicious dishes...',
    'menu.noItemsFound': 'No Menu Items Found',
    'menu.noItemsDesc': 'Try adjusting your search or category filter to find what you are looking for.',
    'menu.showAll': 'Show All',
    'menu.discount': 'OFF',
    'menu.outOfStock': 'Out of Stock',
    'menu.rating': 'Rated',
    
    // Reviews
    'reviews.reputation': 'Our Reputation',
    'reviews.title': 'What Our Community Says',
    'reviews.subtitle': 'Real reviews from our lovely guests. We read every response to keep improving our service!',
    'reviews.basedOn': 'Based on {count} total reviews',
    'reviews.latestVerified': 'Latest Verified Reviews',
    'reviews.responseFromOwner': 'Response from Owner',
    
    // Footer
    'footer.desc': 'Serving the absolute best pizza, crispy shawarma, house-made falafel, fresh salads, and golden fries in Tbilisi, Georgia. Halal options available.',
    'footer.halal': 'Halal Available',
    'footer.delivery': 'Delivery & Takeaway',
    'footer.quickLinks': 'Quick Links',
    'footer.copyright': '© {year} Sam\'s Pizza. All rights reserved.',
    'footer.byLine': 'Made with passion on Mirian Mepe St.',
  },
  ka: {
    // Nav
    'nav.home': 'მთავარი',
    'nav.menu': 'მენიუ',
    'nav.reviews': 'შეფასებები',
    
    // Hero
    'hero.title1': 'საუკეთესო',
    'hero.title2': 'პიცა',
    'hero.title3': 'ქალაქში.',
    'hero.subtitle': 'ხელნაკეთი პიცა საფუვრიან ცომზე, ლეგენდარული შაურმა და საუკეთესო ფალაფელი მირიან მეფის ქუჩაზე. ავთენტური გემო, სიყვარულით დამზადებული.',
    'hero.openNow': 'ახლა ღიაა',
    'hero.closed': 'დაკეტილია (იღება 10:00-ზე)',
    'hero.avgPerson': 'საშუალო ფასი',
    'hero.exploreMenu': 'მენიუს ნახვა',
    'hero.orderWolt': 'შეუკვეთე Wolt-ზე',
    'hero.orderBolt': 'შეუკვეთე Bolt-ზე',
    
    // Home sections
    'home.favorites': 'მომხმარებელთა რჩეული',
    'home.popularTitle': 'პოპულარული კერძები',
    'home.viewFullMenu': 'სრული მენიუ',
    'home.noPopular': 'პოპულარული კერძები ვერ მოიძებნა. იხილეთ სრული მენიუ.',
    'home.orderNow': 'შეკვეთა',
    'home.whoWeAre': 'ვინ ვართ ჩვენ',
    'home.aboutTitle': 'ავთენტური გემო, თბილი ქართული სტუმარმასპინძლობა',
    'home.aboutDesc': "სემის პიცა არის საყვარელი საოჯახო კულინარიული ადგილი, რომელიც მდებარეობს მირიან მეფის ქუჩაზე, დიდ დიღომში, თბილისში. ჩვენ ვამაყობთ ჩვენი ხელოვნებით, ვამზადებთ ტრადიციულ საფუვრიან ცომს, რომელიც ცხვება ოქროსფერამდე, ნივრიანი ქათმის დელიკატესებს, პრემიუმ პეპერონსა და ავთენტურ ხრაშუნა შაურმას.",
    'home.aboutQuote': '"ჩვენი ფილოსოფია მარტივია: შემოგთავაზოთ დიდი, ნოყიერი პორციები მისაღებ, გამჭვირვალე ფასებში და თითოეულ სტუმარს მოვეპყრათ როგორც საკუთარი ოჯახის წევრს."',
    'home.lovedByLocals': 'ადგილობრივების საყვარელი',
    'home.whatCustomersSay': 'რას ამბობენ ჩვენი მომხმარებლები',
    'home.seeAllReviews': 'ყველა შეფასების ნახვა',
    'home.visitUs': 'გვესტუმრეთ',
    'home.ourLocation': 'ჩვენი მდებარეობა',
    'home.locationDesc': 'ჩვენ მოსახერხებლად ვმდებარეობთ დიდ დიღომში, თბილისში. გვესტუმრეთ ჩვენს სუფთა, მყუდრო ობიექტში ან შეუკვეთეთ გასატანად!',
    'home.addressTitle': 'მისამართი',
    'home.address': 'მირიან მეფის ქუჩა 100, თბილისი 0158, საქართველო',
    'home.phoneTitle': 'ტელეფონის ნომერი',
    'home.phone': '555 63 33 66 (დარეკვა)',
    'home.hoursTitle': 'სამუშაო საათები',
    'home.hours': 'ღიაა ყოველდღე: 10:00 - 21:00',
    
    // Menu
    'menu.freshDelicious': 'ახალი და გემრიელი ყოველდღე',
    'menu.title': 'სემის პიცის მენიუ',
    'menu.subtitle': 'ჩვენ ვიყენებთ მხოლოდ ახალ ინგრედიენტებს, ყოველდღიურად მომზადებულ ცომსა და პრემიუმ ჰალალ ხორცს. იპოვეთ თქვენი ფავორიტები.',
    'menu.searchPlaceholder': 'მოძებნე უგემრიელესი კერძები...',
    'menu.noItemsFound': 'კერძები ვერ მოიძებნა',
    'menu.noItemsDesc': 'სცადეთ შეცვალოთ ძიების ტექსტი ან კატეგორია.',
    'menu.showAll': 'ყველა',
    'menu.discount': 'ფასდაკლება',
    'menu.outOfStock': 'ამოწურულია',
    'menu.rating': 'შეფასება',
    
    // Reviews
    'reviews.reputation': 'ჩვენი რეპუტაცია',
    'reviews.title': 'რას ამბობს ხალხი ჩვენზე',
    'reviews.subtitle': 'ნამდვილი შეფასებები ჩვენი ძვირფასი სტუმრებისგან. ჩვენ ვკითხულობთ თითოეულ მათგანს მომსახურების გასაუმჯობესებლად!',
    'reviews.basedOn': 'ეფუძნება სულ {count} შეფასებას',
    'reviews.latestVerified': 'ბოლო ვერიფიცირებული შეფასებები',
    'reviews.responseFromOwner': 'პასუხი მფლობელისგან',
    
    // Footer
    'footer.desc': 'საუკეთესო პიცა, ხრაშუნა შაურმა, ხელნაკეთი ფალაფელი, ახალი სალათები და კარტოფილი ფრი თბილისში. ხელმისაწვდომია ჰალალ ვარიანტები.',
    'footer.halal': 'ხელმისაწვდომია ჰალალი',
    'footer.delivery': 'მიტანა და გასატანი',
    'footer.quickLinks': 'სწრაფი ბმულები',
    'footer.copyright': '© {year} სემის პიცა. ყველა უფლება დაცულია.',
    'footer.byLine': 'დამზადებულია სიყვარულით მირიან მეფის ქუჩაზე.',
  }
};

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'ka') return saved;
    // Default to Georgian as the app is in Tbilisi, or English as base
    return 'en';
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key, replacements) => {
    let text = translations[language][key] || translations['en'][key] || key;
    
    if (replacements) {
      Object.entries(replacements).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
