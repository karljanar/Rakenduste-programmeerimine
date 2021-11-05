
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './components/App.css'
import React, { useState } from 'react';

import Posts from "./pages/Posts";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import StateExample from "./components/UseStateExamp";
import { Layout } from 'antd';
import ShowMagic from "./components/ShowMagic";


function App() {
    const [user, setUser] = useState();
    const {Content} = Layout;


    return (
    <div>
        {/* <h1>Some text</h1> */}
        <BrowserRouter>
            <Header user={user} />
            <Layout className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{  padding: 24, minHeight:"calc(100vh - 200px)" }}>
            <Content style={{ padding: '0 24px' }}>
                <Switch>
                    <Route exact path="/">
                        <Posts user={user}/>
                    </Route>
                    <Route exact path="/login"  >
                        <Login setUser={setUser} />
                    </Route>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/ex" component={StateExample} />
                    <Route exact path="/sm" component={ShowMagic} />
                </Switch>
            </Content>
            </div>
            </Layout>
        </BrowserRouter>
    </div>
    );
}

export default App;