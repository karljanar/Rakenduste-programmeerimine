
import {useState, useEffect, useRef} from 'react';
import '../components/AddItemForm.css';
import CategoryList from '../components/CategoryList';


function EditItem(){
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState(null);
    const [loadedCategories, setloadedCategories] = useState([]);
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();

    function formSubmitHandler(e){
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const itemSubmitted = {
            id: item.id,
            name:nameValue,
            price:priceValue,
            category:categoryValue,
        }
        
        fetch('http://localhost:8080/edit-item', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemSubmitted),
    });
    }


    

    useEffect(() => {
        fetch('http://localhost:8080/category').then(res => {
            return res.json();
        }).then((data) => {
            console.log(data);
            setloadedCategories(data);
        });
        
    },[]);



    useEffect(()=>{
        const itemId = window.location.href.split("/edit-item/")[1];
        fetch("http://localhost:8080/view-item/"+ itemId)
        .then(response => 
        {
            return response.json();
        }).then(data => {
            console.log(data);
            setItem(data);
            setIsLoading(false);
        })
    }, []);
    
    if(isLoading){
        return(
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        );
    }

    return(<div>
        <form onSubmit={formSubmitHandler}>
            <label>Eseme nimi</label><br />
            <input type="text" defaultValue={item.name} required ref={nameInputRef} /><br/>
            <label>Eseme hind</label><br />
            <input type="number" defaultValue={item.price}  required ref={priceInputRef} /><br/>
            <label>Eseme kategooria</label><br />
            <CategoryList items={loadedCategories} categoryInputRef={categoryInputRef} />
            <button>Muuda eset</button>
        </form>
    </div>)
}


export default EditItem;