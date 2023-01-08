import DecreaseButton from "./components/DecreaseButton"
import { useState } from "react";

const App = () => {

  const [value, setValue] = useState(0)

  const decreaseOne = () => {
    const newValue = value - 1
    setValue(newValue)
  }

  const increaseOne = () => {
    const newValue = value + 1
    setValue(newValue)
  }

  const reset = () => {
    const newValue = 0
    setValue(newValue)
  }

  return (
    <div className="counter">   
      <h1>COUNTER</h1>
      <h2>{value}</h2>
      <DecreaseButton 
        decrease={decreaseOne}
        increase={increaseOne}
        reset={reset}
      />
    </div>
  )
};

export default App