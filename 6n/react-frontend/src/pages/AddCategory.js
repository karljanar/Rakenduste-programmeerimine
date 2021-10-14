import AddCategoryForm from '../components/AddCategoryForm';
function AddItem(){

    function categorySubmitHandler(categoryName, categoryType){
        fetch('http://localhost:8080/category', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(categoryName, categoryType),
    });
}


    return (
        <div>
            <h1>Lisa uus kategooria</h1>
            <AddCategoryForm onAddItem={categorySubmitHandler}/>
        </div>
    );
}

export default AddItem;