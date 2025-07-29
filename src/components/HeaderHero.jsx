import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from '../assets/Hero.png';
import { ShoppingCart, User, Menu, X, ChevronRight } from "lucide-react";

const HeaderHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(3); // Example cart count
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Shop", href: "#shop" },
    { name: "Custom Orders", href: "#custom" },
    { name: "Hospitality", href: "#hospitality" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-yellow-700 shadow-lg py-3' : 'bg-yellow-600 py-4'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">GC Furniture</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-white hover:text-red-300 transition-colors font-medium text-sm relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-300 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-red-300 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={handleCartClick}
              className="text-white hover:text-red-300 transition-colors relative p-1 hover:bg-white/10 rounded-full"
              aria-label={`Shopping Cart with ${cartItemsCount} items`}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-yellow-700 shadow-xl">
            <div className="container mx-auto px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-white hover:text-red-300 border-b border-yellow-600 flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={Hero}
            alt="GC Furniture Showroom"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Crafting Comfort, <span className="text-yellow-400">Creating Spaces</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Premium furniture collections with timeless designs and exceptional craftsmanship for your home and business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#shop"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition flex-1 text-center"
              >
                Explore Collections
              </a>
              <a
                href="#custom"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition flex-1 text-center"
              >
                Custom Designs
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6 items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm">Open: Mon-Sat (9am-6pm)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-sm">Onilekere, Cement bus stop, Ikeja</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderHero;





