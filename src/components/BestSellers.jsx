import React from 'react';
import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const bestSellers = [
  {
    id: 5,
    title: 'Classic Recliner',
    name: 'ComfortEase Recliner',
    price: 59900,
    originalPrice: 69900,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267',
    rating: 4.7,
    reviews: 38,
    isBestSeller: true,
    colors: ['#3A3845', '#826F66'],
    material: 'Premium Fabric',
    delivery: '1-2 weeks'
  },
  {
    id: 6,
    title: 'Modern Bookshelf',
    name: 'UrbanLine Shelf',
    price: 22900,
    originalPrice: 29900,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6',
    rating: 4.5,
    reviews: 24,
    colors: ['#5F7161', '#6D8B74'],
    material: 'Solid Oak',
    delivery: '3-5 business days'
  },
  {
    id: 7,
    title: 'Dining Table Set',
    name: 'HomeGather Set',
    price: 74900,
    originalPrice: 89900,
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a',
    rating: 4.8,
    reviews: 42,
    isBestSeller: true,
    colors: ['#3A3845', '#826F66'],
    material: 'Reclaimed Wood',
    delivery: '2-3 weeks'
  },
  {
    id: 8,
    title: 'Fabric Sofa',
    name: 'RelaxPlush Sofa',
    price: 89900,
    originalPrice: 99900,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    rating: 4.6,
    reviews: 31,
    colors: ['#3A3845', '#826F66', '#C7B198'],
    material: 'Linen Blend',
    delivery: '1-2 weeks'
  },
];

const BestSellers = ({ addToCart }) => {
  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = React.useState(null);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price / 100);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Customer Favorites
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Best Sellers
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our most loved furniture pieces according to our customers
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Badges */}
              {product.isBestSeller && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-xs font-semibold tracking-wide text-white bg-red-500 rounded-full shadow-sm">
                    Bestseller
                  </span>
                </div>
              )}

              {/* Quick Actions on Hover */}
              {hoveredProduct === product.id && (
                <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2">
                  <button 
                    className="p-2 bg-white rounded-full shadow-md hover:bg-blue-100 text-gray-700 transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <FiHeart className="w-4 h-4" />
                  </button>
                  <button 
                    className="p-2 bg-white rounded-full shadow-md hover:bg-blue-100 text-gray-700 transition-colors"
                    aria-label="Quick view"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <FiEye className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Product Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center mb-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{product.name}</p>

                {/* Color Options */}
                <div className="flex items-center mt-2 space-x-1">
                  {product.colors?.map((color) => (
                    <div 
                      key={color}
                      className="w-4 h-4 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                      aria-label={`Color option: ${color}`}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center mt-3">
                  <p className="text-lg font-bold text-blue-600">
                    {formatPrice(product.price)}
                  </p>
                  {product.originalPrice && (
                    <p className="ml-2 text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </p>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full py-2 rounded-lg font-medium flex items-center justify-center space-x-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  aria-label={`Add ${product.title} to cart`}
                >
                  <FiShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;






// Limited-Time Offers / Discounts

// Testimonials / Reviews

// Newsletter Signup

// Instagram/ Social Media Feed

// Footer (with links, contact info, policies, etc.)
