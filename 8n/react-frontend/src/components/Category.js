

function Category(props){
    return(
            <option key={props.key} value={props.name}>
                {props.name} - {props.type}
                </option>
    )
        
}

export default Category;