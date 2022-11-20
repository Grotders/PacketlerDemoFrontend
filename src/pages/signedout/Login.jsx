import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import UserService from "../../services/UserService";
import {
  Alert,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: "",
      },
      isLoginSuccess: null,
      error: null,
      showPassword: false,
    };
  }

  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          [name]: value,
        },
      };
    });
    console.log(this.state.user);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let userService = new UserService();
    userService.login(this.state.user).then((result) => {
      const data = result.data;
      if (data.success) {
        this.props.signIn(data.data.userId, data.data.email);
        this.setState({ isLoginSuccess: true });
        console.log(data);
        console.log(data.data);

      } else {
        this.setState({
          error: data.message,
        });
      }
    });
  };

  handleRedirect = (event) => {
    event.preventDefault();
    console.log(this.state.isLoginSuccess)
    this.setState({ isLoginSuccess: true });
  }

  render() {
    let error = this.state.error;
    let isLoginSuccess = this.state.isLoginSuccess;
    return (
      <Container maxWidth="sm">
        {error && (
          <div>
            <Alert severity="error">{error}</Alert>
          </div>
        )}
        {isLoginSuccess && <Navigate to="/" replace={true} />}
        <form onSubmit={this.handleSubmit}>
          <Typography sx={{ marginTop: 3 }} variant="h4" gutterBottom>
            Please sign in
          </Typography>

          <FormControl sx={{ marginBottom: 2, width: "1" }}>
            <TextField
              id="email"
              name="email"
              label="email"
              value={this.state.user.email}
              type="email"
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl sx={{ mb: 5, width: "1" }} variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              label="Password"
              value={this.state.user.password}
              type={this.state.showPassword ? "text" : "password"}
              onChange={this.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                    edge="end"
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button variant="contained" type="submit" className="w-100">
            Submit
          </Button>
        </form>
      </Container>
    );
  }
}
