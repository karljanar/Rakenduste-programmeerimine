import { Form, Input, Button } from 'antd';
import './App.css';

function Register(){
    const onFinish = e => {
        console.log('Success:', e);
      };
    
      const onFinishFailed = e => {
        console.log('Failed:', e);
      };

    return(
    <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your first name!' }]}
        >
        <Input />
        </Form.Item>
        <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your last name!' }]}
        >
        <Input />
        </Form.Item>
        <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
        >
        <Input type = "email" />
        </Form.Item>

        <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        >
        <Input.Password />
        </Form.Item>


      <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Register