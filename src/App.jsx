import { useState } from 'react'
import Header from './components/header'
import Product from './components/product'
import Categories from './components/category'
import Footer from './components/footer'
import SimilarProducts from './components/similarProducts'

function App() {
  return (
    <div className="font-paragraph flex flex-col">
      <Header />
      {/* <Categories /> */}
      <Product />
      <SimilarProducts />
      <Footer />
    </div>
  )
}

export default App
