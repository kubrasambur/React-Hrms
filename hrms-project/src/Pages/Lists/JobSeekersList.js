import React, { useEffect, useState } from "react";
import JobSeekersService from "../../services/JobSeekersService";
import { AgGridReact, AgGridColumn } from "ag-grid-react";

function JobSeekersList() {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekersService = new JobSeekersService();
    jobSeekersService
      .getJobSeekers()
      .then((result) => setJobSeekers(result.data));
  },[]);

  return (

<div
      className="ag-theme-alpine"
      style={{ height: 300, width: 602, marginLeft: 270 }}
    >
      <h2 style={{ paddingLeft: 210, color: "white" }}>JOB SEEKERS LIST</h2>
      <AgGridReact rowData={jobSeekers} rowSelection="multiple">
        <AgGridColumn
          field="id"
          sortable={true}
          filter={true}
          checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn
          field="firstName"
          sortable={true}
          filter={true}
        ></AgGridColumn>

        <AgGridColumn
          field="lastName"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        
      </AgGridReact>
      
    </div>




    // <div className="bbb"> <br /> JOB SEEKERS LIST
    //   <Table inverted color="blue" basic>
    //     <Table.Header>
    //       <Table.Row>
    //         <Table.HeaderCell>Id</Table.HeaderCell>
    //         <Table.HeaderCell>First Name</Table.HeaderCell>
    //         <Table.HeaderCell>Last Name</Table.HeaderCell>
    //       </Table.Row>
    //     </Table.Header>

    //     <Table.Body>
    //       {jobSeekers.map((jobSeeker) => (
    //         <Table.Row key={jobSeeker.id}>
    //           <Table.Cell>{jobSeeker.id}</Table.Cell>
    //           <Table.Cell>{jobSeeker.first_name}</Table.Cell>
    //           <Table.Cell>{jobSeeker.last_name}</Table.Cell>
    //         </Table.Row>
    //       ))}
    //     </Table.Body>

    //     <Table.Footer>
    //       <Table.Row>
    //         <Table.HeaderCell colSpan="3">
    //           <Menu floated="right" pagination>
    //             <Menu.Item as="a" icon>
    //               <Icon name="chevron left" />
    //             </Menu.Item>
    //             <Menu.Item as="a">1</Menu.Item>
    //             <Menu.Item as="a">2</Menu.Item>
    //             <Menu.Item as="a">3</Menu.Item>
    //             <Menu.Item as="a">4</Menu.Item>
    //             <Menu.Item as="a" icon>
    //               <Icon name="chevron right" />
    //             </Menu.Item>
    //           </Menu>
    //         </Table.HeaderCell>
    //       </Table.Row>
    //     </Table.Footer>
    //   </Table>
    //   <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    // </div>
  );
}

export default JobSeekersList;
