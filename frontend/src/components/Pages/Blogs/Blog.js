import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";
import moment from "moment"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'

import Sprite from "../../../assets/images/sprite.svg";
import Rating from "./Rating";
import "./Blog.scss"

const Blog = ({match, history}) => {
    const [blog, setBlog] = useState({})
    const [allBlogs, setAllBlogs] = useState([])
    const [loading, setLoading] =useState(false)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")

    const dispatch = useDispatch()
 
    const userLogin = useSelector((state) => state.userLogin)
    const { loading: userLoading, error, userInfo } = userLogin

    
    useEffect(() => {
        const getBlog = async () => {
            const { data } = await axios.get(`/api/articles/read/${match.params.slug}`)
            console.log(data.reviews.length)
            setBlog(data)
        }

        getBlog()
    }, [match.params.slug])

    useEffect(() => {
        setLoading(true)
        const getBlogs = async () => {
            const { data } = await axios.get("/api/articles/all/")
            console.log(data, "blogs")
            const customData = []
            for(let i=0; i<8; i++){
                customData.push(data[i])
            }
            setLoading(false)
            setAllBlogs(customData)
        }

        getBlogs()
    },[match.params.slug])
 
    // const submitHandler = (id, data) => {
    //     // setVote(vote++)
    //     console.log(id, "blog id")
    //     console.log(data)

    //     const config = {
    //         headers: {
    //            "Content-Type": "application/json",
    //            Authorization: `Bearer ${userInfo.token}`,
    //         },
    //       }
    //     const claps =  async () => {
    //         const upVotes = await axios.post(`/api/articles/test/${id}`, data, config)
    //         // console.log(upVotes, "blog votes")
    //         return upVotes
    //     }

    //     claps()
    // }

    console.log(allBlogs)
    console.log(blog, "objects")
    console.log(blog.reviews, "objects length")
    return (
      <div className='blog'>
          <div className="blog__content">
            <div className="blog__content--side">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-hand`} />
                </svg>
                <span>72k</span>
                <svg>
                  <use xlinkHref={`${Sprite}#icon-bubble`} />
                </svg>
                <span>74 </span>
                <svg>
                  <use xlinkHref={`${Sprite}#icon-bookmark`} />
                </svg>
            </div>
            <div className="blog__content--container">
                <div className="blog__content--category">
                    <h2>{blog.title}</h2> 
                    <p className="author">Author: {blog.author}</p>
                    <p className="created--time">{moment(blog.createdAt).utc().format("DD/MM/YY")}</p>
                    <div className="content--body">
                        <figure>
                            <img src={blog.image ? blog.image : `/images/img-3.jpg`} alt="passive income"/>
                        </figure>
                        <text cols='60' rows='8' style={{whiteSpace: "pre-wrap"}} >{blog.markdown}</text>
                        {/* <p>{blog.markdown}</p> */}
                    </div>
                    <div className="blog--comments">
                        {/* <div className="blog--comments-list">
                            <h2>Comments</h2>
                            {blog.reviews.length > 1 ? (
                                <div className="comment--details">
                                {blog.reviews.map(review => (
                                    <div className="detail" key={review._id}>
                                        <strong>{review.name}</strong>
                                        <Rating value={review.rating} />
                                        <p>{review.createdAt.substring(0, 10)}</p>
                                    </div>
                                ))} 
                                <div className="user--comments">
                                    <h2>Write a customer comments</h2>
                                    {userInfo ? (
                                        <form onSubmit={submitHandler}>
                                            <div className="rating">
                                                <label htmlFor="rate">Rating</label>
                                                <select name="rate" id="rate"
                                                value={rating} onChange={(e) => setRating(e.target.value)}>
                                                    <option value="">Select...</option>
                                                    <option value="1">1 - Poor</option>
                                                    <option value="2">2 - Fail</option>
                                                    <option value="3">3 - Good</option>
                                                    <option value="4">4 - Very Good</option>
                                                    <option value="5">5 - Excellent</option>
                                                </select>
                                            </div>
                                            <div className="comments">
                                                <label htmlFor="comment">Comment</label>
                                                <textarea name="comment" id="comment" value={comment}onChange={(e) => setComment(e.target.value)}></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary"> submit</button>
                                        </form>
                                    ): (
                                        <div className="error-message">
                                            please login first
                                        </div>
                                    )}
                                </div>
                            </div>
                            ) : (<div>No reviews</div>)}
                            
                        </div> */}
                        {/* <div className="svgIcon" onClick={() => upVoteHandler(blog._id, vote)}>
                            <svg>
                                <use xlinkHref={`${Sprite}#icon-hand`} />
                            </svg>
                            <span>72k</span>
                        </div>
                        <div className="svgIcon">
                            <svg>
                                <use xlinkHref={`${Sprite}#icon-bubble`} />
                            </svg>
                            <span>74 </span>
                        </div>
                        <div className="svgIcon">
                            <svg>
                                <use xlinkHref={`${Sprite}#icon-bookmark`} />
                            </svg>
                        </div> */}

                    </div>
                </div>
            </div>
            <div className="blog__content--more">
                <h2>More Of Articles</h2>
                <ul className="blog__content--lists">
                    {loading && <div>loading...</div>}
                    {allBlogs.map((blog) =>(
                        <li className="content__list"  key={blog._id}>
                            <NavLink to={`/blog/${blog.slug}`}>{blog.title}</NavLink>
                            {/* <h3 onClick={clickHandler}></h3> */}
                            <p>{blog.author ? blog.author : "Laura vanderkam"}</p>
                            <img src={blog.image ? blog.image : `/images/img-2.jpg`} alt="author"/>
                        </li>
                    ))}
              </ul>
            </div>
            <div className="blog__footer">
                <ul className="blog__footer--lists">
                    <li>Blogs</li>
                    <li>About</li>
                    <li>Helps</li>
                </ul>
            </div>
          </div>
      </div>
    );
  }
  
  export default Blog;


