import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../store/features/ProductSlice'

const Product = () => {

    // const { allProducts, isLoading, isSuccess, isError} = useSelector((state) => state.Product)
    // console.log(allProducts, isLoading, isSuccess, isError)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchProduct())
    },[])

  return (
    <div>
      <h1>Product</h1>
    </div>
  )
}

export default Product
