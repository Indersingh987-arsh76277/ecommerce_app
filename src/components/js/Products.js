import React from 'react'
import "../css/Products.css"
import Card from "./ProductCard"

export default function Products() {
    var array = [1,2,3,4,5,6,7,8];
  return (
    <div className="products">
        {array.map((key)=>(
          <Card key={key}/>
        ))}
    </div>
  )
}
