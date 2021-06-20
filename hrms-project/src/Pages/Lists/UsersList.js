import React, { useEffect, useState } from "react";
import UsersService from "../../services/UsersService";
import { AgGridReact, AgGridColumn } from "ag-grid-react";

function UsersList() {
   const [users, setUsers] = useState([]);

  useEffect(() => {
    let usersService = new UsersService();
    fetch('http://localhost:3000/Users')
    usersService.getUsers().then((result) => setUsers(result.data));
  }, []);

  return (
    <div className="ag-theme-balham" style={{ height: 400, width: 1100, marginLeft:20 }}>
      
      <AgGridReact rowData={users} rowSelection="multiple">
       
        <AgGridColumn
          field="id"
          sortable={true}
          filter={true}
          checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn
          field="name"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="username"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="email"
          sortable={true}
          filter={true}
          checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn
          field="address.street"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="address.suite"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="address.city"
          sortable={true}
          filter={true}
          checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn
          field="address.zipcode"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="address.geo.lat"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="address.geo.lng"
          sortable={true}
          filter={true}
          checkboxSelection={true}
        ></AgGridColumn>
      </AgGridReact>
     
    </div>

    // <div className="bbb"> <br /> USERS LIST
    //   <Table inverted color="blue" basic>
    //     <Table.Header>
    //       <Table.Row>
    //         <Table.HeaderCell>Id</Table.HeaderCell>
    //         <Table.HeaderCell>Email</Table.HeaderCell>
    //         <Table.HeaderCell>Password</Table.HeaderCell>
    //       </Table.Row>
    //     </Table.Header>

    //     <Table.Body>
    //       {users.map((user) => (
    //         <Table.Row key={user.id}>
    //           <Table.Cell>{user.id}</Table.Cell>
    //           <Table.Cell>{user.email}</Table.Cell>
    //           <Table.Cell>{user.password}</Table.Cell>
    //         </Table.Row>
    //       ))}
    //     </Table.Body>
    //   </Table>

    //   <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    // </div>
  );
}

export default UsersList;
