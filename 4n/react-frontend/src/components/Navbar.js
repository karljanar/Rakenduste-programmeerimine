import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar(){


    return (
        <div className="navbar">
            <Link to="/"><img className="logo" src="puooooood.png" alt="Lehe logo" /></Link>
            <Link to="/cart"><img className="cart" src="shopping-cart.svg" alt="Ostukorvi logo" /></Link>
            
        </div>
    );
}

export default Navbar;