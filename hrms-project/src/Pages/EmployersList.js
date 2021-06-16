import React, { useEffect, useState } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import EmployersService from "../services/EmployersService";

function EmployersList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employeersService = new EmployersService();
    employeersService
      .getEmployers()
      .then((result) => setEmployers(result.data));
  },[]);

  return (
    <div> <br /> EMPLOYERS LIST
      <Table inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Job Id</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
              <Table.Cell>{employer.id}</Table.Cell>
              <Table.Cell>{employer.company_name}</Table.Cell>
              <Table.Cell>{employer.id}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default EmployersList;
