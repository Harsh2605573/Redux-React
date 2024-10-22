import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../app/counter/counterSlice';

function Compo1() {
    let data = useSelector(state => state.counter.value)
    console.log(data);
    const dispatch = useDispatch()
  return (
    <div>
        {data}
      <button onClick={()=> dispatch(increment()) }>Add</button>
      <button onClick={()=> dispatch(decrement()) }>decre</button>
      <button onClick={()=> dispatch(incrementByAmount(10)) }>function</button>
    </div>
  )
}

export default Compo1
