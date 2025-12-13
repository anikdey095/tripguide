import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'

export default function ProductPage(){
  const { id } = useParams()
  const [product, setProduct] = useState<any>(null)
  useEffect(()=>{ if(id) api.get(`/api/products/${id}`).then(r=>setProduct(r.data)).catch(()=>{}) },[id])
  if(!product) return <div>Loading...</div>
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')||'[]')
    const existing = cart.find((c:any)=>c.id===product._id)
    if(existing){ existing.quantity += 1 } else { cart.push({ id: product._id, name: product.name, price: product.price, quantity: 1 }) }
    localStorage.setItem('cart', JSON.stringify(cart))
    alert('Added')
  }
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <div className="mt-2 text-gray-700">{product.description}</div>
      <div className="mt-4 font-bold text-xl">৳{product.price}</div>
      <div className="mt-4">
        <button onClick={addToCart} className="px-4 py-2 bg-teal-500 text-white rounded">Add to cart</button>
      </div>
    </div>
  )
}
