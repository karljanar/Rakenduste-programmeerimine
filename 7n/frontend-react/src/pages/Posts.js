import { useContext, useState, useRef, useEffect } from "react"
import { Context } from "../store"
import { addPost, removePost, updatePosts } from "../store/actions"

function Posts(){
  const [title, setTitle] = useState("")
  const [state, dispatch] = useContext(Context)
  const inputRef = useRef(null)


    useEffect(()=>{
        dispatch(updatePosts([{
            id: Date.now(),
            title: "test"
        },
        {
            id: Date.now(),
            title: "test"
        },
        {
            id: Date.now(),
            title: "test"
        },
        ]))
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        addNewPost()
        setTitle("")
        
        if (inputRef.current) inputRef.current.focus()
        }



  const addNewPost = () => {

    const newPost = {
        id: Date.now(),
        title
      }
  
      dispatch(addPost(newPost))
  }
  
  console.log({ inputRef })

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
        <button type="submit">Submit</button>
      </form>

      { state.posts.data.map(e => <li key={e.id}>{e.id} {e.title}  
      <span style={{cursor: "pointer" }} onClick={() => dispatch(removePost(e.id))}>&#128540;</span>
      </li>) }

    </div>
  )
}

export default Posts