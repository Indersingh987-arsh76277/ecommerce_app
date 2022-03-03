import React from 'react'
import "../css/ProductCard.css"
import Rating from './Rating';
import {useNavigate} from 'react-router-dom'
export default function ProductCard({product}) {
  const navigate = useNavigate();
  function goTo(){
      navigate(`product/${product._id}`)
  }
  return (
    <div className='productCard' onClick={goTo}>
      <div className="productCard_container">
        <div className="productCard_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
        <div className="productCard_content">
           <div className="productCard_title">{product.name}<span className='productCard_price_tag'>{product.price}</span></div>
           <p className="productCard_text">{product.description}</p>
           <div>
              <Rating value={product.value}/>
           </div>
       </div>
      </div>
        
    </div>
  )
}

