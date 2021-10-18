import React, { useState } from "react";
import Emoji from "./emoji"
import { Card, Button, InputGroup, Form, FormControl, ListGroup } from "react-bootstrap"

const format_time =(s)=> new Date(s).toLocaleDateString("en-US") + " "+ new Date(s).toLocaleTimeString("en-US");

const Post = ({ post, query, setQuery, appUser }) => {
  const { id, title, username, content, time, comments, upvote, downvote, heart, smile, angry, crying } = post
  const [inputComment, setComment] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqBody=JSON.stringify({
        username: appUser,
        content: inputComment
    })
    try{
        await fetch(`https://backend.markyamhs.workers.dev/posts/comment/${id}`, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: reqBody
        })
        }catch(err){
        console.log(err)
        }
    setQuery(query+1)
    setComment("")
      
  }
  const handleChange =(e)=>setComment(e.target.value)
  return (
    <Card style={{ width: '100%' }}>
        <Card.Header>
            <Emoji emojiType={'upvote'} query={query} setQuery={setQuery} appUser={appUser} userList={upvote} postId={id} >⬆</Emoji>
            <span>  Upvote this post    </span>
            <Emoji emojiType={'downvote'} query={query} setQuery={setQuery} appUser={appUser} userList={downvote} postId={id} >⬇</Emoji>
            <span>  Downvote this post</span>
        </Card.Header>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{username}, posted on {format_time(time)}</Card.Subtitle>
            <Card.Text>
                {content}
            </Card.Text>
            <Emoji emojiType={'heart'} query={query} setQuery={setQuery} appUser={appUser} userList={heart} postId={id} >💟</Emoji>
            <Emoji emojiType={'smile'} query={query} setQuery={setQuery} appUser={appUser} userList={smile} postId={id} >😆</Emoji>
            <Emoji emojiType={'angry'} query={query} setQuery={setQuery} appUser={appUser} userList={angry} postId={id} >😠</Emoji>
            <Emoji emojiType={'crying'} query={query} setQuery={setQuery} appUser={appUser} userList={crying} postId={id} >😭</Emoji>
            <ListGroup>
            {
                comments.map((c)=>(
                <ListGroup.Item>
                    <Card.Subtitle className="mb-2 text-muted">{c.username}</Card.Subtitle>
                    <Card.Text>{c.content}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{format_time(c.time)}</Card.Subtitle>
                </ListGroup.Item>))
            }
            </ListGroup>
            <Form>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Input your comment here"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={inputComment}
                    onChange={handleChange}
                    required
                    />
                    <Button type="submit" onClick={handleSubmit}>Add comment</Button>
                </InputGroup>
            </Form>
        </Card.Body>
    </Card>
  );
};

export default Post;