import React from 'react';
import { Star, MessageSquare, Quote, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Reviews() {
  const { language, t } = useLanguage();

  const ratingSummary = {
    average: 4.6,
    totalReviews: 293,
    distribution: [
      { stars: 5, count: 215, percentage: 73 },
      { stars: 4, count: 54, percentage: 18 },
      { stars: 3, count: 14, percentage: 5 },
      { stars: 2, count: 6, percentage: 2 },
      { stars: 1, count: 4, percentage: 1 },
    ],
  };

  const woltUrl = import.meta.env.VITE_WOLT_URL || 'https://wolt.com';
  const boltUrl = import.meta.env.VITE_BOLT_URL || 'https://food.bolt.eu';

  const reviewsList = [
    {
      id: 1,
      author: 'Levan M.',
      roleEn: 'Local Guide',
      roleKa: 'ადგილობრივი გიდი',
      rating: 5,
      dateEn: 'June 2026',
      dateKa: 'ივნისი 2026',
      textEn: 'The portion sizes here are massive compared to the prices! The food quality and friendly service are top-notch. Honestly, if they played some nice background music, this place would be absolute perfection!',
      textKa: 'ფასებთან შედარებით ულუფები საოცრად დიდია! საჭმლის ხარისხი და მეგობრული მომსახურება უმაღლესი დონისაა. სიმართლე გითხრათ, სასიამოვნო მუსიკაც რომ უკრავდეს ფონზე, ეს ადგილი აბსოლუტური სრულყოფილება იქნებოდა!',
      ownerResponseEn: 'Thank you so much, Levan! We are absolutely thrilled you enjoyed our generous portions and service. We hear you loud and clear on the music — we\'ve recently set up a beautiful ambient playlist in the dining area! Hope to serve you again soon!',
      ownerResponseKa: 'დიდი მადლობა, ლევან! მოხარულები ვართ, რომ მოგეწონათ ჩვენი გულუხვი ულუფები და მომსახურება. მუსიკასთან დაკავშირებული რჩევა გავითვალისწინეთ — ახლახან დავაყენეთ სასიამოვნო ემბიენთ ფლეილისტი დარბაზში! კვლავ გელით სიყვარულით!',
    },
    {
      id: 2,
      author: 'Aisha K.',
      roleEn: 'Verified Customer',
      roleKa: 'ვერიფიცირებული მომხმარებელი',
      rating: 5,
      dateEn: 'May 2026',
      dateKa: 'მაისი 2026',
      textEn: 'Finding authentic, delicious halal options in Tbilisi can be tough, but Sam\'s Pizza is amazing. The owner is so incredibly kind, and the chicken shawarma with their signature garlic sauce is to die for!',
      textKa: 'თბილისში ნამდვილი და გემრიელი ჰალალ კერძების პოვნა რთულია, მაგრამ სემის პიცა საოცარია. მეპატრონე საოცრად კეთილია, ქათმის შაურმა და მათი საფირმო ნიორის სოუსი კი - საუკეთესოა!',
      ownerResponseEn: 'Thank you, Aisha! Serving 100% halal options and providing a welcoming experience is very important to us. Our chicken shawarma garlic sauce is indeed a family secret! See you next time!',
      ownerResponseKa: 'გმადლობთ, აიშა! 100%-ით ჰალალ ვარიანტების შემოთავაზება და სტუმართმოყვარე გარემო ჩვენთვის ძალიან მნიშვნელოვანია. ჩვენი შაურმის ნიორის სოუსი ნამდვილად ოჯახური საიდუმლოა! მომავალ შეხვედრამდე!',
    },
    {
      id: 3,
      author: 'Nino T.',
      roleEn: 'Pizza Enthusiast',
      roleKa: 'პიცის მოყვარული',
      rating: 5,
      dateEn: 'April 2026',
      dateKa: 'აპრილი 2026',
      textEn: 'Their sourdough crust has the perfect chewiness and beautiful char. We ordered the Garlic Chicken Deluxe and the Four Cheese, and both were outstanding. Super quick takeaway too. Definitely our new favorite spot in Didi Dighomi!',
      textKa: 'მათ საფირმო ცომს იდეალური სტრუქტურა აქვს. შევუკვეთეთ ნივრიანი ქათმის დელუქსი და ოთხი ყველი - ორივე შესანიშნავი იყო. წასაღებად შეკვეთაც ძალიან სწრაფია. ნამდვილად ჩვენი ახალი საყვარელი ადგილია დიდ დიღომში!',
      ownerResponseEn: null,
      ownerResponseKa: null,
    },
    {
      id: 4,
      author: 'David S.',
      roleEn: 'Verified Customer',
      roleKa: 'ვერიფიცირებული მომხმარებელი',
      rating: 4,
      dateEn: 'March 2026',
      dateKa: 'მარტი 2026',
      textEn: 'Extremely fresh food and friendly staff. The Pepperoni pizza was fantastic. Docked one star just because the indoor seating is a bit small and it gets super busy during dinner rush. But delivery was super fast!',
      textKa: 'უახლესი პროდუქტები და მეგობრული პერსონალი. პეპერონი პიცა ფანტასტიკური იყო. ერთ ვარსკვლავს მხოლოდ იმიტომ ვაკლებ, რომ შიდა სივრცე ცოტა პატარაა და პიკის საათებში გადატვირთულია. თუმცა მიტანა საოცრად სწრაფია!',
      ownerResponseEn: 'Appreciate your honest feedback, David! Our dining space is indeed cozy, but we strive to get hot food out as fast as possible. Thank you for recommending our delivery!',
      ownerResponseKa: 'მადლობა გულწრფელი შეფასებისთვის, დავით! ჩვენი დარბაზი მართლაც მყუდროა, მაგრამ ვცდილობთ ცხელი საჭმელი უსწრაფესად მოგაწოდოთ. მადლობა ჩვენი მიტანის სერვისის რეკომენდაციისთვის!',
    },
    {
      id: 5,
      author: 'Mariam G.',
      roleEn: 'Local Resident',
      roleKa: 'ადგილობრივი მცხოვრები',
      rating: 5,
      dateEn: 'February 2026',
      dateKa: 'თებერვალი 2026',
      textEn: 'Excellent falafel (very crispy on the outside, fluffy inside) and amazing fries. Prices are so reasonable. If you live in Tbilisi, you have to try Sam\'s!',
      textKa: 'შესანიშნავი ფალაფელი (გარედან ძალიან ხრაშუნა, შიგნიდან ფუმფულა) და საოცარი ფრი. ფასები ძალიან მისაღებია. თუ თბილისში ცხოვრობთ, აუცილებლად უნდა გასინჯოთ სემის კერძები!',
      ownerResponseEn: 'Wow Mariam, thank you! We make our falafel fresh every morning from scratch, so we are glad you noticed the texture! Cheers!',
      ownerResponseKa: 'ვაუ მარიამ, გმადლობთ! ფალაფელს ყოველ დილით ნულიდან ვამზადებთ, ამიტომ გვიხარია რომ შეამჩნიეთ ხარისხი! გაიხარეთ!',
    }
  ];

  return (
    <div id="reviews-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] font-display">
          {language === 'ka' ? 'ჩვენი რეპუტაცია' : 'Our Reputation'}
        </span>
        <h1 className="text-4xl font-bold font-display text-brand-charcoal tracking-tight">
          {language === 'ka' ? 'რას ამბობს ხალხი ჩვენზე' : 'What Our Community Says'}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {language === 'ka'
            ? 'ჩვენ ორიენტირებული ვართ კულინარიულ სრულყოფილებასა და თბილ ქართულ სტუმართმოყვარეობაზე. გაეცანით ჩვენი ძვირფასი სტუმრების რეალურ გამოცდილებას.'
            : 'We are committed to culinary perfection and cozy Georgian hospitality. See the verified ratings and honest experiences shared by our valued guests.'}
        </p>
      </div>

      {/* Breakdown Dashboard Widget */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-8 card">
        
        {/* Left Column: Number */}
        <div className="md:col-span-4 text-center space-y-2 border-r border-gray-100 last:border-r-0 pb-6 md:pb-0">
          <h2 className="text-6xl font-extrabold font-display text-brand-charcoal">{ratingSummary.average}</h2>
          <div className="flex justify-center text-brand-gold">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={22} className="fill-brand-gold text-brand-gold" />
            ))}
          </div>
          <p className="text-sm text-gray-500 font-medium">
            {language === 'ka' ? `სულ ${ratingSummary.totalReviews} შეფასების საფუძველზე` : `Based on ${ratingSummary.totalReviews} total reviews`}
          </p>
        </div>

        {/* Middle Column: Chart Bars */}
        <div className="md:col-span-5 space-y-3">
          {ratingSummary.distribution.map((row) => (
            <div key={row.stars} className="flex items-center space-x-3 text-sm">
              <span className="w-10 font-bold text-gray-600 text-right">{row.stars} ★</span>
              <div className="flex-1 bg-brand-cream h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-brand-red h-full rounded-full" 
                  style={{ width: `${row.percentage}%` }}
                />
              </div>
              <span className="w-16 text-gray-500 text-left pl-1 font-medium">{row.count} ({row.percentage}%)</span>
            </div>
          ))}
        </div>

        {/* Right Column: Mini Info Strip */}
        <div className="md:col-span-3 text-center md:text-left space-y-4 md:pl-6">
          <h3 className="font-bold text-brand-charcoal text-lg font-display">
            {language === 'ka' ? 'მოგშივდათ?' : 'Craving our food?'}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            {language === 'ka' 
              ? 'შეუკვეთეთ მიტანის სერვისით თბილისის საუკეთესო პლატფორმებიდან:' 
              : "Order for delivery via Tbilisi's top delivery platforms:"}
          </p>
          <div className="flex flex-col space-y-2">
            <a
              href={woltUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#00c2e8] hover:bg-[#00a8ca] text-white py-2.5 px-4 rounded-xl text-xs font-bold shadow-sm"
            >
              <ShoppingBag size={14} />
              <span>{t('hero.orderWolt')}</span>
            </a>
            <a
              href={boltUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#34d399] hover:bg-[#059669] text-white py-2.5 px-4 rounded-xl text-xs font-bold shadow-sm"
            >
              <ShoppingBag size={14} />
              <span>{t('hero.orderBolt')}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Reviews List */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold font-display text-brand-charcoal flex items-center space-x-2">
          <MessageSquare size={22} className="text-brand-red" />
          <span>{language === 'ka' ? 'ბოლო შემოწმებული შეფასებები' : 'Latest Verified Reviews'}</span>
        </h3>

        <div className="grid grid-cols-1 gap-8">
          {reviewsList.map((review) => {
            const role = language === 'ka' ? review.roleKa : review.roleEn;
            const date = language === 'ka' ? review.dateKa : review.dateEn;
            const text = language === 'ka' ? review.textKa : review.textEn;
            const ownerResponse = language === 'ka' ? review.ownerResponseKa : review.ownerResponseEn;

            return (
              <div 
                key={review.id} 
                className="bg-white p-6 sm:p-8 card space-y-6 hover:border-brand-red/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-brand-cream border border-brand-red/10 flex items-center justify-center text-brand-red font-bold font-display">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-charcoal text-base">{review.author}</h4>
                      <span className="text-xs text-brand-red font-semibold">{role}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex text-brand-gold">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={16} 
                          className={star <= review.rating ? 'fill-brand-gold text-brand-gold' : 'text-gray-200'} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{date}</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-1 italic">
                  "{text}"
                </p>

                {/* Nested Owner Response */}
                {ownerResponse && (
                  <div className="bg-brand-cream border-l-4 border-brand-red rounded-r-xl p-5 ml-1 sm:ml-4 space-y-2 relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-brand-red/5">
                      <Quote size={32} />
                    </div>
                    <h5 className="font-bold text-xs text-brand-red uppercase tracking-[0.1em] font-display">
                      {language === 'ka' ? 'მეპატრონის პასუხი' : 'Response from Owner'}
                    </h5>
                    <p className="text-gray-600 text-sm leading-relaxed italic">
                      "{ownerResponse}"
                    </p>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
