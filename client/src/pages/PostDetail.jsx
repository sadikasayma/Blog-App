import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'
const PostDetail = () => {
  return (
    <section className='post-detail'>
        <div className='container post-detail__container'>
            <div className='post-detail__header'>
               <PostAuthor/> 
               <div className="post-detail__buttons">
                <Link to={`/posts/werwer/edit`}className='btn sm primary'>Edit</Link>
                <Link to={`/posts/werwer/delete`}className='btn sm danger'>Delete</Link>
               </div>
            </div>
            <h1>This is the post title!</h1>
            <div className="post-detail__thumbnail">
                <img src={Thumbnail} alt=""/>
            </div>
            <p>
                hdjhgjhdgjhdgjdgdjgdjdjgdhhdhhdhdhddhhddh
            </p>
            <p>
                hdjhgjhdgjhdgjdgdjgdjdjgdhhdhhdhdhddhhddh
            </p>
            ffhfhfhfhhfhgfhgfhgfhghghhhgfhghghh
        </div>
        <p>
            hdhjhjhjhghjddjhdjdhjhdhjdhdjhdjhhd
        </p>
    </section>
  )
}

export default PostDetail