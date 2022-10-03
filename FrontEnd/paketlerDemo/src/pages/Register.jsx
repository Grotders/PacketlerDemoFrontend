import React from "react";
import { Alert } from "react-bootstrap";
import { Button, Col, Row, Form, FormGroup, Input, Label, InputGroup, InputGroupText, Container } from "reactstrap";

export default function Register() {
  return (
    <Container className="container-styles">
    <Form className="margin-bot">
      <Row>
        <Col xl={8} className="m-auto ">
        <Alert key='success' variant='success'>
          Kayıt başarılı!
        </Alert>
        <Alert key='danger' variant='danger'>
          Kayıt başarısız!
        </Alert>
          <FormGroup>
            <Label for="exampleEmail" className="forum-label">
              Email
            </Label>
            <InputGroup>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
              />
              <InputGroupText>@example.com</InputGroupText>
            </InputGroup>
          </FormGroup>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleState">First name</Label>
                <Input
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastname">Last name</Label>
                <Input id="lastname" name="lastname" placeholder="Last name" />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>

          <Button color="primary" className="w-100">
            Sign Up
          </Button>
        </Col>
      </Row>
    </Form>
    </Container>
  );
}
