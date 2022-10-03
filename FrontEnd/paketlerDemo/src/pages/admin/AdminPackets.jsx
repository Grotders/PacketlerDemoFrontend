import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import {
  Col,
  Row,
  Table,
} from "reactstrap";

import AdminService from "../../services/adminService";

export default function AdminPackets() {
  const [packets, setPackets] = useState([]);

  useEffect(() => {
    let adminService = new AdminService();
    adminService.getPackets().then((result) => setPackets(result.data.data));
  }, []);


  return (
    <Row className="margin-bot">
      <Col xl={10} className="m-auto">
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Data</th>
              <th>Min</th>
              <th>SMS</th>
              <th>createBy</th>
              <th>createIn</th>
              <th>updateBy</th>
              <th>updateIn</th>
            </tr>
          </thead>

          <tbody>
            {packets.map((packet) => (
              <tr key={packet.packetId}>
                <th scope="row">{packet.packetId}</th>
                <td>{packet.title}</td>
                <td>{packet.price}</td>
                <td>{packet.data}</td>
                <td>{packet.minutes}</td>
                <td>{packet.sms}</td>
                <td>{packet.createBy}</td>
                <td>{packet.createAt}</td>
                <td>{packet.updateBy}</td>
                <td>{packet.updateAt}</td>
                <td>
                  <Link to={`/admin/packet/${packet.packetId}`}>
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
