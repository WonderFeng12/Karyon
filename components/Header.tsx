
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Header: React.FC = () => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const { t } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setShowLanguageSelector(false);
  };

  const currentLanguage = i18n.language;

  return (
    <header className="sticky top-0 z-50 w-full bg-background-dark/95 backdrop-blur-md border-b border-white/10 px-6 lg:px-20 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" style={{ backgroundColor: 'transparent' }}>
            <img src="/image/logo.png" alt="Raschel Luxury Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', backgroundColor: 'transparent', border: 'none', outline: 'none', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            <div className="flex flex-col">
              <h1 className="text-white text-xl font-bold leading-none tracking-tight serif-title"> LUXURY</h1>
            </div>
          </Link>
          
          <nav className="hidden xl:flex items-center gap-8">
            <Link className="text-white text-sm font-medium hover:text-gold transition-colors" to="/">{t('home')}</Link>
            <Link className="text-white text-sm font-medium hover:text-gold transition-colors" to="/collections">{t('products')}</Link>
            <Link className="text-white text-sm font-medium hover:text-gold transition-colors" to="/about">{t('about')}</Link>
            <Link className="text-white text-sm font-medium hover:text-gold transition-colors" to="/contact">{t('contact')}</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 focus-within:border-gold/50 transition-all">
            <span className="material-symbols-outlined text-white/50 text-xl">search</span>
            <input className="bg-transparent border-none text-sm focus:ring-0 text-white placeholder:text-white/30 w-48 lg:w-64" placeholder={t('search')} type="text"/>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <button 
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-all flex items-center gap-1"
                onClick={() => setShowLanguageSelector(!showLanguageSelector)}
              >
                <span className="material-symbols-outlined">language</span>
                <span className="hidden sm:inline text-sm">{currentLanguage === 'en' ? t('english') : currentLanguage === 'ar' ? t('arabic') : t('chinese')}</span>
              </button>
              {showLanguageSelector && (
                <div className="absolute right-0 mt-2 w-48 bg-background-dark border border-white/10 rounded-lg shadow-xl py-2 z-50">
                  <button
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${currentLanguage === 'en' ? 'text-gold bg-white/5' : 'text-white hover:bg-white/5'}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    <span className="flex items-center gap-2">
                      <span>🇺🇸</span>
                      <span>{t('english')}</span>
                    </span>
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${currentLanguage === 'ar' ? 'text-gold bg-white/5' : 'text-white hover:bg-white/5'}`}
                    onClick={() => handleLanguageChange('ar')}
                  >
                    <span className="flex items-center gap-2">
                      <span>🇸🇦</span>
                      <span>{t('arabic')}</span>
                    </span>
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${currentLanguage === 'zh' ? 'text-gold bg-white/5' : 'text-white hover:bg-white/5'}`}
                    onClick={() => handleLanguageChange('zh')}
                  >
                    <span className="flex items-center gap-2">
                      <span>🇨🇳</span>
                      <span>{t('chinese')}</span>
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
