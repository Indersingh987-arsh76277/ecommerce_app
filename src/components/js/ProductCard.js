import React from 'react'
import "../css/ProductCard.css"

export default function ProductCard() {
  return (
    <div className='productCard'>
      <div className="productCard_container">
        <div className="productCard_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
        <div className="productCard_content">
           <div className="productCard_title">Card Grid Layout</div>
           <p className="productCard_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
       </div>
      </div>
        
    </div>
  )
}


// <div class="card_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
//         <div class="card_content">
//           <h2 class="card_title">Card Grid Layout</h2>
//           <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
//           <button class="btn card_btn">Read More</button>
//         </div>