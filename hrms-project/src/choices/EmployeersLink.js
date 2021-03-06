import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";

function EmployeersLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            className="images"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-P6hk8PqjnG71NtveatnfXRBrzDywli6vMA&usqp=CAU"
          />
          <Card.Header>Employeers List</Card.Header>
          <Card.Description>
          Click the button to see <strong>Employeers</strong> List
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={NavLink} to="/Employeers" color="grey">
             See Employeers List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default EmployeersLink;
