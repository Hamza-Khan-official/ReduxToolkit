import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './features/CounterSlice'
import ProductReducer from './features/ProductSlice'

const store = configureStore ({
  reducer:{
    counter: CounterReducer,
    Product: ProductReducer
  }    
})

export default store
