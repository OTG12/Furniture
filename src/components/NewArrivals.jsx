import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiEye, FiChevronRight } from 'react-icons/fi';
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";

const arrivals = [
  {
    id: 1,
    title: 'Elegant Sofa',
    name: 'LuxeCraft Series',
    price: 799,
    image: product1,
    isNew: true,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Wooden Chair',
    name: 'NatureRest Armchair',
    price: 249,
    image: product2,
    discount: 15,
    rating: 4.5,
  },
  {
    id: 3,
    title: 'Office Desk',
    name: 'ErgoPro Desk',
    price: 499,
    image: product3,
    isBestSeller: true,
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Lounge Table',
    name: 'RelaxWood Table',
    price: 199,
    image: product4,
    rating: 4.3,
  },
];

const NewArrivals = () => {
  const [cart, setCart] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]);
    // In a real app, you might want to use a more sophisticated cart management
  };

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl font-light text-gray-500">Discover Our</h2>
          <h3 className="text-4xl font-bold text-gray-800">New Arrivals</h3>
        </div>
        <a 
          href="#" 
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          View all <FiChevronRight className="ml-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Product */}
        <div className="lg:col-span-2 group relative overflow-hidden rounded-xl shadow-lg">
          <img 
            src={arrivals[0].image} 
            alt={arrivals[0].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div>
              {arrivals[0].isNew && (
                <span className="text-white/80 text-sm bg-blue-600 px-2 py-1 rounded-full">New Arrival</span>
              )}
              <h4 className="text-2xl font-bold text-white mt-2">{arrivals[0].title}</h4>
              <p className="text-white/80">{arrivals[0].name}</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-xl font-bold text-white">{formatPrice(arrivals[0].price)}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(arrivals[0].rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => addToCart(arrivals[0])}
                  className="flex items-center justify-center bg-white text-blue-600 hover:bg-blue-600 hover:text-white rounded-full p-3 transition-colors"
                  aria-label={`Add ${arrivals[0].title} to cart`}
                >
                  <FiShoppingCart className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Products */}
        <div className="space-y-6">
          {arrivals.slice(1).map((item) => (
            <div 
              key={item.id}
              className="relative group bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Product Badges */}
              <div className="absolute top-3 left-3 z-10 flex space-x-2">
                {item.discount && (
                  <span className="px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                    -{item.discount}%
                  </span>
                )}
                {item.isBestSeller && (
                  <span className="px-2 py-1 text-xs font-bold text-white bg-yellow-500 rounded-full">
                    Bestseller
                  </span>
                )}
              </div>

              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Quick actions on hover */}
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center space-x-4 transition-opacity">
                    <button 
                      className="bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="Quick view"
                    >
                      <FiEye />
                    </button>
                    <button 
                      className="bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <FiHeart />
                    </button>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h5 className="text-lg font-semibold text-gray-800">{item.title}</h5>
                <p className="text-gray-600 text-sm">{item.name}</p>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="text-blue-700 font-bold">{formatPrice(item.price)}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(item.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <button 
                    onClick={() => addToCart(item)}
                    className="text-gray-400 hover:text-blue-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
                    aria-label={`Add ${item.title} to cart`}
                  >
                    <FiShoppingCart className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Cart Notification */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-white shadow-xl rounded-lg p-4 border border-gray-200 animate-bounce">
          <div className="flex items-center">
            <FiShoppingCart className="text-blue-600 mr-2" />
            <span className="font-medium">{cart.length} item{cart.length !== 1 ? 's' : ''} added to cart</span>
          </div>
          <div className="flex space-x-2 mt-2">
            <button 
              onClick={() => setCart([])}
              className="text-sm text-gray-600 hover:underline"
            >
              Clear
            </button>
            <button 
              onClick={handleViewCart}
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              View Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewArrivals;