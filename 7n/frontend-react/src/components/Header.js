import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import '../index.css';

import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';


function Header(props){
    const {Header} = Layout;
    return(
        <Layout className="layout">
          <Header className="header" style={{position: "sticky", top: "0"}}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item><NavLink to="/">Posts</NavLink></Menu.Item>
              <Menu.Item><NavLink to="/login">Login</NavLink></Menu.Item>
              <Menu.Item><NavLink to="/register">Register</NavLink></Menu.Item>
              {props.user ?
              <Menu.Item>Logged in as: { props.user.firstName }</Menu.Item> :
              <Menu.Item>Not logged in</Menu.Item>}
            </Menu>
          </Header>
        </Layout>
      );
}



export default Header;