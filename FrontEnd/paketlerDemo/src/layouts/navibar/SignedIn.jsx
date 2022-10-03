import React from "react";
import {NavLink} from "react-router-dom";
import {UncontrolledDropdown, Col, DropdownToggle, DropdownItem, DropdownMenu} from 'reactstrap'


export default function SignedIn({signOut}) {
  return (
    <Col>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Oguzcan
      </DropdownToggle>
      
      <DropdownMenu>
      <DropdownItem >Profile</DropdownItem>
      <DropdownItem as={NavLink} to="/" onClick={signOut}>Log Out</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    </Col>
  );
}
