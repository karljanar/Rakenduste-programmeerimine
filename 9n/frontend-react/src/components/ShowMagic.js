import { useState } from "react"
import Fun from './Fun';
import Greeting from './Greeting';
import Squared from './Squared';
import Colors from './Colors';
import './App.css';

function ShowMagic() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      { show && <h1>{ magicNumber }</h1> }
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={5}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={25}
        show={show}
        setShow={setShow}
      />
      <hr />
      <Greeting name="Janar" age={21}/>
      <Greeting />
      {/* Kodutöö osa */}
      <hr />
        <Squared type="ruutu"/>
        <Colors textColor="red" />
        <Colors textColor="green" />
        <Colors textColor="blue" />
        <Colors textColor="black" />
        <Colors textColor="violet" />
      <hr />
    </div>
  );
}

export default ShowMagic;
