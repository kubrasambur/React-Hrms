import React, { useEffect, useState } from "react";
import EmployeersService from "../../services/EmployeersService";
import { AgGridReact, AgGridColumn } from "ag-grid-react";

function EmployeersList() {
  const [employeers, setEmployeers] = useState([]);

  useEffect(() => {
    let employeersService = new EmployeersService();
    employeersService
      .getEmployeers()
      .then((result) => setEmployeers(result.data));
  }, []);

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 400, width: 802, marginLeft: 160 }}
    >
      <h2 style={{ paddingLeft: 320, color: "white" }}>EMPLOYEERS LIST</h2>
      <AgGridReact rowData={employeers} rowSelection="multiple">
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
        <AgGridColumn
          field="positionId"
          sortable={true}
          filter={true}
        ></AgGridColumn>
      </AgGridReact>
      
    </div>

    // <div className="bbb"> <br /> EMPLOYEERS LIST
    //   <Table inverted color="blue" basic>
    //     <Table.Header>
    //       <Table.Row>
    //         <Table.HeaderCell>First Name</Table.HeaderCell>
    //         <Table.HeaderCell>Company Name</Table.HeaderCell>
    //         <Table.HeaderCell>Position Id</Table.HeaderCell>
    //       </Table.Row>
    //     </Table.Header>

    //     <Table.Body>
    //       {employeers.map((employeer) => (
    //         <Table.Row key={employeer.id}>
    //           <Table.Cell>{employeer.firstName}</Table.Cell>
    //           <Table.Cell>{employeer.lastName}</Table.Cell>
    //           <Table.Cell>{employeer.position_id}</Table.Cell>
    //         </Table.Row>
    //       ))}
    //     </Table.Body>

    //   </Table>
    //   <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    // </div>
  );
}

export default EmployeersList;
