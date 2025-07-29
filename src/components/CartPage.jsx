import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, X, Plus, Minus, ArrowLeft } from 'lucide-react';

const CartPage = () => {
  const navigate = useNavigate();
  // Load cart items from localStorage or initialize empty array
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = typeof window !== 'undefined' ? localStorage.getItem('cartItems') : null;
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Format price as Nigerian Naira
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Delivery fee - free for orders over ₦100,000
  const deliveryFee = subtotal > 100000 ? 0 : 5000;

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Proceed to checkout
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            Continue Shopping
          </button>
          <h1 className="text-3xl font-bold text-center flex-1">Your Shopping Cart</h1>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any items yet</p>
            <button
              onClick={() => navigate('/shop')}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-medium text-gray-700">
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2">Price</div>
                  <div className="col-span-3">Quantity</div>
                  <div className="col-span-2">Total</div>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                    <div className="grid grid-cols-1 md:grid-cols-12 p-4 gap-4">
                      {/* Product Info */}
                      <div className="md:col-span-5 flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded mr-4"
                        />
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          {item.color && <p className="text-sm text-gray-500">Color: {item.color}</p>}
                          {item.delivery && <p className="text-sm text-gray-500">Delivery: {item.delivery}</p>}
                          {item.material && <p className="text-sm text-gray-500">Material: {item.material}</p>}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="md:col-span-2 flex items-center">
                        <span className="font-medium">{formatPrice(item.price)}</span>
                      </div>

                      {/* Quantity */}
                      <div className="md:col-span-3 flex items-center">
                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-4 text-red-600 hover:text-red-800"
                          aria-label="Remove item"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Total */}
                      <div className="md:col-span-2 flex items-center justify-between">
                        <span className="font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>{deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{formatPrice(subtotal + deliveryFee)}</span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition mb-4"
                >
                  Proceed to Checkout
                </button>

                <p className="text-sm text-gray-500 text-center">
                  or{' '}
                  <button 
                    onClick={() => navigate('/shop')}
                    className="text-blue-600 hover:underline"
                  >
                    continue shopping
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;