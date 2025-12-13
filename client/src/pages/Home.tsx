import React, { useEffect, useState } from 'react'
import api from '../api'
import ProductCard from '../components/ProductCard'

export default function Home(){
  const [products, setProducts] = useState<any[]>([])
  useEffect(()=>{ api.get('/api/products').then(r=>setProducts(r.data)).catch(()=>{}) },[])
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(p=> <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  )
}
