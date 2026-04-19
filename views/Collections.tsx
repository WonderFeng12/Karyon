
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useTranslation } from 'react-i18next';

const Collections: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [selectedPlys, setSelectedPlys] = useState<string[]>([]);
  const [selectedWeight, setSelectedWeight] = useState<string | null>(null);
  
  const filteredProducts = PRODUCTS.filter(p => {
    if (categoryFilter && p.category !== categoryFilter) return false;
    if (selectedPlys.length > 0 && !selectedPlys.includes(p.ply)) return false;
    if (selectedWeight && p.weight !== selectedWeight) return false;
    return true;
  });

  const togglePly = (ply: string) => {
    setSelectedPlys(prev => prev.includes(ply) ? prev.filter(p => p !== ply) : [...prev, ply]);
  };

  return (
    <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 mb-6 text-sm">
        <Link className="text-slate-500 hover:text-primary transition-colors" to="/">{t('home')}</Link>
        <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
        <span className="font-bold text-slate-900 dark:text-white">{t('collections')}</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-2 serif-title">
            {t('collections')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-[#93adc8]">
            {t('collectionsDescription')}
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="sticky top-24 flex flex-col gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">filter_list</span>
                {t('filterResults')}
              </h3>
              
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">{t('materialType')}</p>
                <div className="flex flex-col gap-3">
                  {['2-Ply', '1-Ply'].map(ply => (
                    <label key={ply} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        checked={selectedPlys.includes(ply)}
                        onChange={() => togglePly(ply)}
                        className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" 
                        type="checkbox"
                      />
                      <span className="text-sm font-medium group-hover:text-primary">{ply} {t('luxury')}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">{t('weightClass')}</p>
                <div className="flex flex-wrap gap-2">
                  {['4.0 KG', '4.2 KG', '4.5 KG', '4.8 KG', '5.2 KG', '5.5 KG', '6.0 KG'].map(w => (
                    <button 
                      key={w}
                      onClick={() => setSelectedWeight(selectedWeight === w ? null : w)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${selectedWeight === w ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-[#243647]'}`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button 
              onClick={() => {setSelectedPlys([]); setSelectedWeight(null);}}
              className="w-full py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {t('resetAllFilters')}
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {selectedPlys.map(p => (
                <div key={p} className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold">
                  {p} <span className="material-symbols-outlined text-[14px] cursor-pointer" onClick={() => togglePly(p)}>close</span>
                </div>
              ))}
              {selectedWeight && (
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold">
                  {selectedWeight} <span className="material-symbols-outlined text-[14px] cursor-pointer" onClick={() => setSelectedWeight(null)}>close</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500">{t('sortBy')}:</span>
              <select className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer">
                <option>{t('newestArrival')}</option>
                <option>{t('weightHighToLow')}</option>
                <option>{t('mostPopular')}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="group relative bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden border border-gold/20 hover:border-gold transition-all duration-300 shadow-sm hover:shadow-xl">
                {product.bestSeller && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-accent-crimson text-white text-[10px] font-black uppercase tracking-widest rounded-sm">{t('bestSeller')}</span>
                  </div>
                )}
                <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={product.image} alt={product.name}/>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">{t('collection')}</p>
                  <h3 className="text-lg font-extrabold mb-2 leading-tight serif-title group-hover:text-primary transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                      <span className="material-symbols-outlined text-[16px]">layers</span> {product.ply}
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                      <span className="material-symbols-outlined text-[16px]">scale</span> {product.weight}
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                    {t('inquiryNow')}
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-slate-50 dark:bg-white/5 rounded-2xl border border-dashed border-white/20">
              <span className="material-symbols-outlined text-6xl text-slate-400 mb-4">inventory_2</span>
              <p className="text-lg font-bold">{t('noProductsFound')}</p>
              <button onClick={() => {setSelectedPlys([]); setSelectedWeight(null);}} className="text-primary font-bold mt-2 hover:underline">{t('clearAllFilters')}</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Collections;
