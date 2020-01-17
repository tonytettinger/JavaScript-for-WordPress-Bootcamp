import React, { useEffect } from 'react';
import renderPosts from './helpers/helpers'

function Posts() {

    useEffect( () => {
        renderPosts()
    } ,[])

        return (
            <div id="posts-inner">
            </div>
        )
    }

export default Posts;