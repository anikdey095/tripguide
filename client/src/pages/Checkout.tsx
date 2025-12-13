import React, { useState } from 'react'
import api from '../api'

export default function Checkout(){
  const cart = JSON.parse(localStorage.getItem('cart')||'[]')
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [address,setAddress]=useState('')
  const total = cart.reduce((s:any,i:any)=>s + i.price * i.quantity, 0)
  const submit = async ()=>{
    const payload = { items: cart.map((i:any)=>({ product: i.id, name: i.name, price: i.price, quantity: i.quantity })), total, customer: { name, email, address } }
    try{
      await api.post('/api/orders', payload)
      localStorage.removeItem('cart')
      alert('Order placed')
      window.location.href = '/'
    }catch(e){ alert('Failed') }
  }
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="space-y-3">
        <input value={name} onChange={e=>setName(e.target.value)} className="w-full border p-2 rounded" placeholder="Full name" />
        <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full border p-2 rounded" placeholder="Email" />
        <textarea value={address} onChange={e=>setAddress(e.target.value)} className="w-full border p-2 rounded" placeholder="Address" />
      </div>
      <div className="mt-4 font-bold">Total: ৳{total}</div>
      <div className="mt-4">
        <button onClick={submit} className="px-4 py-2 bg-teal-600 text-white rounded">Place Order</button>
      </div>
    </div>
  )
}
