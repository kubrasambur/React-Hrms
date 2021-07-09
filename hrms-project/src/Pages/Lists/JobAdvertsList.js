import React from "react";
import { Button } from "semantic-ui-react";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AgGridReact, AgGridColumn } from "ag-grid-react";

export default function JobAdvertsList() {
  const [JobAdverts, setJobAdverts] = useState([]);

  const agbuttonrender = (params) => {
    return (
      <Button as={NavLink} to={`/JobAdvertisement/${params.value}`} > 
        See Detail
      </Button>
    );
  };
  
  useEffect(() => {
    let jobAdvertsService = new JobAdvertisementService();
    jobAdvertsService
      .getAdvertisement()
      .then((result) => setJobAdverts(result.data));
  }, []);
  return (
    <div 
      className="ag-theme-alpine"
      style={{ height: 400, width: 800, marginLeft: 180 }}
    >
      <h2 style={{ paddingLeft: 320, color: "white" }}>JOB ADVDERTS LIST</h2>
      <AgGridReact
        rowData={JobAdverts}
        rowSelection="multiple"
        frameworkComponents={{
          Agbuttonrender: agbuttonrender,
        }}
      >
        <AgGridColumn
          field="id"
          sortable={true}
          filter={true}
          checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn
          field="employer"
          sortable={true}
          filter={true}
        ></AgGridColumn>

        <AgGridColumn
          field="jobPosition"
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

    // <div className="bbb">
    //   JOB ADVERTS LİST
    //   <Table color="blue" inverted basic>
    //     <Table.Header>
    //       <Table.Row>
    //         <Table.HeaderCell>Id</Table.HeaderCell>
    //         <Table.HeaderCell>Employer</Table.HeaderCell>
    //         <Table.HeaderCell>Job position Id</Table.HeaderCell>
    //         <Table.HeaderCell></Table.HeaderCell>
    //       </Table.Row>
    //     </Table.Header>

    //     <Table.Body>
    //       {JobAdverts.map((adverts) => (
    //         <Table.Row key={adverts.id}>
    //           <Table.Cell>{adverts.id}</Table.Cell>
    //           <Table.Cell>{adverts.employer}</Table.Cell>
    //           <Table.Cell>{adverts.job_position}</Table.Cell>
    //           <Table.Cell><Button as={NavLink} to={`/JobAdvertisement/${adverts.id}`}>See Detail</Button></Table.Cell>
    //         </Table.Row>
    //       ))}

    //     </Table.Body>

    //   </Table>
    //   <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    //   <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    //   <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br />
    // </div>
  );
  
}
