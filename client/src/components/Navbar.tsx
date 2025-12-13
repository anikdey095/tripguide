import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  const totalCount = cart.reduce((s:any, i:any) => s + (i.quantity||1), 0)
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-teal-600">Shop</Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600">Home</Link>
          <Link to="/cart" className="text-gray-600">Cart ({totalCount})</Link>
        </nav>
      </div>
    </header>
  )
}
