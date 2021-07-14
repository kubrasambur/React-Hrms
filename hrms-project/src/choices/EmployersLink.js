import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Image} from "semantic-ui-react";

function EmployersLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            className="images"
            src="https://image.flaticon.com/icons/png/512/1613/1613385.png"
          />
          <Card.Header>Companys List</Card.Header>
          <Card.Description>
          Click the button to see <strong>Companys</strong> List
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={NavLink} to="/Employers" color="grey">
             See Companys List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default EmployersLink;
