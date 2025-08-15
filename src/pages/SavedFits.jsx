import { useState } from 'react';
import { savedFits } from '../data/mockData';
import { Heart } from 'lucide-react';

export default function SavedFits() {
  const [filter, setFilter] = useState('All');

  return (
    <div className="container mx-auto">
      <div className="flex justify-start items-center mb-6">
        <div className="flex space-x-2">
          {['Favorite', 'All'].map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full text-sm font-semibold bg-white border hover:bg-gray-100">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {savedFits.map((fit) => (
          <div key={fit.id} className="bg-white p-4 rounded-lg border shadow-sm group relative">
            <button className="absolute top-3 right-3 text-violet-400">
                <Heart size={20} fill="currentColor" />
            </button>
            <div className="relative h-82 flex items-center justify-center">
                <img src={fit.bottom.src} alt={fit.bottom.name} className="w-2/3 object-contain absolute bottom-0" />
                <img src={fit.top.src} alt={fit.top.name} className="w-2/3 object-contain absolute top-0" />
            </div>
            <p className="text-center text-sm font-semibold mt-2">{fit.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}