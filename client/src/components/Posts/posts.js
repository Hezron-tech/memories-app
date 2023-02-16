import React from 'react'
// import useStyles from './styles'
import { useSelector } from 'react-redux';

import Post from './post/Post'

const Posts =()=>{
    // const classes = useStyles()
    const posts = useSelector((state)=>state.Posts)

    console.log(posts);
    return(
        <div>
            <h1>Posts</h1>

            <Post/>
        </div>
    )
}

export default Posts