import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            // console.log(state)
            state.value += 1;
        },
        decrement: (state, action) => {
            state.value -= 1;
        },
        changebyvalue: (state, action) => {
            // console.log(action)
            state.value = action.payload
        }
    }

})

export const {increment, decrement, changebyvalue } = CounterSlice.actions

export default CounterSlice.reducer
