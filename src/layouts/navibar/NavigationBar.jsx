import React, { Component } from 'react'
import { AppBar, Button, Box, Toolbar, Typography} from "@mui/material";
import SignedOut from "./components/SignedOut";
import SignedIn from "./components/SignedIn";

import { NavLink } from "react-router-dom";


export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }

    

  render() {
    let auth = this.props.auth;
    return (
        <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
        
        <AppBar position="static">
          <Toolbar>
            <Typography
              className="hover-fix"
              component={NavLink}
              to="/"
              noWrap
              variant="h6"
              xs={8}
              sx={{
                color: "white",
                fontFamily: "monospace",
                fontWeight: 550,
                marginRight: "30px",
                textDecoration: "none",
              }}
            >
              OguzCELL
            </Typography>
            

            {console.log("Auth: " + auth)}
            {auth ? <SignedIn signOut={this.props.signOut}/> : <SignedOut />}
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}

