import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

const CounterSlice = createSlice({
    name: "CounterSlice",
    initialState,
    reducers: {
        addIncrement: (state, action) => {
            state.counter = ++state.counter
        },
        deldecrement: (state, action) => {
            state.counter = --state.counter

        }

    }
})

const { actions, reducer } = CounterSlice;

export const { addIncrement, deldecrement } = actions;

export default reducer;
