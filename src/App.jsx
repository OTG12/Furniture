import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderHero from './components/HeaderHero'
import FeaturedProducts from './components/FeaturedProducts'
import ShopByCategory from './components/ShopByCategory'
import NewArrivals from './components/NewArrivals'
import CartPage from './components/CartPage'
import BestSellers from './components/BestSellers'
import Testimonials from './components/Testimonials'
import NewsletterSignup from './components/NewsletterSignup'
import SocialMediaFeed from './components/SocialMediaFeed'
import Footer from './components/Footer'

function App() {
  const [cartItems, setCartItems] = useState([])

  // Function to add items to cart that can be shared across components
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeaderHero cartItems={cartItems} />
              <FeaturedProducts addToCart={addToCart} />
              <NewArrivals addToCart={addToCart} />
              <BestSellers addToCart={addToCart} />
              <ShopByCategory />
              <Testimonials/>
              <NewsletterSignup/>
              <SocialMediaFeed/>
              <Footer/>
              
             
            </>
          } 
        />
        <Route 
          path="/cart" 
          element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} 
        />
      </Routes>
    </Router>
  )
}

export default App





