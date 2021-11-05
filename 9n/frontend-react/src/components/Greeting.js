import { useState, React } from "react"
import PropTypes from "prop-types"

const Greetings = ({ name, age }) => {
  const [counter, setCounter] = useState(0)
  const [info, setInfo] = useState("no info")
  const [loading, setLoading] = useState(false)

  return (
    <>
      <h1>Greeting title : {name}</h1>
      <h1>Info: {info}</h1>
      <h1>Counter: {counter}</h1>
      <h1>Age: {age}</h1>
      <input 
        type="text" 
        onChange={event => setInfo(event.target.value)}
      /><br/>
      <button onClick={() => setLoading(!loading)}>Toggle Loading true/false</button>
      { loading ? 
          <div>loading true</div>
          : 
          <div>loading false</div> 
      }
    </>
  )
}

Greetings.defaultProps = {
  name:"Hello",
  age:2
}

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default Greetings