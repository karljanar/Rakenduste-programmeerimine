import { Link } from 'react-router-dom';

function Item(props){

    function handleDelete(itemId) {
        props.deleteItem(itemId);
    }

    return(
        <div className="itemList">
            {props.isSingleItemView ? <div>
                    <div className="itemName">Eseme nimetus - {props.name}</div>
                    <div className="itemPrice">Eseme hind - {props.price}</div>
                    <div className="itemCategory">Eseme kategooria - {props.category}</div>
                </div> : <Link to={`item/` + props.id}>
                    <div className="itemName">Eseme nimetus - {props.name}</div>
                    <div className="itemPrice">Eseme hind - {props.price}</div>
                    <div className="itemCategory">Eseme kategooria - {props.category}</div>
            </Link>}
            
            <div>
                {props.isAddToCartButton ? <button>Lisa ostukorvi</button> :
                <div>
                    <Link to={`edit-item/${props.id}`}><button className="adminBut">Muuda</button></Link>
                    
                    <button onClick={()=>handleDelete(props.id)} className="adminBut">X</button>
                </div>}
            </div>
        </div>
    )
}

export default Item;