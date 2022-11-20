import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import AdminService from "../../../services/AdminService";
import { Col, Form, Row } from "reactstrap";

export default function UserProfile() {
  const [user, setUser] = useState({
    userId: window.localStorage.getItem("userId"),
    firstname: "",
    lastname: "",
    birthday: "",
    address: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    let adminService = new AdminService();
    let id = window.localStorage.getItem("userId");
    console.log(id);
    adminService.getUsersById(id).then((result) => setUser(result.data.data));
    console.log(user);
  }, []);

  const handleSubmit = (event) => {
    console.log(user);
    let adminService = new AdminService();
    adminService.updateUser(user);
    event.preventDefault();
  };

  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <Form className="page-style" onSubmit={handleSubmit}>
      <Row>
        <Col md={2}>
          <TextField
            required
            id="firstname"
            name="firstname"
            label="Firstname"
            value={user.firstname}
            onChange={handleChange}
            variant="standard"
          />
        </Col>

        <Col md={10}>
          <TextField
            required
            id="lastname"
            name="lastname"
            label="Lastname"
            value={user.lastname}
            onChange={handleChange}
            variant="standard"
          />
        </Col>
        <Col md={2}>
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            type="text"
            value={user.phoneNumber}
            onChange={handleChange}
            variant="standard"
          />
        </Col>
        <Col md={10}>
          <TextField
            required
            id="birthdate"
            name="birthdate"
            type="date"
            defaultValue={user.birthday}
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
            variant="standard"
          />
        </Col>
        <Col md={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            value={user.email}
            onChange={handleChange}
            variant="standard"
          />
        </Col>

        <Col md={2}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            type="password"
            value={user.password}
            onChange={handleChange}
            variant="standard"
          />
        </Col>
        <Col md={10}>
          <TextField
            required
            id="password2"
            name="password"
            label="Password"
            type="password"
            variant="standard"
          />
        </Col>
        <Col>
        <TextField
            required
            id="address"
            name="address"
            label="Address"
            type="text"
            value={user.address}
            onChange={handleChange}
            variant="standard"
          />
        </Col>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </Row>
    </Form>
  );
}
