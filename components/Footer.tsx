
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-background-dark border-t border-white/10 py-16 px-6 lg:px-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-8 text-gold">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold serif-title">RASCHEL LUXURY</h2>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            {t('footerDescription')}
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/50 hover:text-gold transition-colors" href="#"><span className="material-symbols-outlined text-xl">language</span></a>
            <a className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/50 hover:text-gold transition-colors" href="#"><span className="material-symbols-outlined text-xl">share</span></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{t('quickLinks')}</h4>
          <ul className="space-y-4">
            <li><Link className="text-white/50 text-sm hover:text-gold transition-colors" to="/collections">{t('newArrivals')}</Link></li>
            <li><Link className="text-white/50 text-sm hover:text-gold transition-colors" to="/collections">{t('bestSellers')}</Link></li>
            <li><Link className="text-white/50 text-sm hover:text-gold transition-colors" to="/collections">{t('customManufacturing')}</Link></li>
            <li><Link className="text-white/50 text-sm hover:text-gold transition-colors" to="/">{t('exportPolicy')}</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{t('support')}</h4>
          <ul className="space-y-4">
            <li><a className="text-white/50 text-sm hover:text-gold transition-colors" href="#">{t('wholesaleGuide')}</a></li>
            <li><a className="text-white/50 text-sm hover:text-gold transition-colors" href="#">{t('shippingReturns')}</a></li>
            <li><a className="text-white/50 text-sm hover:text-gold transition-colors" href="#">{t('qualityAssurance')}</a></li>
            <li><a className="text-white/50 text-sm hover:text-gold transition-colors" href="#">{t('contactSupport')}</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{t('contactUs')}</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-white/50 text-sm">
              <span className="material-symbols-outlined text-gold text-lg">location_on</span>
              {t('address')}
            </li>
            <li className="flex items-center gap-3 text-white/50 text-sm">
              <span className="material-symbols-outlined text-gold text-lg">mail</span>
              {t('email')}
            </li>
            <li className="flex items-center gap-3 text-white/50 text-sm">
              <span className="material-symbols-outlined text-gold text-lg">call</span>
              {t('phone')}
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-xs">{t('copyright')}</p>
        <div className="flex gap-6">
          <a className="text-white/30 text-xs hover:text-white transition-colors" href="#">{t('privacyPolicy')}</a>
          <a className="text-white/30 text-xs hover:text-white transition-colors" href="#">{t('termsOfTrade')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
