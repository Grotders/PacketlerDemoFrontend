import React, {useState, useEffect} from "react";
import AdminService from "../../services/adminService";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { Table, Row, Col } from "reactstrap";
export default function AdminGetUserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let adminService = new AdminService();
    adminService.getUsers().then((result) => setUsers(result.data.data));
  }, []);


  return (
    <Row className="margin-bot">
      <Col xl={10} className="m-auto">
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birth Date</th>
              <th>Email</th>
              <th>Packet Name</th>
              <th>Created At</th>
              <th>Update At</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user)=>(
            <tr key={user.userId}>
              <th scope="row">{user.userId}</th>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.birthdate}</td>
              <td>{user.email}</td>
              <td>bos</td>
              <td>{user.createdAt}</td>
              <td>{user.updateAt}</td>
              <td>
                  <Link to={`/admin/user/${user.userId}`}>
                    <BsPencilSquare />
                  </Link>
                </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
