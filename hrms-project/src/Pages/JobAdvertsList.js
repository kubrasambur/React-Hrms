import React from "react";
import { Icon, Menu, Table,Button } from "semantic-ui-react";
import JobAdvertisementService from "../services/JobAdvertisementService";
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

export default function JobAdvertsList() {
  const [JobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertsService = new JobAdvertisementService();
    jobAdvertsService
      .getAdvertisement()
      .then((result) => setJobAdverts(result.data));
  }, []);
  return (
    <div>
      JOB ADVERTS LİST
      <Table inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employer</Table.HeaderCell>
            <Table.HeaderCell>Job position Id</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {JobAdverts.map((adverts) => (
            <Table.Row key={adverts.id}>
              <Table.Cell>{adverts.employer}</Table.Cell>
              <Table.Cell>{adverts.job_position_id}</Table.Cell>
            </Table.Row>
          ))}
          <Table.Cell><Button as={NavLink} to={`/JobAdverstDetails/${JobAdverts.id}`}>See Detail</Button></Table.Cell>
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
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
}
