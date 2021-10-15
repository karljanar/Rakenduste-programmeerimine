import { useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './components/App.css'
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component={ShowMagic} />
        <Route exact path = "/posts" component={Posts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
