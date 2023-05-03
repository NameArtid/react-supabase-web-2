import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import supabase from "../config/db";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (data.session) {
      setIsSuccess(!isSuccess);
      console.log(data);
    } else {
      setIsFailed(!isFailed);
      console.log(error);
    }
    setTimeout(() => {
      setIsSuccess(false);
      setIsFailed(false);
    }, 2000);
  }

  return (
    <>
      <Alert variant="success" show={isSuccess}>
        Login Success
      </Alert>
      <Alert variant="danger" show={isFailed}>
        Login Failed !!
      </Alert>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col sm={6} className="shadow-sm mb-3 bg-body p-4 ">
            <h1 className="text-center">Login</h1>
            <Form className="text-center">
              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="outline-primary"
                className="mb-2"
                onClick={handleLogin}
              >
                Submit
              </Button>
              <h6>
                {" "}
                Not a member ?
                <Link to={"/register"} className="ms-3">
                  Register Now{" "}
                </Link>
              </h6>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
