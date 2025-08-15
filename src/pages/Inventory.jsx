import { useState } from 'react';
import { clothes } from '../data/mockData';
import { Heart } from 'lucide-react';

export default function Inventory() {
  // We'll add filter logic later
  const [filter, setFilter] = useState('All');

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          {['Tops', 'Bottoms', 'Outerwear', 'Dresses', 'All'].map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full text-sm font-semibold bg-white border hover:bg-gray-100">
              {cat}
            </button>
          ))}
        </div>
        <button className="px-5 py-2 rounded-full font-semibold bg-gray-800 text-white hover:bg-gray-700">
          add clothes
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {clothes.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg border shadow-sm group relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors">
              <Heart size={20} />
            </button>
            <img src={item.src} alt={item.name} className="w-full h-48 object-contain mb-2" />
            <p className="text-center text-sm text-gray-600 truncate">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}