import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Button, Container } from '@mui/material'


export default class SignedOut extends Component {
  render() {
    return (
      <div className='ms-auto'>
        <Button
                className="hover-fix"
                component={NavLink}
                to="/login"
                color="inherit"
              >
                Login
              </Button>
              <Button
                className="hover-fix"
                component={NavLink}
                to="/register"
                color="inherit"
              >
                Register
              </Button>
      </div>
    )
  }
}
