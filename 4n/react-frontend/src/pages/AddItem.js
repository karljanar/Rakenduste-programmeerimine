import AddItemForm from '../components/AddItemForm';
import { useState, useEffect } from 'react';


function AddItem(){


    function itemSubmitHandler(item){
        fetch('http://localhost:8080/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
    });

    
}


    return (
        <div>
            <h1>Lisa uus ese</h1>
            <AddItemForm onAddItem={itemSubmitHandler}/>
        </div>
    );
}

export default AddItem;