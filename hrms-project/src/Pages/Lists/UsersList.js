import React, { useEffect, useState } from "react";
import UsersService from "../../services/UsersService";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let usersService = new UsersService();
    usersService.getUsers().then((result) => setUsers(result.data));
  }, []);
  const agbuttonrender = (params) => {
    return (
      <Button as={NavLink} to={`/Users/${params.value}`}>
        See Detail
      </Button>
    );
  };

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 500, width: 800, marginLeft: 170 }}
    >
      <h2 style={{ paddingLeft: 320, color: "black" }}>USERS LIST</h2>
      <AgGridReact rowData={users} rowSelection="multiple" frameworkComponents={{
        Agbuttonrender: agbuttonrender    
      }
    }>
        <AgGridColumn
          field="id"
          sortable={true}
          filter={true}
          checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn field="name" sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn
          field="username"
          sortable={true}
          filter={true}
        ></AgGridColumn>

        <AgGridColumn
          field="id"
          headerName=""
          sortable={true}
          filter={true}
          checkboxSelection={true}
          cellRenderer="Agbuttonrender"
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
