import React, { useEffect, useState } from "react";
import EmployersService from "../../services/EmployersService";
import { NavLink } from 'react-router-dom';
import { AgGridReact, AgGridColumn } from "ag-grid-react";

function EmployersList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employeersService = new EmployersService();
    fetch('http://localhost:3000/Employeers')
    employeersService.getEmployers().then((result) => setEmployers(result.data));
  },[]);

  return (

    <div className="ag-theme-balham" style={{ height: 400, width: 1202, marginLeft:-30 }}>
      
      <AgGridReact rowData={employers} rowSelection="multiple">
       
        <AgGridColumn
          field="id"
          sortable={true}
          filter={true}
          checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn
          field="company_name"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="company_adress"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="company_web_adress"
          sortable={true}
          filter={true}
          checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn
          field="company_number"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="company_email"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        
      </AgGridReact>
     
    </div>


    // <div className="bbb"> <br /> Company LIST
    //   <Table inverted color="blue" basic>
    //     <Table.Header>
    //       <Table.Row>
    //         <Table.HeaderCell>Id</Table.HeaderCell>
    //         <Table.HeaderCell>Company Name</Table.HeaderCell>
    //         <Table.HeaderCell></Table.HeaderCell>
    //       </Table.Row>
    //     </Table.Header>

    //     <Table.Body>
    //       {employers.map((employer) => (
    //         <Table.Row key={employer.id}>
    //           <Table.Cell>{employer.id}</Table.Cell>
    //           <Table.Cell>{employer.company_name}</Table.Cell>
    //           <Table.Cell><Button as={NavLink} to={`/Employers/${employer.id}`}>See Detail</Button></Table.Cell>
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

export default EmployersList;
