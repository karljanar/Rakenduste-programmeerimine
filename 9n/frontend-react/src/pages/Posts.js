import {  useState, useRef, useEffect } from "react"
import { Form, Input, Button, Table, Space } from 'antd';

function Posts(props){
  const [postBody, setPostBody] = useState("");
  const inputRef = useRef(null);
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPost] = useState([]);
  const [postLength, setPostLength] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8081/api/post').then(res => {
        return res.json();
    }).then((data) => {
        setIsLoading(false);
        setLoadedPost(data);
    });
  },[postLength]);

  function removePost(id){
    
    fetch(`http://localhost:8081/api/post/delete/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
    setPostLength(postLength + 1)

  }

  const handleSubmit = e => {
      addNewPost();
      form.resetFields();
      }

  const addNewPost = () => {
    
    const newPost = {
      body: postBody,
      user: props.user.id
    }
    fetch('http://localhost:8081/api/post/create', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPost),
    } ).then(res => {
    setPostLength(postLength + 1)
    })
    }
  
  if(isLoading){
    return(
        <div>Loading...</div>
    );
  }
  
  const { Column } = Table;

  return (
    <div style={{ textAlign: "center" }}>
      <Form
        form = {form}
        onFinish={handleSubmit}>
        <Form.Item
          name="Post"
          rules={[{ required: true, message: 'This field is required!' }]}
        >
        <Input 
          placeholder="Post" 
          ref={inputRef} type="text" 
          value={postBody} 
          onChange={e => setPostBody(e.target.value)} />
        </Form.Item>
        <Form.Item>
          {props.user ?
          <Button type="primary" htmlType="submit">
            Post
          </Button> : <p>You need to log in before posting</p> 
          }
        </Form.Item>
        </Form>
      <Table dataSource={loadedPosts} pagination={false} scroll={{ y: 240 }}>
        <Column title="Post ID" dataIndex="_id" key="_id" />
        <Column title="Post" dataIndex="body" key="body" />
        <Column title="Created At" dataIndex="createdAt" key="createdAt" />
        <Column
          title="Created By"
          key="action"
          render={(text, record) => (
            <Space size="middle">{ record.user ?
              <p>{record.user.email}</p> :
              <p>----</p>
            }
            </Space>
          )}
        />
        <Column title="Delete" key="delete" render={(text, record) => (
        <Space size="middle">
          <Button type="primary" danger onClick={() => removePost(record._id)}>
            Delete
          </Button>
        </Space>
      )} />
      </Table>
    </div>
  )
}

export default Posts