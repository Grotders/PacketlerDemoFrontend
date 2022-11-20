import React, { Component } from "react";

import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";


export default class Register extends Component {
  constructor(props) {
    super(props);

    // const date = new Date(Date.now());

    this.state = {
      customer: {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        birthdate: Date.now(),
        address: "",
        phoneNumber: "",
      },
    };
    // birthdate: new Intl.DateTimeFormat("en-US").format(date),


    console.log(this.state.customer.birthdate);
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState((prevState) => {
      return {
        customer: {
          ...prevState.customer,
          [name]: value,
        },
      };
    });
    console.log(this.state.customer);
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Typography sx={{ marginTop: 3 }} variant="h4" gutterBottom>
          Create a new account:
        </Typography>

        <FormControl fullWidth>
          <TextField
            id="firstname"
            name="firstname"
            label="firstname"
            type="String"
            fullWidth={false}
            value={this.state.customer.firstname}
            onChange={this.handleChange}
          />
          <TextField
            id="lastname"
            name="lastname"
            label="lastname"
            type="String"
            value={this.state.customer.lastname}
            onChange={this.handleChange}
          />
          <TextField
            id="email"
            name="email"
            label="email"
            type="email"
            value={this.state.customer.email}
            onChange={this.handleChange}
          />
          <TextField
            id="password"
            name="password"
            label="password"
            type="password"
            value={this.state.customer.password}
            onChange={this.handleChange}
          />
          {/* <DesktopDatePicker
            id="birthdate"
            name="birthdate"
            label="Bithdate"
            inputFormat="MM/DD/YYYY"
            value={this.state.customer.birthdate}
            onChange={this.handleChange}
            renderInput={(params) => <TextField {...params} />}
          /> */}

          <FormLabel id="gender">Gender</FormLabel>
          <RadioGroup aria-labelledby="gender" name="gender" row>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>

          <Button variant="contained" type="submit" className="w-100">
            Sign Up
          </Button>
        </FormControl>
      </Container>
    );
  }
}
