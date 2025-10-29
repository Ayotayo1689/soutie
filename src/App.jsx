"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./componeents/Footer"
import AllProducts from "./pages/AllProducts"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Header from "./componeents/Header"
import Home from "./pages/Home"

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity, size) => {
    const existingItem = cart.find((item) => item.id === product.id && item.size === size)

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.size === size ? { ...item, quantity: item.quantity + quantity } : item,
        ),
      )
    } else {
      setCart([...cart, { ...product, quantity, size }])
    }
  }

  const removeFromCart = (productId, size) => {
    setCart(cart.filter((item) => !(item.id === productId && item.size === size)))
  }

  const updateQuantity = (productId, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size)
    } else {
      setCart(cart.map((item) => (item.id === productId && item.size === size ? { ...item, quantity } : item)))
    }
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header cartCount={cart.length} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/all-products" element={<AllProducts addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}
            />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
