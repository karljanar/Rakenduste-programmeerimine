import { useState, React } from "react"

const Colors = (props) => {
  const [counter, setCounter] = useState(0)
  const [info, setInfo] = useState("no info")
  const [loading, setLoading] = useState(false)

  
  let textColorStyle = {
    color: props.textColor
    
  };

  return (
    <>
      <h1 style={textColorStyle}>Värviiiiid</h1>
    </>
  );
  
}

export default Colors