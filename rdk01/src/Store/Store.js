import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from "./Features/Counter/CounterSlice"
import UserSlice from "./Features/User/UserSlice.js"

const Store = configureStore ({
    reducer:{
        counter: CounterReducer,
        User: UserSlice,
    }


})

export default Store
