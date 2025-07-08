import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

// 示例国家和运费数据，后续可动态生成
const countryRates = [
  { country: 'United States', code: 'US', rate: 8 }, // 单位：每件8美元
  { country: 'United Kingdom', code: 'UK', rate: 10 },
  { country: 'Germany', code: 'DE', rate: 9 },
  { country: 'Australia', code: 'AU', rate: 12 },
  { country: 'Japan', code: 'JP', rate: 7 },
  { country: 'China', code: 'CN', rate: 5 },
  // ... 可补充更多国家
];

export default function ShippingCostPage() {
  const { t } = useLanguage();
  const [country, setCountry] = useState('US');
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rate = countryRates.find(c => c.code === country)?.rate || 0;
    const total = rate * quantity;
    setResult(t('shippingCost.result', `Estimated shipping cost to ${countryRates.find(c => c.code === country)?.country}: $${total} USD (${quantity} unit${quantity > 1 ? 's' : ''})`));
  };

  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">{t('shippingCost.title', 'Shipping Cost Calculator')}</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
        <label className="font-semibold">{t('shippingCost.destinationCountry', 'Destination Country')}</label>
        <select
          className="border border-gray-300 rounded px-3 py-2"
          value={country}
          onChange={e => setCountry(e.target.value)}
        >
          {countryRates.map(c => (
            <option key={c.code} value={c.code}>{t(`shippingCost.countries.${c.code}`, c.country)}</option>
          ))}
        </select>
        <label className="font-semibold">{t('shippingCost.productQuantity', 'Product Quantity')}</label>
        <input
          type="number"
          min={1}
          className="border border-gray-300 rounded px-3 py-2"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
        />
        <button type="submit" className="bg-blue-700 text-white font-bold py-2 rounded hover:bg-blue-800 transition">{t('shippingCost.calculate', 'Calculate')}</button>
      </form>
      {result && (
        <div className="mt-6 p-4 bg-blue-50 rounded text-blue-700 font-semibold text-center border border-blue-200">{result}</div>
      )}
    </div>
  );
} 