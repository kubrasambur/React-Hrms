import React, { useEffect, useState } from "react";
import {  Table } from "semantic-ui-react";
import EmployeersService from "../../services/EmployeersService";

function EmployeersList() {
  const [employeers, setEmployeers] = useState([]);

  useEffect(() => {
    let employeersService = new EmployeersService();
    employeersService
      .getEmployeers()
      .then((result) => setEmployeers(result.data));
  },[]);

  return (
    <div className="bbb"> <br /> EMPLOYEERS LIST
      <Table inverted color="blue" basic>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Position Id</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employeers.map((employeer) => (
            <Table.Row key={employeer.id}>
              <Table.Cell>{employeer.firstName}</Table.Cell>
              <Table.Cell>{employeer.lastName}</Table.Cell>
              <Table.Cell>{employeer.position_id}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        
      </Table>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default EmployeersList;
