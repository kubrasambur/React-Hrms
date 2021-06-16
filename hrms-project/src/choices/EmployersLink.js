import React from "react";
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
          <Card.Header>Employers List</Card.Header>
          <Card.Meta>Kübra Sambur</Card.Meta>
          <Card.Description>
          <strong>Employer</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button href="http://localhost:3001/Employers" color="black">
             See Employers List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default EmployersLink;
