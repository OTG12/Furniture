import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiEye, FiChevronRight, FiStar } from 'react-icons/fi';

const arrivals = [
  {
    id: 1,
    title: 'Elegant Sofa',
    name: 'LuxeCraft Series',
    price: 799,
    image: 'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg',
    isNew: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    title: 'Wooden Chair',
    name: 'NatureRest Armchair',
    price: 249,
    originalPrice: 299,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    discount: 15,
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 3,
    title: 'Office Desk',
    name: 'ErgoPro Desk',
    price: 499,
    image: 'https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg',
    isBestSeller: true,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    title: 'Lounge Table',
    name: 'RelaxWood Table',
    price: 199,
    image: 'https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg',
    rating: 4.3,
    reviews: 42,
  },
];

const NewArrivals = () => {
  const [cart, setCart] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const calculateDiscountPrice = (originalPrice, discount) => {
    return originalPrice * (1 - discount / 100);
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  const clearCart = () => {
    setCart([]);
    setShowCartNotification(false);
  };

  const renderRatingStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-light text-gray-500">Discover Our</h2>
          <h3 className="text-4xl font-bold text-gray-800">New Arrivals</h3>
        </div>
        <button 
          onClick={() => navigate('/products')}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          View all <FiChevronRight className="ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Product */}
        <div className="lg:col-span-2 group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <img 
            src={arrivals[0].image} 
            alt={arrivals[0].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div className="w-full">
              {arrivals[0].isNew && (
                <span className="inline-block text-white/80 text-sm bg-blue-600 px-3 py-1 rounded-full mb-2">
                  New Arrival
                </span>
              )}
              <h4 className="text-2xl md:text-3xl font-bold text-white mt-2">{arrivals[0].title}</h4>
              <p className="text-white/80">{arrivals[0].name}</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-xl font-bold text-white">{formatPrice(arrivals[0].price)}</p>
                  <div className="flex items-center mt-1 space-x-1">
                    {renderRatingStars(arrivals[0].rating)}
                    <span className="text-white/80 text-sm ml-1">
                      ({arrivals[0].reviews})
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart(arrivals[0])}
                  className="flex items-center justify-center bg-white text-blue-600 hover:bg-blue-600 hover:text-white rounded-full p-3 transition-colors duration-300 transform hover:scale-110"
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

              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Quick actions on hover */}
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center space-x-4 transition-opacity">
                    <button 
                      className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 transform hover:scale-110"
                      aria-label="Quick view"
                    >
                      <FiEye />
                    </button>
                    <button 
                      className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 transform hover:scale-110"
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
                    {item.discount ? (
                      <div>
                        <p className="text-blue-700 font-bold">
                          {formatPrice(calculateDiscountPrice(item.originalPrice, item.discount))}
                        </p>
                        <p className="text-gray-400 text-sm line-through">
                          {formatPrice(item.originalPrice)}
                        </p>
                      </div>
                    ) : (
                      <p className="text-blue-700 font-bold">{formatPrice(item.price)}</p>
                    )}
                    <div className="flex items-center mt-1 space-x-1">
                      {renderRatingStars(item.rating)}
                      <span className="text-gray-400 text-xs ml-1">
                        ({item.reviews})
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => addToCart(item)}
                    className="text-gray-400 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-full duration-200 transform hover:scale-110"
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
      {showCartNotification && (
        <div className="fixed bottom-6 right-6 bg-white shadow-xl rounded-lg p-4 border border-gray-200 animate-fade-in-up z-50">
          <div className="flex items-center">
            <div className="relative mr-3">
              <FiShoppingCart className="text-blue-600 text-xl" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
            <div>
              <p className="font-medium">
                {cart.length} item{cart.length !== 1 ? 's' : ''} added to cart
              </p>
              <p className="text-sm text-gray-600">
                Total: {formatPrice(cart.reduce((sum, item) => sum + item.price, 0))}
              </p>
            </div>
          </div>
          <div className="flex space-x-3 mt-3">
            <button 
              onClick={clearCart}
              className="flex-1 text-sm py-1.5 px-3 text-gray-600 hover:bg-gray-100 rounded transition-colors"
            >
              Clear
            </button>
            <button 
              onClick={handleViewCart}
              className="flex-1 text-sm py-1.5 px-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
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