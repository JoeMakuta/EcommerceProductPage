import { useState } from 'react'
import Header from './components/header'
import Product from './components/product'

function App() {
  return (
    <div className="font-paragraph flex flex-col">
      <Header />
      <Product />
    </div>
  )
}

export default App
