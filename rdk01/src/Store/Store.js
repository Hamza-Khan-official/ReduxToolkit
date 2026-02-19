import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from "./Features/Counter/CounterSlice"

const Store = configureStore ({
    reducer:{
        counter: CounterReducer
    }


})

export default Store
