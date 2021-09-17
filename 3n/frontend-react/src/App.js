import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Fun from './components/Fun';
import {useState} from 'react';



function App() {

  const [magicNumber, setMagicNumber] = useState(0);

  const [show, setShow] = useState(true);


  return (
    <div className="App">
      <header className="App-header">
        {show && <h1>{magicNumber}</h1>}
        {magicNumber}
        <Greeting name="Janar" age="21"/>   
        <Fun magicNumber={magicNumber} setMagicNumber={setMagicNumber} amount={3} show={show} setShow={setShow} />   
        <Fun magicNumber={magicNumber} setMagicNumber={setMagicNumber} show={show} setShow={setShow} />   
        <Fun magicNumber={magicNumber} setMagicNumber={setMagicNumber} amount={9} show={show} setShow={setShow} />   
   
          
        
      </header>
    </div>
  );
}

export default App;
