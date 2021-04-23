import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import Paginate from "../../Paginate/Paginate"
import Sprite from "../../../assets/images/sprite.svg";
import axios from "axios"
import "../Blogs/Blogs.scss"

const EditArticle = ({ match}) => {

    const [userBlogs, setUserBlogs] = useState([])
    const [page, setPage] = useState()
    const [pages, setPages] = useState()

    const keyword = match.params.keyword || ""
 
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()
 
    const userLogin = useSelector((state) => state.userLogin)
    const { loading: userLoading, error, userInfo } = userLogin

    const userArts = userInfo._id || ""

    
    useEffect(() => {
        const getBlogs = async () => {
            const { data } = await axios.get(`/api/articles/userBlogs?keyword=${keyword}&pageNumber=${pageNumber}&userArts=${userArts}`)
            console.log(data)
            setPage(data.page)
            setPages(data.pages)
            setUserBlogs(data.userArts)
        }

        getBlogs()
    }, [pageNumber, keyword, userArts])
     
    console.log(userInfo, "blogs app")
    return (
      <div className='blogs'>
        <h1>All of the Blogs</h1>
        {messageDelete && <h2 className="delete--message">{messageDelete}</h2>}
        <div className='blogs__container'>
          <div className='blogs__wrapper'>
            {userBlogs.length !== 0 ? (
                <ul className='blogs__items'>
                {
                    userBlogs.map((b) => (
                     <React.Fragment key={b._id}>
                       <li className="blogs__item">
                         <Link className="blogs__item__link" to={`/blog/${b.slug}`}>
                             <figure className="blogs__item__pic-wrap" data-category="Adventure">
                                 <img src={b.image ? b.image :`${process.env.PUBLIC_URL}/images/img-9.jpg`} alt="Travel Image" className="blogs__item__img"/>
                             </figure>
                             </Link>
                             <div className="blogs__item__info">
                                 <h5 className="blogs__item__text">{b.description}</h5>

                                  {userInfo && userInfo._id === b.user ? (
                                          
                                     <div className="blogs__item--button">
                                      <button type="submit" className="edit--blog">
                                        <Link to={`/update/${b._id}`}>Edit</Link>
                                      </button>

                                      <button type="submit" className="delete--blog" onClick={() => DeleteHandler(b._id)}>
                                        <svg>
                                          <use xlinkHref={`${Sprite}#icon-bin`} />
                                        </svg>
                                      </button>
                                      </div> 
                                    
                                  ): (<div></div>)}
                                 
                             </div>
                       </li>  
                   </React.Fragment>
                    ))
                }
             </ul>
            ) : ( <h2 style={{color: "black", textAlign: "center", fontSize: "14px"}}> Only the Author can Edit</h2>)}
            
            {userBlogs.length !== 0 ?(
                <Paginate path="edit" pages={pages} page={page} keyword={keyword ? keyword : ""}/>
            ): (
                <></>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default EditArticle;

