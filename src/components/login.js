import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap"

const Login = ({show, setShow, setUser }) => {
  const [inputName, setInputName] = useState("");
  const handleLogin = () => {
      if(inputName.length<3){
          alert("Username has to be at least 3 characters long!")
      } else {
        setUser(inputName)
        setShow(false)
      }
  }
  const handleChange =(e)=>setInputName(e.target.value)
  return (
    <Modal
    show={show}
    onHide={handleLogin}
    backdrop="static"
    keyboard={false}
    >
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
        <Modal.Body>
          Please set your username here
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={inputName}
            onChange={handleChange}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleLogin}>
          Set
        </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default Login;