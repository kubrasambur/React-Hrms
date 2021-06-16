import React, { useEffect, useState } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import CvService from "../services/CvService";

function CvList() {
  const [cvs, setCv] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService
      .getCv()
      .then((result) => setCv(result.data));
  },[]);

  return (
    <div> <br/> CV LIST
      <Table inverted>
        <Table.Header >
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Experiences</Table.HeaderCell>
            <Table.HeaderCell>Job Seeker Id</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row key={cv.id}>
              <Table.Cell>{cv.jobseeker_name}</Table.Cell>
              <Table.Cell>{cv.jobseeker_surname}</Table.Cell>
              <Table.Cell>{cv.jobseekerExperience}</Table.Cell>
              <Table.Cell>{cv.jobseeker_id}</Table.Cell>
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

export default CvList;
