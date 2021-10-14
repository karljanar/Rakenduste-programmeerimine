import './AddItemForm.css'
import {useRef} from 'react';


function AddCategoryForm(props){

const nameInputRef = useRef();
const categoryInputRef = useRef();

    function formSubmitHandler(e){
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const category = {
            name:nameValue,
            category:categoryValue,
        }
        props.onAddItem(category);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label><br />
            <input type="text" placeholder="Nimi" required ref={nameInputRef} /><br/>
            <label>Kategooria tüüp</label><br />
            <select ref={categoryInputRef}>
                <option key="1" value="BASIC">BASIC</option>
                <option key="2" value="PREMIUM">PREMIUM</option>
                <option key="3" value="DELUXE">DELUXE</option>
            </select>
            <br />
            <button>Sisesta uus kategooria</button>
        </form>
        
    );
}

export default AddCategoryForm;