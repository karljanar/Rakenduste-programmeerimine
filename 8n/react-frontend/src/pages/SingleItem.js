import Item from '../components/Item';
import {useState, useEffect} from 'react';

function SingleItem(){
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState(null);

    

    useEffect(()=>{
        const itemId = window.location.href.split("/item/")[1];
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
        <Item 
            id={item.id}
            name={item.name} 
            price={item.price} 
            category={item.category}
            isAddToCartButton={true} 
            isSingleItemView={true}/>
    </div>)
}


export default SingleItem;