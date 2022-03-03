import React from 'react'
import '../css/Product.css'
import data from './dummyData';
export default function Product() {
  const product=data[1];
  return (
    <div className='product'>
          <div className='product_heading'>
            <h1>{[product.name]}</h1>
          </div>
         <div className='product_body'>
            <div className='product_body_left'>
              <div className='product_body_left_image'>
                 <img className='img' src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='product' />
              </div>
              <div className='product_body_left_description'>
                <h2>Description</h2>
                {product.description}
              </div>
            </div>
           <div className='product_body_right'>
             <div className='product_body_right_price'>$100</div>
             <div className='product_body_right_addtocart'>
               <button className='btn btn_black'>Add to cart</button>
               <button className='btn btn_green'>Buy now</button>
              {product.stock==false ?<h4 style={{color:"red"}}>Out of stock</h4 >:<h4 style={{color:"green"}}>In stock</h4>}
             </div>
          </div>
      </div>
      <div className='product_ratings'>******</div>
        <div className='product_comments'>
          <h2 className='product_comments_heading'>Comments</h2>
          {product.comments.map((comment,index)=>
          <div className='product_comments_data' key={index}>
            <div className='product_comments_data_name'>{comment.name}</div>
            <div className='product_comments_data_comment'>{comment.comment}</div>
          </div>
          )}
        </div>
    </div>
  )
}
