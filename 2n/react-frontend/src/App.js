
import { Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AddItem from './pages/AddItem';


function App() {
  return (
    <div className="App-header">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/add-item">
        <AddItem />
      </Route>
    </div>
  );
}

export default App;
