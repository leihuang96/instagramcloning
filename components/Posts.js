import { passThroughSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import { faker } from '@faker-js/faker'

function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = [...Array(2)].map((_, i) => ({
      id: i,
      username: faker.internet.userName(),
      userImg: faker.image.avatar(),
      img: faker.image.technics(),
      caption: faker.hacker.phrase(),
    }))

    setPosts(posts)
  }, []);
  
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
