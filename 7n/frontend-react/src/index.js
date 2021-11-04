import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Store from './store';
import App from './App';
import { Layout } from 'antd';
let mountNode = document.getElementById('root');



const { Footer } = Layout;

render(
  <Layout className="layout" >
      <Store>
        <App />
      </Store>
    <Footer style={{ textAlign: 'center', position: "sticky", bottom: "0" }}>Karl Janar Kinkar</Footer>
  </Layout>,
  mountNode,
);
