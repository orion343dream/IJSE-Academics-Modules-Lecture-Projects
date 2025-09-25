import { useState } from "react"
import "./Counter.css"

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const increment = (): void => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = (): void => {
    setCount((prevCount) => prevCount - 1)
  }

  const reset = (): void => {
    setCount(0)
  }

  const getCountColor = (): string => {
    if (count > 0) return "positive"
    if (count < 0) return "negative"
    return "zero"
  }

  return (
    <div className='counter-container'>
      <div className='counter-card'>
        <h2 className='counter-title'>Counter App</h2>
        <div className='counter-display'>
          <span className={`counter-value ${getCountColor()}`}>{count}</span>
        </div>
        <div className='counter-buttons'>
          <button className='counter-btn decrement-btn' onClick={decrement} type='button'>
            -
          </button>
          <button className='counter-btn reset-btn' onClick={reset} type='button'>
            Reset
          </button>
          <button className='counter-btn increment-btn' onClick={increment} type='button'>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
