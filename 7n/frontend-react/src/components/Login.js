import { Form, Input, Button, Checkbox } from 'antd';
import React, { useContext, useState, useRef, useEffect  } from 'react';
import PropTypes from 'prop-types';

export default function Login({setToken}){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  async function loginUser(credentials) {
    return fetch('http://localhost:8081/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then((data) => {
      console.log(data);
      
  });
  }


  const onFinish = async e => {
      
      const token = await loginUser({
        email,
        password
      });
      console.log(JSON.stringify(token))
      setToken(token);
    };
    

    return(
        <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      initialValues={{ remember: false }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input onChange={e => setEmail(e.target.value)} type = "email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password onChange={e => setPassword(e.target.value)} />
      </Form.Item>

      {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
