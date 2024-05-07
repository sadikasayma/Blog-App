import React, { useState } from 'react';
import Thumbnail1 from "../images/blog1.jpg";
import Thumbnail2 from "../images/blog2.jpg";
import Thumbnail3 from "../images/blog3.jpg";
import Thumbnail4 from "../images/blog4.jpg";
import PostItem from './PostItem';

const Dummy_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: "food",
        title: "Thisbdjhdjhdjhdhgdjhgdjh",
        desc: 'hdjhgjhdgjhdgjdgdjgdjdjgdhhdhhdhdhddhhddh',
        authorID: 3
    },
    {
        id: '3',
        thumbnail: Thumbnail2,
        category: "food",
        title: "Thisbdjhdjhdjhdhgdjhgdjh",
        desc: 'hdjhgjhdgjhdgjdgdjgdjdjgdhhdhhdhdhddhhddh',
        authorID: 1
    },
    {
        id: '4',
        thumbnail: Thumbnail3,
        category: "food",
        title: "Thisbdjhdjhdjhdhgdjhgdjh",
        desc: 'hdjhgjhdgjhdgjdgdjgdjdjgdhhdhhdhdhddhhddh',
        authorID: 13
    },
    {
        id: '5',
        thumbnail: Thumbnail4,
        category: "food",
        title: "Thisbdjhdjhdjhdhgdjhgdjh",
        desc: 'hdjhgjhdgjhdgjdgdjgdjdjgdhhdhhdhdhddhhddh',
        authorID: 30
    }
];

const Posts = () => {
    const [posts, setPosts] = useState(Dummy_POSTS);

    return (
        <section className='posts'>
            <div className ="container posts__container">
            {
                posts.map((post) => (
                    <PostItem 
                        key={post.id} 
                        postID={post.id} 
                        thumbnail={post.thumbnail} 
                        category={post.category} 
                        title={post.title}
                        description={post.desc} 
                        authorID={post.authorID}
                    />
                ))
            }
            </div>
        </section>
    );
}

export default Posts;