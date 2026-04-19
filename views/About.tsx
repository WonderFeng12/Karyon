import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-[800px] py-20 px-6 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-gold/20 border border-gold/40 rounded-full mb-4">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">{t('ourStory')}</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-bold serif-title mb-6">
            {t('aboutRaschelLuxury')}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t('yearsOfExperience')}
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-white text-3xl font-bold serif-title">{t('ourLegacy')}</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              {t('founded2004')}
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              {t('journeyMission')}
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-gold text-4xl font-bold mb-2">20+</div>
                <p className="text-white/60">{t('yearsExp')}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-gold text-4xl font-bold mb-2">50+</div>
                <p className="text-white/60">{t('exportCountries')}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-gold text-4xl font-bold mb-2">1000+</div>
                <p className="text-white/60">{t('customDesignsCount')}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-gold text-4xl font-bold mb-2">200k</div>
                <p className="text-white/60">{t('monthlyCapacityCount')}</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 rounded-xl transform -translate-x-4 translate-y-4"></div>
            <div className="relative bg-background-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/image/hero-image.jpg" 
                alt="Raschel Luxury Manufacturing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-20">
          <h2 className="text-white text-3xl font-bold serif-title text-center mb-12">{t('ourValues')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center group hover:border-gold/50 transition-all">
              <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center text-gold text-2xl mb-6 group-hover:bg-gold/30 transition-all">
                <span className="material-symbols-outlined">shield</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">{t('uncompromisedQuality')}</h3>
              <p className="text-white/60">{t('qualityDesc')}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center group hover:border-gold/50 transition-all">
              <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center text-gold text-2xl mb-6 group-hover:bg-gold/30 transition-all">
                <span className="material-symbols-outlined">design_services</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">{t('craftsmanshipTitle')}</h3>
              <p className="text-white/60">{t('craftsmanshipDesc')}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center group hover:border-gold/50 transition-all">
              <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center text-gold text-2xl mb-6 group-hover:bg-gold/30 transition-all">
                <span className="material-symbols-outlined">people_alt</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">{t('customerFocusTitle')}</h3>
              <p className="text-white/60">{t('customerFocusDesc')}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center group hover:border-gold/50 transition-all">
              <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center text-gold text-2xl mb-6 group-hover:bg-gold/30 transition-all">
                <span className="material-symbols-outlined">globe</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">{t('sustainablePractices')}</h3>
              <p className="text-white/60">{t('sustainableDesc')}</p>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h2 className="text-white text-3xl font-bold serif-title text-center mb-8">{t('solutions')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="/solutionA" 
              className="block bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/50 transition-all group"
            >
              <div className="bg-gold/20 w-12 h-12 rounded-lg flex items-center justify-center text-gold mb-4 group-hover:bg-gold/30 transition-all text-xl">
                A
              </div>
              <h3 className="text-white text-lg font-bold mb-2">{t('solutionA')}</h3>
              <p className="text-white/60 text-sm">{t('solutionADesc')}</p>
            </a>
            <a 
              href="/solutionB" 
              className="block bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/50 transition-all group"
            >
              <div className="bg-gold/20 w-12 h-12 rounded-lg flex items-center justify-center text-gold mb-4 group-hover:bg-gold/30 transition-all text-xl">
                B
              </div>
              <h3 className="text-white text-lg font-bold mb-2">{t('solutionB')}</h3>
              <p className="text-white/60 text-sm">{t('solutionBDesc')}</p>
            </a>
            <a 
              href="/solutionC" 
              className="block bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/50 transition-all group"
            >
              <div className="bg-gold/20 w-12 h-12 rounded-lg flex items-center justify-center text-gold mb-4 group-hover:bg-gold/30 transition-all text-xl">
                C
              </div>
              <h3 className="text-white text-lg font-bold mb-2">{t('solutionC')}</h3>
              <p className="text-white/60 text-sm">{t('solutionCDesc')}</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;