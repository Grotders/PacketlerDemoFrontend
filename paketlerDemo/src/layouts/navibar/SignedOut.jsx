import React from "react";
import { Col, Row } from "reactstrap";
import {Nav} from "react-bootstrap"
import { NavLink } from "react-router-dom";

export default function SignedOut() {
  return (
    
    <Row>
        <Col>
        <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
        </Col>
        <Col>
        <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
        </Col>
    </Row>
  );
}
