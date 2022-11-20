import React, {useState, useEffect} from 'react'
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AdminService from "../../services/AdminService"
import {
  Form,
  Row,
  Col,
  InputGroupText,
  Input,
  Label,
  Button,
  InputGroup,
} from "reactstrap";
export default function UserDetail() {
  let { userId } = useParams();
 
  const [user, setUser] = useState({
    birthdate: '',
    email: '',
    firstname:'',
    lastname:'',
    packetName:'',
    packetId: 0,
    password: '',
    userId: 0
  });

  useEffect(() => {
    let adminService = new AdminService();
    adminService.getUsersById(userId)
      .then((result) => setUser(result.data.data));
  }, [userId]);


  const handleChange = (event) => {
    const {name, value} = event.target;
    setUser(prevState => {
      return {
      ...prevState,
      [name]: value
    };
  });}

  const handleSubmit = event => {
    let adminService = new AdminService();
    adminService.updateUser(user);
    event.preventDefault();
  }

  const handleDelete = event => {
    let adminService = new AdminService();
    adminService.deleteUser(userId);
    event.preventDefault();
  }
  return (
    <Container className="container-styles">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={12} className="mb-5">
            <Label>Id: {userId}</Label>
          </Col>

          <Col md={6} className="mb-5">
            <InputGroup>
              <InputGroupText>first name:</InputGroupText>
              <Input id="firstname" name="firstname" type="text" onChange={handleChange} value={user.firstname} />
            </InputGroup>
          </Col>

          <Col md={6} className="mb-5">
            <InputGroup>
              <InputGroupText>last name:</InputGroupText>
              <Input id="lastname" name="lastname" type="text" onChange={handleChange} value={user.lastname} />
            </InputGroup>
          </Col>
          <Col md={4} className="mb-5">
          <InputGroup>
              <InputGroupText>birth date:</InputGroupText>
              <Input id="birthdate" name="birthdate" type="date" onChange={handleChange} value={user.birthdate} />
            </InputGroup>
          </Col>
          <Col md={4} className="mb-5">
            <InputGroup>
              <InputGroupText>email:</InputGroupText>
              <Input id="email" name="email" type="email" onChange={handleChange} value={user.email} />
            </InputGroup>
          </Col>
          <Col md={4} className="mb-5">
            <InputGroup>
              <InputGroupText>password:</InputGroupText>
              <Input id="password" name="password" type="password" onChange={handleChange} value={user.password} />
            </InputGroup>
          </Col>
          <Col md={4} className="mb-5">
            <InputGroup>
              <InputGroupText>packet name:</InputGroupText>
              <Input id="packet" name="packet" type="text" onChange={handleChange} value={user.packet} />
            </InputGroup>
          </Col>
        </Row>
        <Button  color="success" type="submit" className="me-2 mb-3">Save</Button>
      </Form>
      <Button onClick={handleDelete} color="danger">Delete</Button>
    </Container>
  )
}
