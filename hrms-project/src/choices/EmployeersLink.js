import React from "react";
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
          <Card.Meta>Kübra Sambur</Card.Meta>
          <Card.Description>
          <strong>Employeer</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button href="http://localhost:3001/Employeers" color="grey">
             See Employeers List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default EmployeersLink;
