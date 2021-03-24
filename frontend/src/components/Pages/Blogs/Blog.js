import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";
import axios from "axios"
import Sprite from "../../../assets/images/sprite.svg";
import "./Blog.scss"

const Blog = ({match, history}) => {
    const [blog, setBlog] = useState("")
    const [allBlogs, setAllBlogs] = useState([])
    const [loading, setLoading] =useState(false)
    
    useEffect(() => {
        const getBlog = async () => {
            const { data } = await axios.get(`/api/articles/read/${match.params.slug}`)
            console.log(data)
            setBlog(data)
        }

        getBlog()
    }, [])

    useEffect(() => {
        setLoading(true)
        const getBlogs = async () => {
            const { data } = await axios.get("/api/articles/all/")
            console.log(data)
            setLoading(false)
            setAllBlogs(data)
        }

        getBlogs()
    },[])

    // const clickHandler = () => {
    //     history.push(`/blog/${blog.slug}`)
    // }
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
                    <p>Author: {blog.author}</p>
                    <div className="content--body">
                        <figure>
                            <img src={blog.image ? blog.image : `/images/img-3.jpg`} alt="passive income"/>
                        </figure>
                        <p>{blog.markdown}</p>
                        <p>{blog.markdown}</p>
                    </div>
                    <div className="blog--comments">
                        <div className="svgIcon">
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
                        </div>
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

//   <div className="blog__content--category">
//   <h2>A Mental Trick to Make Any Task Less Intimidating </h2>
//   <div className="content--body">
//       <figure>
//           <img src="/images/img-3.jpg" alt="passive income"/>
//       </figure>
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
//           Unde, quis hic mollitia, impedit saepe blanditiis obcaecati sapiente et adipisci omnis sunt, aliquid assumenda. Eos nesciunt veniam magni 
//           deleniti ipsa distinctio illo quo molestias sed velit omnis harum possimus vel enim, nemo ab eveniet fugit et autem rem. Porro asperiores, quo voluptatibus officia quia enim accusamus. Perspiciatis numquam
//            doloribus ea, sunt saepe officia corporis ex dicta consequatur quidem rerum voluptatem odit similique? Ratione ab architecto, 
//            ducimus dignissimos earum libero, aliquid nihil eos 
//            odio quidem vitae non saepe. Numquam officiis libero a cum consequatur voluptatem! Sequi fugiat nihil tempore cumque, eligendi totam rem, commodi quisquam ex ullam autem sit officiis, dolorem suscipit? Repudiandae aspernatur obcaecati ducimus cupiditate delectus 
//            molestiae consequuntur eaque earum amet aliquid reprehenderit magnam, corrupti incidunt doloribus ratione repellat adipisci, ab voluptates neque. Aspernatur officiis vitae ullam minima nisi tempore nobis est veritatis delectus reprehenderit quaerat fugit, molestiae, veniam voluptatem.</p>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quas quae distinctio iure accusantium. Ipsa doloribus consequuntur corporis ut 
//       ducimus nulla et pariatur dignissimos mollitia vitae adipisci dolor, eaque unde, repellat obcaecati commodi dolorem, quibusdam minus molestiae cum hic quam corrupti. Ducimus dolore totam aperiam autem earum fuga itaque quia.</p>
//   </div>
//   <div className="blog--comments">
//       <div className="svgIcon">
//           <svg>
//               <use xlinkHref={`${Sprite}#icon-hand`} />
//           </svg>
//           <span>72k</span>
//       </div>
//       <div className="svgIcon">
//           <svg>
//               <use xlinkHref={`${Sprite}#icon-bubble`} />
//           </svg>
//           <span>74 </span>
//       </div>
//       <div className="svgIcon">
//           <svg>
//               <use xlinkHref={`${Sprite}#icon-bookmark`} />
//           </svg>
//       </div>
//   </div>
