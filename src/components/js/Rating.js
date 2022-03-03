import React from 'react'
import "../css/ProductCard.css"

export default function Rating({value}) {
    let rating = [value,value-1,value-2,value-3,value-4];
  return (
    <div>
        { rating.map((rate,index)=>rate > 0 ?<span key={index} className='fa fa-star star_checked'></span>:<span key={index} className='fa fa-star'></span>) }
    </div>
  )
}
