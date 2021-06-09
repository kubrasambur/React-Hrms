import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

function UsersLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            className="images"
            src="http://simpleicon.com/wp-content/uploads/users.png"
          />
          <Card.Header>Users List</Card.Header>
          <Card.Meta>Kübra Sambur</Card.Meta>
          <Card.Description>
          <strong>User</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button href="http://localhost:3001/Users" color="green">
      
            See Users List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default UsersLink;
