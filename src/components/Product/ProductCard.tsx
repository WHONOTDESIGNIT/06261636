import React from 'react';
import { Product } from '../../types';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  showThumbnail?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showThumbnail = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-9">
        {product.link ? (
          <Link href={product.link}>
            <img
              src={product.image}
              alt={product.name}
              className={`object-cover ${showThumbnail ? 'w-8 h-8' : 'w-full h-48'}`}
            />
          </Link>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className={`object-cover ${showThumbnail ? 'w-8 h-8' : 'w-full h-48'}`}
          />
        )}
      </div>
      <div className="p-6">
        {product.link ? (
          <Link href={product.link} className="hover:text-ishine-blue-600">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
          </Link>
        ) : (
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        )}
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex flex-wrap gap-2">
          {product.features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-ishine-blue-100 text-ishine-blue-700 text-sm rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
