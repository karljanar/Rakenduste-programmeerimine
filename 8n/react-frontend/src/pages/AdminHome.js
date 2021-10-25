
import { Link } from 'react-router-dom';
import ItemList from './../components/ItemList'
import { useState, useEffect } from 'react';




function AdminHome(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then((data) => {
            console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        });
        
    },[]);

    function makeDeleteRequest(itemId){
        fetch('http://localhost:8080/delete-item/' + itemId,{
            method: 'DELETE'
        }).then(res => {
            return res.json();
        }).then((data) => {
            setLoadedItems(data);
        });
    }

    if(isLoading){
        return(
            <div><h1>Laeb...</h1></div>
        );
    }

    return(
        <div>
            <Link to="/add-item">
                <button>
                    Lisa uus ese
                </button>
            </Link>
            <p></p>

            <ItemList onDeleteItem={makeDeleteRequest} isAddToCart={false} items={loadedItems} />

        </div>
    )
}


export default AdminHome;