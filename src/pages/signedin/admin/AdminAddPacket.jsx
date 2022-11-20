import React from 'react'
import { Container } from "react-bootstrap";
import AdminService from "../../../services/AdminService"
import {
    Form,
    Row,
    Col,
    InputGroupText,
    Input,
    Button,
    InputGroup,
  } from "reactstrap";

export default function PacketAdd() {
  const [formValue, setformValue] = React.useState({
    title: '',
    price: '',
    packetId: '',
    data:'',
    minutes:'',
    sms:''
  });
  
  const handleSubmit = event => {
    let adminService = new AdminService();
    adminService.addPacket(formValue);
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
              <InputGroupText>Title:</InputGroupText>
              <Input id="title" name="title" type="text" placeholder='title' onChange={handleChange} />
            </InputGroup>
          </Col>

          <Col md={6}>
            <InputGroup>
              <InputGroupText>Price:</InputGroupText>

              <Input id="price" name="price" type="text" placeholder='price' onChange={handleChange}/>
              <InputGroupText>$</InputGroupText>
            </InputGroup>
          </Col>
          <Col md={4}>
            <InputGroup className="mb-5">
              <InputGroupText>Data:</InputGroupText>
              <Input id="data" name="data" placeholder='data' type="text" onChange={handleChange}/>
              <InputGroupText>GB</InputGroupText>
            </InputGroup>
          </Col>
          <Col md={4}>
            <InputGroup>
              <InputGroupText>Min:</InputGroupText>
              <Input id="minutes" name="minutes" placeholder='minutes' type="text" onChange={handleChange}/>
            </InputGroup>
          </Col>
          <Col md={4}>
            <InputGroup>
              <InputGroupText>SMS:</InputGroupText>
              <Input id="sms" name="sms" placeholder='sms' type="text" onChange={handleChange}/>
            </InputGroup>
          </Col>
        </Row>
        <Button type='submit'>Save</Button>
      </Form>
    </Container>
  )
}


