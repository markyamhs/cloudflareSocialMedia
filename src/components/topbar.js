import React from "react";
import { Navbar, Container, Button } from "react-bootstrap"
import logo from '../logo.png'

const Topbar =({ username, handleLogin }) =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                Mark's Fake Twitter
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{paddingRight: "20px"}}>
                        {username.length!=0? `Signed in as: ${username}`:"Not yet logged in!"}
                    </Navbar.Text>
                    <Button onClick={handleLogin}>Switch account</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Topbar;