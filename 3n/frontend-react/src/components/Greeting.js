import React from 'react';

// const Greeting = () => {
//     return <h1>Greetings</h1>
// }

const Greeting = ({name}) => {
    // const {name} = props

    return (
        <>
        <h1 className="blabla">Greetings, {name}</h1>
        <p>To</p>
        </>
    )}

export default Greeting

