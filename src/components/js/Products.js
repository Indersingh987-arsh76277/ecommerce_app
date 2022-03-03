import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { Loading } from './Loading';
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
  return (
     loading ? <Loading /> :(<div>{console.log(products)}</div> )
  )
}
