import { useContext, useState, useRef, useEffect } from "react"
import { Context } from "../store"
import { addPost, removePost, updatePosts } from "../store/actions"
import { Form, Input, Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

function Posts(){
  const [postBody, setPostBody] = useState("");
  const inputRef = useRef(null);
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPost] = useState([]);
  const [postLength, setPostLength] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8081/api/post').then(res => {
      console.log(res)
        return res.json();
    }).then((data) => {
        console.log(data);
        setIsLoading(false);
        setLoadedPost(data);
    });
  },[postLength]);



  function removePost(id){
    const userId = "6182d9721810c99d4629f315";
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
      user: "6182d9721810c99d4629f315"
    }
    console.log(JSON.stringify(newPost));
    fetch('http://localhost:8081/api/post/create', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPost),
    } ).then(res => {
    console.log(res)
    setPostLength(postLength + 1)
      // return res.json();
    })
    }
  
  if(isLoading){
    return(
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    );
  }

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
      <Button type="primary" htmlType="submit">
        Tra toota nuud
      </Button>
    </Form.Item>
  </Form>
      { loadedPosts.map(e => <li key={e._id}>{e._id} {e.body} | Posted by:   
      <span style={{cursor: "pointer" }} onClick={() => removePost(e._id)}
        ><DeleteFilled /> tra vardjas ei toota ju
      </span></li>) }
    </div>
  )
}

export default Posts