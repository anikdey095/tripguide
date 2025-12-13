import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Cart(){
  const [cart, setCart] = useState<any[]>(JSON.parse(localStorage.getItem('cart')||'[]'))
  const navigate = useNavigate()
  const update = (idx:number, q:number)=>{
    const c = [...cart]
    c[idx].quantity = q
    setCart(c); localStorage.setItem('cart', JSON.stringify(c))
  }
  const remove = (idx:number)=>{ const c=[...cart]; c.splice(idx,1); setCart(c); localStorage.setItem('cart', JSON.stringify(c)) }
  const total = cart.reduce((s:any,i:any)=>s + i.price * i.quantity, 0)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length===0 && <div>Your cart is empty. <Link to="/">Shop</Link></div>}
      <div className="space-y-4">
        {cart.map((item, idx)=> (
          <div key={item.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-gray-500">৳{item.price}</div>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" className="w-16 border rounded p-1" value={item.quantity} onChange={(e)=>update(idx, Math.max(1, Number(e.target.value)))} />
              <button onClick={()=>remove(idx)} className="text-red-500">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <div className="text-xl font-bold">Total: ৳{total}</div>
        <button onClick={()=>navigate('/checkout')} className="px-4 py-2 bg-teal-600 text-white rounded">Checkout</button>
      </div>
    </div>
  )
}
