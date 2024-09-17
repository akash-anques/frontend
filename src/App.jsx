import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
// import home from './pages/home'
import collection from './pages/collection'
import About from './pages/about'
import Contact from './pages/contact'
import Login from './pages/login'
import Orders from './pages/orders'
import Product from './pages/product'
import Cart from './pages/cart'
import PlaceOrder from './pages/placeOrder'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Collection from './pages/collection'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
      </Routes>
    </div>
  )
}

export default App