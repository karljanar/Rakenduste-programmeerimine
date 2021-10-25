
import { Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AddItem from './pages/AddItem';
import Navbar from './components/Navbar';
import AddCategory from './pages/AddCategory';
import AdminHome from './pages/AdminHome';
import EditItem from './pages/EditItem';
import SingleItem from './pages/SingleItem';

function App() {
  return (
    <div>
      <Navbar />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/add-item">
        <AddItem />
      </Route>
      <Route path="/add-cat">
        <AddCategory />
      </Route>
      <Route path="/admin">
        <AdminHome />
      </Route>
      <Route path="/item/:itemId">
        <SingleItem />
      </Route>
      <Route path="/edit-item/:itemId">
        <EditItem />
      </Route>
    </div>
  );
}

export default App;
