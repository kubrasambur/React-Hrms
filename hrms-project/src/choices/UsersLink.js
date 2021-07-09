import React from "react";
import { NavLink } from "react-router-dom";
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
          <Card.Description>
          <strong>Users</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={NavLink} to="/Users" color="grey">
            See Users List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default UsersLink;
