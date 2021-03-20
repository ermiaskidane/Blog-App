import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import "./Blogs.scss"

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        const getBlogs = async () => {
            const { data } = await axios.get(`/api/articles/all`)
            console.log(data)
            setBlogs(data)
        }

        getBlogs()
    }, [])
    return (
      <div className='blogs'>
        <h1>All of the Blogs</h1>
        <div className='blogs__container'>
          <div className='blogs__wrapper'>
            <ul className='blogs__items'>
               {
                   blogs.map((b) => (
                    <React.Fragment key={b._id}>
                      <li className="blogs__item">
                        <Link className="blogs__item__link" to={`/blog/${b.slug}`}>
                            <figure className="blogs__item__pic-wrap" data-category="Adventure">
                                <img src={`${process.env.PUBLIC_URL}/images/img-9.jpg`} alt="Travel Image" className="blogs__item__img"/>
                            </figure>
                            <div className="blogs__item__info">
                                <h5 className="blogs__item__text">{b.description}</h5>
                            </div>
                        </Link>
                      </li>  
                  </React.Fragment>
                   ))
               }
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Blogs;
