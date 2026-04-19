import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { COMPANY_CONTACT, EMAILJS_CONFIG } from '../constants';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  // Form state for contact form
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryRegion, setCountryRegion] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS
      emailjs.init('p2Vz-kKqZbr9c2M2m');
      
      // Use form field values
      const templateParams = {
        company_name: companyName,
        name: name,
        email: email,
        phone: phone,
        country_region: countryRegion,
        inquiry_type: inquiryType,
        message: message
      };
      
      await emailjs.send(
        'service_karyon-reton',
        'template_nmxq74w',
        templateParams
      );
      
      setSubmissionSuccess(true);
      // Reset form
      setCompanyName('');
      setName('');
      setEmail('');
      setPhone('');
      setCountryRegion('');
      setInquiryType('');
      setMessage('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmissionSuccess(false), 3000);
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-[800px] py-20 px-6 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-gold/20 border border-gold/40 rounded-full mb-4">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">{t('getInTouch')}</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-bold serif-title mb-6">
            {t('wholesaleInquiries')}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-xl">
            <h2 className="text-white text-2xl font-bold serif-title mb-8">{t('sendMessage')}</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {submissionSuccess && (
                <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-4 text-green-400 text-sm">
                  Message sent successfully!
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">{t('companyName')} *</label>
                  <input 
                    type="text" 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    placeholder={t('companyName')}
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">{t('name')} *</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    placeholder={t('name')}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">{t('email')} *</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    placeholder={t('email')}
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">{t('phone')}</label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    placeholder={t('phone')}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">{t('countryRegion')} *</label>
                <input 
                  type="text" 
                  value={countryRegion}
                  onChange={(e) => setCountryRegion(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  placeholder="Your country or region"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">{t('inquiryType')} *</label>
                <select 
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  required
                >
                  <option value="">{t('selectOption')}</option>
                  <option value="wholesale">{t('wholesalePricing')}</option>
                  <option value="custom">{t('customManufacturing')}</option>
                  <option value="sample">{t('sampleRequest')}</option>
                  <option value="other">{t('otherInquiry')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">{t('message')} *</label>
                <textarea 
                  rows={5} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  placeholder={t('message')}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all shadow-xl shadow-primary/20"
              >
                {isSubmitting ? 'Sending...' : t('sendInquiry')}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-xl">
              <h2 className="text-white text-2xl font-bold serif-title mb-6">{t('getInTouch')}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold/20 p-3 rounded-full text-gold">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{t('address')}</h3>
                  <p className="text-white/60">{t('addressValue')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold/20 p-3 rounded-full text-gold">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{t('email')}</h3>
                  <p className="text-white/60">{COMPANY_CONTACT.EMAIL}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold/20 p-3 rounded-full text-gold">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{t('phone')}</h3>
                  <p className="text-white/60">{COMPANY_CONTACT.PHONE}</p>
                </div>
              </div>
            </div>
            </div>
            
            {/* Why Choose Us */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-xl">
              <h2 className="text-white text-2xl font-bold serif-title mb-6">{t('whyChooseUs')}</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-gold material-symbols-outlined">check_circle</span>
                  <span className="text-white/80">{t('yearsManufacturing')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold material-symbols-outlined">check_circle</span>
                  <span className="text-white/80">{t('directFactory')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold material-symbols-outlined">check_circle</span>
                  <span className="text-white/80">{t('customDesign')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold material-symbols-outlined">check_circle</span>
                  <span className="text-white/80">{t('fastShipping')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold material-symbols-outlined">check_circle</span>
                  <span className="text-white/80">{t('dedicatedAccount')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;