import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './components/App.css'
import React, { useState } from 'react';
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { Layout } from 'antd';


function App() {
  const [token, setToken] = useState("");

  if(!token) {
    return <Login setToken={setToken} />
  }

  const {Content} = Layout;
  return (
    <BrowserRouter>
      <Header />
      <Layout className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{  padding: 24, minHeight:"calc(100vh - 200px)" }}>
      <Content style={{ padding: '0 24px' }}>
            <Switch>
              {/* <Route exact path="/" component={ShowMagic} /> */}
              <Route exact path="/" component={Posts} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
        </Content>
      </div>
      
        
      </Layout>
    </BrowserRouter>
  );
}

export default App;
