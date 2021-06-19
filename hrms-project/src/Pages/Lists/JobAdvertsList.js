import React from "react";
import { Table,Button } from "semantic-ui-react";
import JobAdvertisementService from "../../services/JobAdvertisementService";
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
    <div className="bbb">
      JOB ADVERTS LİST
      <Table color="blue" inverted basic>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Employer</Table.HeaderCell>
            <Table.HeaderCell>Job position Id</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {JobAdverts.map((adverts) => (
            <Table.Row key={adverts.id}>
              <Table.Cell>{adverts.id}</Table.Cell>
              <Table.Cell>{adverts.employer}</Table.Cell>
              <Table.Cell>{adverts.job_position}</Table.Cell>
              <Table.Cell><Button as={NavLink} to={`/JobAdvertisement/${adverts.id}`}>See Detail</Button></Table.Cell>
            </Table.Row>
          ))}
          
        </Table.Body>

        
      </Table>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br />
    </div>
  );
}
