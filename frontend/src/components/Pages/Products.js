import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"
import "./Products.scss"
// import "../../App.css"

const Products = ({history}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [markdown, setMarkdown] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {title, description, markdown}

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
            <form onSubmit={submitHandler}>
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

export default Products
