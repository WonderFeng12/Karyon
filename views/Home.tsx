
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS, EMAILJS_CONFIG } from '../constants';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Home: React.FC = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const { t } = useTranslation();
  
  // Form state for partner inquiry
  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [requirements, setRequirements] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      
      const templateParams = {
        company_name: companyName,
        business_email: businessEmail,
        requirements: requirements
      };
      
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATES.PARTNER_INQUIRY,
        templateParams
      );
      
      setSubmissionSuccess(true);
      // Reset form
      setCompanyName('');
      setBusinessEmail('');
      setRequirements('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmissionSuccess(false), 3000);
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto carousel for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev === PRODUCTS.length - 1 ? 0 : prev + 1));
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev === 0 ? PRODUCTS.length - 1 : prev - 1));
  };

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section - Image Carousel */}
      <section className="relative w-full">
        <div className="max-w-[1440px] mx-auto lg:p-6">
          <div className="relative min-h-[600px] overflow-hidden rounded-xl">
            {[
              {
              image: '/image/hero-image.jpg',
              title: t('premiumRaschel'),
              subtitle: t('craftedExpertise'),
              description: t('heroDescription')
            },
            {
              image: '/image/product-1.jpg',
              title: t('premiumRaschel'),
              subtitle: t('craftedExpertise'),
              description: t('heroDescription')
            },
            {
              image: '/image/product-5.jpg',
              title: t('premiumRaschel'),
              subtitle: t('craftedExpertise'),
              description: t('heroDescription')
            }
            ].map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 min-h-[600px] flex items-center transition-opacity duration-1000 ${index === currentHeroSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ 
                    backgroundImage: `linear-gradient(to right, rgba(17, 25, 33, 0.9) 0%, rgba(17, 25, 33, 0.4) 50%, rgba(17, 25, 33, 0.1) 100%), url('${slide.image}')` 
                  }}
                ></div>
                <div className="absolute inset-0 islamic-pattern opacity-10"></div>
                <div className="relative z-10 px-8 lg:px-20 max-w-3xl">
                  <div className="inline-block px-3 py-1 bg-gold/20 border border-gold/40 rounded-full mb-6">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest">Premium Export Quality</span>
                  </div>
                  <h2 className="text-white text-5xl lg:text-7xl font-bold leading-tight serif-title mb-6">
                    <span className="whitespace-nowrap">{slide.title}</span>
                    <div className="text-gold italic">{slide.subtitle}</div>
                  </h2>
                  <p className="text-white/80 text-lg lg:text-xl max-w-xl mb-10 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white text-lg font-bold px-8 py-4 rounded-lg flex items-center gap-2 transition-transform active:scale-95 shadow-xl shadow-primary/20">
                      {t('wholesaleInquiries')}
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                    <Link to="/collections" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 text-lg font-bold px-8 py-4 rounded-lg transition-all">
                      {t('viewCollection')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentHeroSlide ? 'bg-gold w-8' : 'bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 w-full">
        <div className="max-w-[1440px] mx-auto lg:p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {
            [
              { icon: 'public', label: t('globalExports'), value: t('countries') },
              { icon: 'palette', label: t('customDesigns'), value: t('patterns') },
              { icon: 'factory', label: t('monthlyCapacity'), value: t('units') },
              { icon: 'verified', label: t('qualityAssurance'), value: t('isoCertified') }
            ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-xl group hover:border-gold/50 transition-colors">
              <div className="text-gold mb-4">
                <span className="material-symbols-outlined text-4xl">{stat.icon}</span>
              </div>
              <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-white text-3xl font-bold serif-title">{stat.value}</p>
              <div className="w-12 h-1 bg-gold mt-4 group-hover:w-24 transition-all"></div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-white/5 relative">
        <div className="absolute inset-0 islamic-pattern opacity-5 pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">{t('ourCatalog')}</h3>
              <h2 className="text-white text-4xl font-bold serif-title">{t('productCategories')}</h2>
            </div>
            <Link className="text-gold font-bold flex items-center gap-2 hover:underline" to="/collections">
              {t('viewAllCollections')} <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} to={`/collections?category=${cat.name}`} className="relative group cursor-pointer overflow-hidden rounded-xl bg-background-dark border border-white/10 shadow-2xl">
                <div 
                  className="aspect-[4/5] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `linear-gradient(0deg, rgba(17, 25, 33, 0.9) 0%, rgba(17, 25, 33, 0) 50%), url('${cat.image}')` }}
                ></div>
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="h-0.5 w-0 bg-gold mb-4 transition-all duration-500 group-hover:w-full"></div>
                  <h4 className="text-white text-2xl font-bold serif-title mb-2">{t(cat.name.replace(/\s+/g, '').replace(/^./, str => str.toLowerCase()))}</h4>
                  <p className="text-white/60 text-sm line-clamp-2 mb-4">{t(cat.name.replace(/\s+/g, '').replace(/^./, str => str.toLowerCase()) + 'Desc')}</p>
                  <button className="text-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {t('exploreCollection')} <span className="material-symbols-outlined text-sm">north_east</span>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Trust / CTA Section */}
      <section className="py-24 px-6 lg:px-20 max-w-[1440px] mx-auto overflow-hidden">
        <div className="bg-primary rounded-2xl p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <pattern height="10" id="grid" patternUnits="userSpaceOnUse" width="10">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"></path>
              </pattern>
              <rect fill="url(#grid)" height="100" width="100"></rect>
            </svg>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-white text-4xl lg:text-5xl font-bold serif-title mb-6 leading-tight">{t('scaleBusiness')}</h2>
              <p className="text-white/80 text-lg mb-8">{t('b2bDescription')}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold">verified</span>
                  <span className="text-white text-sm font-bold">{t('oemReady')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold">local_shipping</span>
                  <span className="text-white text-sm font-bold">{t('fastLogistics')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold">support_agent</span>
                  <span className="text-white text-sm font-bold">{t('accountManager')}</span>
                </div>
              </div>
            </div>
            <div className="bg-background-dark p-8 rounded-xl border border-gold/30 shadow-2xl w-full max-w-md">
              <h3 className="text-white text-xl font-bold mb-6 serif-title">{t('partnerInquiry')}</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {submissionSuccess && (
                  <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-4 text-green-400 text-sm">
                    Message sent successfully!
                  </div>
                )}
                <input 
                  className="w-full bg-white/5 border-white/10 rounded-lg text-sm text-white focus:border-gold focus:ring-gold transition-all" 
                  placeholder={t('companyName')} 
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
                <input 
                  className="w-full bg-white/5 border-white/10 rounded-lg text-sm text-white focus:border-gold focus:ring-gold transition-all" 
                  placeholder={t('businessEmail')} 
                  type="email"
                  value={businessEmail}
                  onChange={(e) => setBusinessEmail(e.target.value)}
                  required
                />
                <textarea 
                  className="w-full bg-white/5 border-white/10 rounded-lg text-sm text-white focus:border-gold focus:ring-gold transition-all" 
                  placeholder={t('requirements')} 
                  rows={3}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  required
                ></textarea>
                <button 
                  className="w-full bg-gold text-background-dark font-bold py-3 rounded-lg hover:bg-gold/90 transition-all uppercase tracking-widest text-xs" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : t('sendInquiry')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
