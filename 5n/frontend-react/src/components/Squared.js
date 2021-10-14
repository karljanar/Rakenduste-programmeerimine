import { useState, React } from "react"

const Squared = () => {
  
  const [result, setResult] = useState("no result")
  const [calc, setCalc] = useState(false)

  return (
    <>
      {calc ?
        <h1> Mdea, võtab arvu ruutu </h1>
        :
        <h1>Mdea, võtab arvu ruutjuure </h1>
        }
      <h1>Result: {result}</h1>
      <input 
        type="number" 
        onChange={event => {
            calc ?
            setResult(event.target.value**2)
            :
            setResult(Math.sqrt(event.target.value))
        }}

      />
      <button onClick={() => setCalc(!calc)}>Arv ruutu / Ruutjuur arvust</button>
      
      <br/>
    </>
  )
}

export default Squared
