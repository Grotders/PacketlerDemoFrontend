import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import { redirect } from "react-router-dom";
import UserService from "../../services/userService";

export default function UserPacketsPage() {
  const [packets, setPackets] = useState([]);

  // sayfa yüklendiğine çalışacak bir metot
  // axios data döndürecek bu yüzden data.data yazıyoruz.
  useEffect(() => {
    let userService = new UserService();
    userService.getPackets().then((result) => setPackets(result.data.data));
  }, []);

  const clickMe = () => redirect("/login");

  return (
    <Container className="margin-bot container-styles">
      <Row>
        {packets.map((packet) => (
          <Col key={packet.packetId}>
            <Card style={{ width: "17rem" }} className="packet-card mb-5">
              <CardBody>
                <CardTitle tag="h5">Packet: {packet.title}</CardTitle>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>{packet.data} GB</ListGroupItem>
                <ListGroupItem>{packet.minutes} MIN</ListGroupItem>
                <ListGroupItem>{packet.sms}SMS</ListGroupItem>
              </ListGroup>
              <CardBody>
                <CardText tag="h4" className="mb-5">
                  ${packet.price}
                </CardText>
                <Button color="primary" className="w-100" onClick={clickMe}>
                  Buy Now
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
