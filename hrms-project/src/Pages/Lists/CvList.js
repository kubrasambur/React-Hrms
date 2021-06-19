import React, { useEffect, useState } from "react";
import {  Table,Button } from "semantic-ui-react";
import CvService from "../../services/CvService";
import { NavLink } from 'react-router-dom';

function CvList() {
  const [cvs, setCv] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService
      .getCv()
      .then((result) => setCv(result.data));
  },[]);

 
  

  return (
    <div className="bbb"> <br/> CV LIST
      <Table inverted color="blue" basic>
        <Table.Header >
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row key={cv.id}>
              <Table.Cell>{cv.jobseeker_name}</Table.Cell>
              <Table.Cell>{cv.jobseeker_surname}</Table.Cell>
              <Table.Cell><Button as={NavLink} to={`/Cv/${cv.id}`}>See Detail</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        
      </Table>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default CvList;
