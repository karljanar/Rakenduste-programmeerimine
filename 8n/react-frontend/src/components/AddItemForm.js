import './AddItemForm.css'
import { useState, useEffect, useRef } from 'react';
import CategoryList from './CategoryList';

function AddItemForm(props){

    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();

    function formSubmitHandler(e){
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const item = {
            name:nameValue,
            price:priceValue,
            category:categoryValue,
        }
        props.onAddItem(item);
    }

    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories, setloadedCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/category').then(res => {
            return res.json();
        }).then((data) => {
            console.log(data);
            setIsLoading(false);
            setloadedCategories(data);
        });
        
    },[]);

    if(isLoading){
        return(
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        );
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label>Eseme nimi</label><br />
            <input type="text" required ref={nameInputRef} /><br/>
            <label>Eseme hind</label><br />
            <input type="number"  required ref={priceInputRef} /><br/>
            <label>Eseme kategooria</label><br />
            <CategoryList items={loadedCategories} categoryInputRef={categoryInputRef} />
            <button>Sisesta uus ese</button>
        </form>
        
    );
}

export default AddItemForm;