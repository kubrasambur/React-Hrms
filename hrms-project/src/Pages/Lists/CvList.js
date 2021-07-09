import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import CvService from "../../services/CvService";
import { NavLink } from "react-router-dom";
import { AgGridReact, AgGridColumn } from "ag-grid-react";

function CvList() {
  const [cvs, setCv] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getCv().then((result) => setCv(result.data));
  }, []);

  const agbuttonrender = (params) => {
    return (
      <Button as={NavLink} to={`/Cv/${params.value}`}>
        See Detail
      </Button>
    );
  };

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 400, width: 600, marginLeft: 270 }}
    >
      <h2 style={{ paddingLeft: 250, color: "white" }}>CV LIST</h2>
      <AgGridReact
        rowData={cvs}
        rowSelection="multiple"
        frameworkComponents={{
          Agbuttonrender: agbuttonrender,
        }}
      >
        <AgGridColumn
          field="jobseekerName"
          headerName="Jobseeker Name"
          sortable={true}
          filter={true}
          checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn
          field="jobseekerSurname"
          headerName="jobseeker Surname"
          sortable={true}
          filter={true}
        ></AgGridColumn>

        <AgGridColumn
          field="id"
          headerName=""
          sortable={true}
          filter={true}
          cellRenderer="Agbuttonrender"
        ></AgGridColumn>
      </AgGridReact>
    </div>

    // <div className="bbb"> <br/> CV LIST
    //   <Table inverted color="blue" basic>
    //     <Table.Header >
    //       <Table.Row>
    //         <Table.HeaderCell>First Name</Table.HeaderCell>
    //         <Table.HeaderCell>Last Name</Table.HeaderCell>
    //         <Table.HeaderCell></Table.HeaderCell>
    //       </Table.Row>
    //     </Table.Header>

    //     <Table.Body>
    //       {cvs.map((cv) => (
    //         <Table.Row key={cv.id}>
    //           <Table.Cell>{cv.jobseeker_name}</Table.Cell>
    //           <Table.Cell>{cv.jobseeker_surname}</Table.Cell>
    //           <Table.Cell><Button as={NavLink} to={`/Cv/${cv.id}`}>See Detail</Button></Table.Cell>
    //         </Table.Row>
    //       ))}
    //     </Table.Body>

    //   </Table>
    //   <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    // </div>
  );
}

export default CvList;
