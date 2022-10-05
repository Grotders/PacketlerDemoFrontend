import React from 'react'
import {Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default function AdminPage() {
  return (
    <Nav className="flex-column">
        <Nav.Link as={NavLink} to="/admin/addPacket">Add Packet</Nav.Link>
        <Nav.Link as={NavLink} to="/admin/packets">Packets</Nav.Link>
        <Nav.Link as={NavLink} to="/admin/packet/1">Update Packet</Nav.Link>

        <Nav.Link as={NavLink} to="/admin/users">Users</Nav.Link>
        <Nav.Link as={NavLink} to="/admin/addUser">Add User</Nav.Link>
    </Nav>
  )
}
