import React, {useState, useEffect} from 'react'
import axios from "axios"
import CardItem from "../../Cards/CardItem"
import "../../Cards/Cards.scss"

const Cards = () => {
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
      <div className='cards'>
        <h1>All of the Blogs</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
               {
                   blogs.map((b) => (
                       <React.Fragment key={b._id}>
                           <CardItem
                           src={`${process.env.PUBLIC_URL}/images/img-9.jpg`}
                           text={b.description}
                           label="Adventure"
                           path={`/blog/${b.slug}`}
                            />
                       </React.Fragment>
                   ))
               }
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;
