import { useState } from 'react'
import './index.css';


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button className='btn1' onClick={() => setCount(count + 1)}>Increment</button>
      <button className='btn2' onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrement</button>
    </div>
  )
}
