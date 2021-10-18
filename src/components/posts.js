import React from "react";
import Post from "./post"
import { Stack, Container } from "react-bootstrap"

const Posts = ({ query, setQuery, username, posts }) => {
  return (
    <Container>
      <Stack gap={3}>
          {posts.map((post,index) => (
            <Post key={`post-${index}`} post={post} appUser={username} {...{query, setQuery}}/>
          ))}
      </Stack>
    </Container>
  );
};

export default Posts;