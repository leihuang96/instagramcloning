import { passThroughSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import React from 'react'
import Post from './Post'
import { faker } from '@faker-js/faker';

const posts = [
  {
    id: 123,
    username: 'lei',
    userImg: faker.image.avatar(),
    img: faker.image.city(),
    caption: faker.lorem.text(),
  },
  {
    id: 123,
    username: 'lei',
    userImg: faker.image.avatar(),
    img: faker.image.technics(),
    caption: faker.lorem.text(),
  },
];

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
  );
}

export default Posts;