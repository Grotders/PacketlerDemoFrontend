import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AdminService from "../../services/AdminService";
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

export default function PacketDetail() {
  let { packetId } = useParams();
 
  const [packet, setPacket] = useState({
    title: '',
    price: '',
    data:'',
    minutes:'',
    sms:''
  });

  // sayfa yüklendiğine çalışacak bir metot
  // axios data döndürecek bu yüzden data.data yazıyoruz.
  useEffect(() => {
    let adminService = new AdminService();
    adminService
      .getPacketById(packetId)
      .then((result) => setPacket(result.data.data));
  }, [packetId]);


  const handleChange = (event) => {
    const {name, value} = event.target;
    setPacket(prevState => {
      return {
      ...prevState,
      [name]: value
    };
  });
  }

  const handleSubmit = event => {
    let adminService = new AdminService();
    adminService.updatePacket(packet);
    event.preventDefault();
  }

  const handleDelete = event => {
    let adminService = new AdminService();
    adminService.deletePacket(packet.packetId);
    event.preventDefault();
  }

  return (
    <Container className="container-styles">
      <Form onSubmit={handleSubmit} >
        <Row>
          <Col md={12} className="mb-5">
            <Label>Id: {packetId}</Label>
          </Col>

          <Col md={6} className="mb-5">
            <InputGroup>
              <InputGroupText>Title:</InputGroupText>
              <Input id="title" name="title" type="text" onChange={handleChange} value={packet.title} />
            </InputGroup>
          </Col>

          <Col md={6}>
            <InputGroup>
              <InputGroupText>Price:</InputGroupText>

              <Input id="price" name="price" type="text" onChange={handleChange} value={packet.price} />
              <InputGroupText>$</InputGroupText>
            </InputGroup>
          </Col>
          <Col md={4}>
            <InputGroup className="mb-5">
              <InputGroupText>Data:</InputGroupText>
              <Input id="data" name="data" value={packet.data} onChange={handleChange} type="text" />
              <InputGroupText>GB</InputGroupText>
            </InputGroup>
          </Col>
          <Col md={4}>
            <InputGroup>
              <InputGroupText>Min:</InputGroupText>
              <Input id="minutes" name="minutes" value={packet.minutes} onChange={handleChange} type="text" />
            </InputGroup>
          </Col>
          <Col md={4}>
            <InputGroup>
              <InputGroupText>SMS:</InputGroupText>
              <Input id="sms" name="sms" value={packet.sms} onChange={handleChange} type="text" />
            </InputGroup>
          </Col>

          <Col md={6} className="mb-5">
            <Label for="createdBy">created by: {packet.createBy} </Label>
          </Col>
          <Col md={6}>
            <Label for="createdAt">created at: {packet.createAt}</Label>
          </Col>
          <Col md={6} className="mb-5">
            <Label for="updatedBy">updated by: {packet.updateBy}</Label>
          </Col>
          <Col md={6}>
            <Label for="updatedBy">updated at: {packet.updateAt}</Label>
          </Col>
        </Row>
        <Button  color="success" type="submit" className="me-2 mb-3">Save</Button>
        
      </Form>
      <Button onClick={handleDelete} color="danger">Delete</Button>
    </Container>
  );
  }