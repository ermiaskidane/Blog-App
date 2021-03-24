import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"
import "./AddBlog.scss"
// import "../../App.css"

const AddBlog = ({history}) => {
    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const [image, setImage] = useState('')
    const [description, setDescription] = useState("")
    const [markdown, setMarkdown] = useState("")
    const [uploading, setUploading] = useState(false)

    const uploadFileHandler = async (e) => {
        console.log(e.target.files)
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)
    
        try {
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
    
          const { data } = await axios.post('/api/upload', formData, config)
    
          setImage(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {author, title, image, description, markdown}

        const articleData = async () => {
            const blogPost = await axios.post("/api/articles", data)
            return blogPost
        }
        articleData()
        history.push("/")
    }
    return (
        <div className="form">
            <h1>New Article</h1>
            <form onSubmit={submitHandler} id="form-products">
                <div className="form__fields">
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setAuthor(e.target.value)}
                    className="form-control"
                    placeholder="Author name"
                    required
                    />
                    <input 
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    placeholder="enter the title"
                    required
                    />
                    <input 
                    type="file"
                    name="image"
                    id="image"
                    onChange={uploadFileHandler}
                    className="form-control"
                    placeholder="enter the img url"
                    required
                    />
                    <textarea 
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    placeholder="write the description"
                    required
                    ></textarea>
                    <textarea 
                    name="markdown"
                    id="markdown"
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    className="form-control"
                    placeholder="write the markdown"
                    required
                    ></textarea>
                </div>
                <NavLink to="/">
                    cancle
                </NavLink>
                <button type="submit" className="form__btn">Save</button>
            </form>
        </div>
    )
}

export default AddBlog
