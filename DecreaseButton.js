import "./DecreaseButton.css"

const DecreaseButton = (props) => {
  return (
    <div>
      <button  className="btn" onClick={props.decrease}>- 1</button>
      <button  className="btn"  onClick={props.increase}>+ 1</button>
      <button  className="btn"  onClick={props.reset}>Reset</button>
    </div>
  )
};

export default DecreaseButton