import { useState } from 'react'
import Header from './components/header'
import Product from './components/product'
import Categories from './components/category'
import Footer from './components/footer'

function App() {
  return (
    <div className="font-paragraph flex flex-col">
      <Header />
      {/* <Categories /> */}
      <Product />
      <Footer />
    </div>
  )
}

export default App
