import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changebyvalue, decrement, increment } from '../Features/Counter/CounterSlice';

const Counter = () => {

    const [value, setValue] = useState("")

    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return state
    })
    console.log(state)

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handlechangebyvlaue = () => {
        dispatch(changebyvalue(value))
    }

    return (
        <div>
            <h1>{state.counter.value}</h1>
            <button onClick={handleIncrement}>Increment</button> <br /> <br />
            <button onClick={handleDecrement}>Decrement</button> <br /> <br />

            <input type="text" onChange={(e) => setValue(e.target.value)} />  <br /> <br />

            <button onClick={handlechangebyvlaue}>Change by value</button>

        </div>
    )
}

export default Counter
