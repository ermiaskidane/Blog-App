import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"
import "../AddBlog/AddBlog.scss"
// import "../../App.css"

const UpdateArticle = ({match, history}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [markdown, setMarkdown] = useState("")
    
    useEffect(() => {
        const editData = async () => {
            const { data } = await axios.get(`/api/articles/edit/${match.params.id}`)
            setTitle(data.title)
            setDescription(data.description)
            setMarkdown(data.markdown)
        }

        editData()
    }, []) 

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {title, description, markdown}
        // 60536e4333676b6ad0af3570
        console.log(data, match.params.id)
        const articleData = async () => {
            const blogPost = await axios.put(`/api/articles/${match.params.id}`, data)

            return blogPost
        }
        articleData()
        history.push("/services")
    }
    return (
        <div className="form">
            <h1>Update Article</h1>
            <form onSubmit={submitHandler} id="form-products">
                <div className="form__fields">
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

export default UpdateArticle