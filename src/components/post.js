import React from "react";
import {Card} from "react-bootstrap"

const Post = ({post}) => {
    const { title, username, content } = post
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{username}</Card.Subtitle>
            <Card.Text>
                {content}
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>
  );
};

export default Post;