import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, pushProduct } from '../store/features/ProductSlice'

const Product = () => {

  const { products, isLoading, isSuccess, isError } = useSelector((state) => state.Product)
  // console.log(allProducts, isLoading, isSuccess, isError)

  const dispatch = useDispatch()

  // useEffect(()=> {
  //     dispatch(fetchProduct())
  // },[])

  const Create = () => {
    dispatch(pushProduct())
    console.log(products)
  }

  const Read = () => {
    dispatch(fetchProduct())
    console.log(products)
  }

  const Update = () => {

  }

  const Delete = () => {

  }


  return (
    <div>
      <h1>Product</h1>

      <button onClick={Create} >Create</button> &nbsp;
      <button onClick={Read}>Read</button> &nbsp;
      <button onClick={Update}>Update</button> &nbsp;
      <button onClick={Delete}>Delete</button>

    </div>
  )
}

export default Product
