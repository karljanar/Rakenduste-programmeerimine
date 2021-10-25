import Category from './Category';


function CategoryList(props){
    return(
        <div>
            <select ref={props.categoryInputRef}>
            {props.items.map(category => (
                <Category key={category.key} 
                name={category.name} 
                type={category.category} 
                />
            )
                )}
                </select>
        </div>
    );
}

export default CategoryList;