import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try{
        const resp = await fetch(
          'https://backend.markyamhs.workers.dev/posts',
          {
            mode: 'no-cors',
            method: "get"
          }
        );
        console.log(resp);
        const postResp = await resp.json();
        console.log(postResp);
        setPosts(postResp);
      }catch(e){
        console.log(e)
      }
    };

    getPosts();
  }, []);

  return (
    <div>
        {posts.map((post,index) => (
        <div key={index}>
          <h2>
            <p>{post.title}</p>
            <p>{post.username}</p>
            <p>{post.content}</p>
          </h2>
        </div>
        ))}
    </div>
  );
};

export default Posts;