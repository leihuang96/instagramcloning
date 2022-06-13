import { passThroughSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'
import React from 'react'
import Post from './Post'
import { faker } from '@faker-js/faker'

const posts = [
  {
    id: 123,
    username: 'lei',
    userImg: faker.image.avatar(),
    img: faker.image.city(),
    caption: '3123123',
  },
  {
    id: 123,
    username: 'lei',
    userImg: faker.image.avatar(),
    img: faker.image.technics(),
    caption: '21312321',
  },
]

function Posts() {
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
