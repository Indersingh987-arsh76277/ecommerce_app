
import React, { useEffect } from 'react'
import Card from "./ProductCard"
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { Loading } from './Loading';
import "../css/Products.css"
import { getAllProducts } from '../../actions/getProducts'; 
export default function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let loading = useSelector(state=>state.getAllProducts?.loading);
  let products= useSelector(state=>state.getAllProducts?.products);
  const errors = useSelector(state=>state.getAllProducts?.errors);

  useEffect(()=>{
     dispatch(getAllProducts());
  },[]);
   var array = [1,2,3,4,5,6,7,8];
  return (
    loading ? <Loading />:
    <div className="products">
        {products?.data.map((product)=>(
          <Card key={product._id} product = {product}/>
        ))}
    </div>
  )
}
