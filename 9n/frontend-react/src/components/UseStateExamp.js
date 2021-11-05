import React, {useState} from 'react';

export default function StateExample(){
    const [name, setName] = useState("");

    return(
        <div style={{ display:"grid", placeItems:"center"}}>
            <h1>Hi {name}</h1>
            <input type='text' onChange={e => setName(e.target.value)}></input>
        </div>
    )
}
