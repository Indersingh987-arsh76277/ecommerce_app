
import React, { useEffect } from 'react'
import Card from "./ProductCard"
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { Loading } from './Loading';
import "../css/Products.css"
import { getAllProducts } from '../../actions/getProducts'; 
export default function Products() {
  const navigate = useNavigate();
  let loading=true;
  loading=useSelector(state=>state.products?.loading);
  const dispatch = useDispatch();
  let products='';
  products = useSelector(state=>state.getAllProducts?.products);
  const errors = useSelector(state=>state.getAllProducts?.errors);
  useEffect(()=>{
     dispatch(getAllProducts());
  },[]);
   var array = [1,2,3,4,5,6,7,8];
  return (
    <div className="products">
        {array.map((key)=>(
          <Card key={key}/>
        ))}
    </div>
  )
}
