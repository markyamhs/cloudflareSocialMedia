import React from "react";
import Post from "./post"
import { Stack, Container } from "react-bootstrap"

const Posts = ({ query, setQuery, username, posts }) => {
  posts = posts.sort(function(a,b){
    const scoreA = a.upvote.length - a.downvote.length
    const scoreB = b.upvote.length - b.downvote.length
    if(scoreA == scoreB){
      return a.time < b.time ? 1 : -1;
    }
    return scoreA < scoreB ? 1 : -1;
  });
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