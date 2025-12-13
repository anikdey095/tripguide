import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}:{product:any}){
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')||'[]')
    const existing = cart.find((c:any)=>c.id===product._id)
    if(existing){ existing.quantity += 1 } else { cart.push({ id: product._id, name: product.name, price: product.price, quantity: 1 }) }
    localStorage.setItem('cart', JSON.stringify(cart))
    alert('Added to cart')
  }
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="h-40 bg-gray-100 rounded flex items-center justify-center">Image</div>
      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-bold">৳{product.price}</div>
        <div className="space-x-2">
          <button onClick={addToCart} className="px-3 py-1 bg-teal-500 text-white rounded">Add</button>
          <Link to={`/product/${product._id}`} className="px-3 py-1 border rounded">View</Link>
        </div>
      </div>
    </div>
  )
}
