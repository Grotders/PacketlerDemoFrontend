import React from 'react'
import { Container } from "react-bootstrap";
import {
    Form,
    Row,
    Col,
    InputGroupText,
    Input,
    Button,
    InputGroup,
  } from "reactstrap";
import AdminService from "../../services/adminService"

export default function UserAdd() {
    const [formValue, setformValue] = React.useState({
        firstname: '',
        lastname: '',
        birthdate: '',
        email:'',
        password:''
      });
      const handleSubmit = event => {
        let adminService = new AdminService();
        adminService.addUser(formValue);
        event.preventDefault();
      }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setformValue(prevState => {
          return {
          ...prevState,
          [name]: value
        };
      });
    }
  return (
    <Container className="container-styles">
      <Form onSubmit={handleSubmit}>
        <Row>

          <Col md={6} className="mb-5">
            <InputGroup>
              <InputGroupText>firstname:</InputGroupText>
              <Input id="firstname" name="firstname" type="text" placeholder='firstname' onChange={handleChange} />
            </InputGroup>
          </Col>

          <Col md={6}>
            <InputGroup>
              <InputGroupText>lastname:</InputGroupText>
              <Input id="lastname" name="lastname" type="text" placeholder='lastname' onChange={handleChange}/>
            </InputGroup>
          </Col>
          <Col md={4} className="mb-5">
          <InputGroup>
              <InputGroupText>birthdate:</InputGroupText>
              <Input id="birthdate" name="birthdate" type="date" placeholder='birthdate' onChange={handleChange}/>
            </InputGroup>
          </Col>
          <Col md={4}>
            <InputGroup>
              <InputGroupText>email:</InputGroupText>
              <Input id="email" name="email" type="email" placeholder='email' onChange={handleChange}/>
            </InputGroup>
          </Col>
          <Col md={4}>
            <InputGroup>
              <InputGroupText>password:</InputGroupText>
              <Input id="password" name="password" type="password" placeholder='password' onChange={handleChange}/>
            </InputGroup>
          </Col>
        </Row>
        <Button type='submit'>Save</Button>
      </Form>
    </Container>
  )
}
