

function Item(props){
    return(
        <div className="itemList">
            
            <div className="itemName">Eseme nimetus - {props.name}</div>
            <div className="itemPrice">Eseme hind - {props.price}</div>
            <div className="itemCategory">Eseme kategooria - {props.category}</div>
        </div>
    )
}

export default Item;