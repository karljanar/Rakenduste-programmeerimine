import { React } from "react"

const Colors = (props) => {

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