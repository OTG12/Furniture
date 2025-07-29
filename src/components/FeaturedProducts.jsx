import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiEye, FiStar } from "react-icons/fi";
import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";

const products = [
  {
    id: 1,
    name: "Modern Wooden Chair",
    price: 45000,
    originalPrice: 55000,
    image: product1,
    rating: 4.5,
    reviews: 24,
    isNew: true,
    colors: ["#964B00", "#5C4033", "#3D2B1F"], // Wood tones
    material: "Solid Oak",
    delivery: "2-3 business days"
  },
  {
    id: 2,
    name: "Luxury Sofa Set",
    price: 250000,
    originalPrice: 300000,
    image: product2,
    rating: 4.8,
    reviews: 42,
    isBestSeller: true,
    colors: ["#36454F", "#708090", "#343434"], // Charcoal/grays
    material: "Premium Leather",
    delivery: "1 week"
  },
  {
    id: 3,
    name: "Glass Coffee Table",
    price: 70000,
    image: product3,
    rating: 4.2,
    reviews: 18,
    colors: ["#C0C0C0", "#000000"], // Silver/black
    material: "Tempered Glass & Steel",
    delivery: "3-5 business days"
  },
  {
    id: 4,
    name: "Premium Office Desk",
    price: 95000,
    originalPrice: 120000,
    image: product4,
    rating: 4.7,
    reviews: 31,
    isNew: true,
    colors: ["#2F4F4F", "#556B2F"], // Dark teal/olive
    material: "Reclaimed Wood & Steel",
    delivery: "5-7 business days"
  },
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(price);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Premium Collection
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Carefully curated selection of our finest furniture pieces
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
                {product.isNew && (
                  <span className="px-3 py-1 text-xs font-semibold tracking-wide text-white bg-green-500 rounded-full shadow-sm">
                    New
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="px-3 py-1 text-xs font-semibold tracking-wide text-white bg-red-500 rounded-full shadow-sm">
                    Bestseller
                  </span>
                )}
                {product.originalPrice && (
                  <span className="px-3 py-1 text-xs font-semibold tracking-wide text-white bg-blue-500 rounded-full shadow-sm">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% Off
                  </span>
                )}
              </div>

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
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredProduct === product.id ? "scale-110" : "scale-100"
                  }`}
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center mb-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>

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

                {/* Additional Info */}
                <div className="mt-2 text-sm text-gray-500">
                  <p>{product.material}</p>
                  <p>Delivery: {product.delivery}</p>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className={`mt-4 w-full py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors ${
                    hoveredProduct === product.id
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                  aria-label={`Add ${product.name} to cart`}
                >
                  <FiShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Cart Notification */}
        {cartItems.length > 0 && (
          <div className="fixed bottom-6 right-6 bg-white shadow-xl rounded-lg p-4 border border-gray-200 animate-bounce">
            <div className="flex items-center">
              <FiShoppingCart className="text-blue-600 mr-2" />
              <span className="font-medium">
                {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} added
              </span>
            </div>
            <div className="flex space-x-3 mt-2">
              <button
                onClick={() => setCartItems([])}
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
      </div>
    </section>
  );
};

export default FeaturedProducts;
