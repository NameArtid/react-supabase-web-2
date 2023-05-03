import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import supabase from "../config/db";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  async function handleRegister(){
    const {data,error}= await supabase.auth.signUp({
        email,password
    })
    console.log(data)
    if (data){
        await supabase.from('Profile').insert({
            userid:data.user.id,
            username:username,
            address,
            mobile
        })
    }
  }

  return (
    <Container >
      <Row className="d-flex justify-content-center">
        <Col sm={6}>
        <Form className="text-center shadow-sm bg-body p-4">
        <h1>Register From</h1>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="mobile"
            placeholder="Mobile Phone"
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleRegister}>
          Save
        </Button>
      </Form>
        </Col>
      </Row>
    </Container>
  );
}
