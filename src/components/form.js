import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";

const SubmitForm = ({query, setQuery, username}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChange = e => setTitle(e.target.value);
  const onContentChange = e => setContent(e.target.value);
  
  const handleSubmit = async (e) =>{
      const reqBody=JSON.stringify({
        title,
        username,
        content
      })
      try{
        await fetch('https://backend.markyamhs.workers.dev/posts', {
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
    setTitle("")
    setContent("")
  }
  return (
    <Container style={{padding: "20px"}}>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your post title</Form.Label>
                <Form.Control type="text" placeholder="Your post title" value={title} onChange={onTitleChange} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your post content</Form.Label>
                <Form.Control as="textarea" placeholder="Your post content" value={content} onChange={onContentChange} required rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    </Container>
  );
};

export default SubmitForm;