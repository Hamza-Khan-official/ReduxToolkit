import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addIncrement, deldecrement } from '../store/features/CounterSlice';

const Counter = () => {

    const { counter } = useSelector((state) => state.counter);
    console.log(counter)

    const dispatch = useDispatch()


  return (
    <div>
      <h1>Counter {counter}</h1>

      <button onClick={() => dispatch(addIncrement())}>Increment</button> &nbsp; &nbsp;
      <button onClick={() => dispatch(deldecrement())}>Decrement</button>
    </div>
  )
}

export default Counter
