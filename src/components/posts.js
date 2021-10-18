import React from "react";
import Post from "./post"
import { Stack, Container } from "react-bootstrap"

const Posts = ({posts}) => {
  return (
    <Container>
      <Stack gap={3}>
          {posts.map((post,index) => (
            <Post post={post} key={index}/>
          ))}
      </Stack>
    </Container>
  );
};

export default Posts;