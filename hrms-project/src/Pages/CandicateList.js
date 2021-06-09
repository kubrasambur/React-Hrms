import React, { useEffect, useState } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import CandicateService from "../services/CandicateSevice";

function CandicateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandicateService();
    candidateService
      .getCandidate()
      .then((result) => setCandidates(result.data));
  },[]);

  return (
    <div>CANDİDATE LIST
      <Table inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>İdentification Number</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candicate) => (
            <Table.Row key={candicate.id}>
              <Table.Cell>{candicate.firstname}</Table.Cell>
              <Table.Cell>{candicate.lastname}</Table.Cell>
              <Table.Cell>{candicate.identifactionNumber}</Table.Cell>
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
    </div>
  );
}

export default CandicateList;
