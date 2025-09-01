import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string[];
  brand: string;
  model?: string;
  sku: string;
  price: number;
  priceCurrency: string;
  availability: 'InStock' | 'OutOfStock' | 'PreOrder';
  condition: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition';
  category?: string;
  manufacturer?: string;
  warranty?: string;
  features?: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  offers?: {
    price: number;
    priceCurrency: string;
    availability: string;
    validFrom?: string;
    validThrough?: string;
    seller?: string;
  }[];
}

const ProductSchema: React.FC<ProductSchemaProps> = ({
  name,
  description,
  image,
  brand,
  model,
  sku,
  price,
  priceCurrency,
  availability,
  condition,
  category,
  manufacturer,
  warranty,
  features,
  aggregateRating,
  offers
}) => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "model": model,
    "sku": sku,
    "category": category,
    "manufacturer": manufacturer ? {
      "@type": "Organization",
      "name": manufacturer
    } : undefined,
    "warranty": warranty,
    "additionalProperty": features?.map(feature => ({
      "@type": "PropertyValue",
      "name": "Feature",
      "value": feature
    })),
    "offers": offers && offers.length > 0 ? offers.map(offer => ({
      "@type": "Offer",
      "price": offer.price,
      "priceCurrency": offer.priceCurrency,
      "availability": offer.availability,
      "validFrom": offer.validFrom,
      "validThrough": offer.validThrough,
      "seller": offer.seller ? {
        "@type": "Organization",
        "name": offer.seller
      } : {
        "@type": "Organization",
        "name": brand
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": offer.priceCurrency
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 3,
            "maxValue": 7,
            "unitCode": "DAY"
          }
        }
      }
    })) : {
      "@type": "Offer",
      "price": price,
      "priceCurrency": priceCurrency,
      "availability": `https://schema.org/${availability}`,
      "itemCondition": `https://schema.org/${condition}`,
      "seller": {
        "@type": "Organization",
        "name": brand
      },
      "priceValidUntil": "2099-12-31",
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": priceCurrency
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 3,
            "maxValue": 7,
            "unitCode": "DAY"
          }
        }
      }
    },
    "aggregateRating": aggregateRating ? {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating || 5,
      "worstRating": aggregateRating.worstRating || 1
    } : undefined
  };

  // Remove undefined properties
  const cleanSchema = JSON.parse(JSON.stringify(productSchema));

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(cleanSchema, null, 2)}
      </script>
    </Helmet>
  );
};

export default ProductSchema;