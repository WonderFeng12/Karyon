
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Product not found</h2>
        <Link to="/collections" className="text-primary font-bold hover:underline">Back to collections</Link>
      </div>
    );
  }

  return (
    <main className="max-w-[1280px] mx-auto px-6 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 mb-6 text-sm">
        <Link className="text-slate-500 hover:text-primary transition-colors" to="/">Catalog</Link>
        <span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
        <Link className="text-slate-500 hover:text-primary transition-colors" to="/collections">Premium Blankets</Link>
        <span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
        <span className="text-gold font-semibold uppercase tracking-wider text-xs">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-surface-dark aspect-[4/3] shadow-2xl">
            <div className="absolute top-4 left-4 bg-gold text-black font-bold px-3 py-1 rounded text-xs z-10">PREMIUM QUALITY</div>
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={product.image} alt={product.name}/>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`min-w-[120px] aspect-square rounded-lg border-2 ${i === 1 ? 'border-primary' : 'border-slate-200 dark:border-slate-800'} overflow-hidden cursor-pointer hover:border-primary transition-colors`}>
                <img src={product.image} className="w-full h-full object-cover" alt={`Thumb ${i}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white serif-title">{product.name}</h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-4">{product.collection}</p>
            <div className="flex items-center gap-4 py-3 border-y border-slate-200 dark:border-slate-800">
              <div className="flex text-gold">
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined">star</span>)}
              </div>
              <span className="text-sm text-slate-500">2,400+ Bulk Units Exported</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-slate-800">
              <p className="text-slate-500 text-xs font-semibold uppercase mb-1">Wholesale MOQ</p>
              <p className="text-xl font-bold text-primary">500 Pieces</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-slate-800">
              <p className="text-slate-500 text-xs font-semibold uppercase mb-1">Lead Time</p>
              <p className="text-xl font-bold text-primary">15-20 Days</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-gold">rule</span>
              Specifications
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Material', value: '100% High-Density Raschel' },
                { label: 'Weight', value: product.weight },
                { label: 'Ply', value: product.ply },
                { label: 'Size', value: product.size },
                { label: 'Finish', value: 'Anti-static, Double-Brushed' }
              ].map((spec, idx) => (
                <li key={idx} className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">{spec.label}</span>
                  <span className="font-medium">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">request_quote</span>
              Inquiry for Wholesale Price
            </button>
            <div className="flex gap-3">
              <button className="flex-1 border border-slate-300 dark:border-slate-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined text-green-500">chat</span>
                WhatsApp Agent
              </button>
              <button className="flex-1 border border-slate-300 dark:border-slate-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined text-slate-500">download</span>
                Full Catalog
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-30 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-light dark:bg-background-dark px-6">
            <span className="material-symbols-outlined text-gold opacity-50 text-3xl">grid_view</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-gold/20 p-2 rounded-lg">
              <span className="material-symbols-outlined text-gold">settings_suggest</span>
            </div>
            <h2 className="text-2xl font-bold serif-title">Customization Options</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: 'format_paint', title: 'Bespoke Embroidery', desc: 'Custom logo and pattern embroidery for hotel chains.' },
              { icon: 'inventory_2', title: 'Custom Packaging', desc: 'Branded heavy-duty PVC bags with gold-foil handles.' },
              { icon: 'sell', title: 'Private Labeling', desc: 'Satin woven tags customized to your brand specs.' }
            ].map((opt, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark flex gap-4 hover:border-gold/50 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">{opt.icon}</span>
                <div>
                  <h4 className="font-bold mb-1">{opt.title}</h4>
                  <p className="text-sm text-slate-500">{opt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary">local_shipping</span>
            </div>
            <h2 className="text-2xl font-bold serif-title">Shipping & Packing</h2>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-4 font-bold">Feature</th>
                  <th className="px-6 py-4 font-bold">Standard Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="px-6 py-4 text-slate-500">Export Packing</td>
                  <td className="px-6 py-4">Compressed Bales or Cardboard Cartons</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-500">Container Load (40HQ)</td>
                  <td className="px-6 py-4">Approx. 4,200 Pieces (Compressed)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-500">Main Ports</td>
                  <td className="px-6 py-4">Jebel Ali (Dubai), Jeddah (KSA)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-500">Certifications</td>
                  <td className="px-6 py-4">ISO 9001, OEKO-TEX Standard 100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-gold/10 border border-gold/20 rounded-lg text-sm italic">
            * Sample items can be dispatched via DHL/FedEx within 3-5 business days. Cost refundable on first bulk order.
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetail;
