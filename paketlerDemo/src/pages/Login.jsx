import React, { useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import UserService from '../services/userService';



export default function Login() {

  
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  

  

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUser(prevState => {
      return {
      ...prevState,
      [name]: value
    };
    
  });}

  const handleSubmit = event => {
    let userService = new UserService();
    let result = userService.Login(user);
    if(result.data.success) {
      window.localStorage.setItem('isAuth', "true");
    }
    
  }


  return (
    <Container className="margin-bot container-styles">
      <Row>
        <Col xl={4} className="m-auto">
          <Form onSubmit={handleSubmit}>
          <Alert key='success' variant='success'>
          Giriş başarılı!
        </Alert>
        <Alert key='danger' variant='danger'>
          Giriş başarısız!
        </Alert>
            <Label className="sign-text">Please sign in</Label>
            <FormGroup floating>
              <Input
                id="email"
                name="email"
                placeholder="Email address"
                type="email"
                onChange={handleChange}
              />
              <Label for="loginEmail">Email address</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                onChange={handleChange}
              />
              <Label for="loginPassword">Password</Label>
            </FormGroup>{" "}
            <Button type="submit" color="primary" size="lg" className="w-100">
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
