import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import "../App.css";

function JobAdvertsLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
          className="images"
            floated="centered"

            src="https://cdn2.iconfinder.com/data/icons/employment-business-2/256/Candidate_Search-512.png"
          />
          <Card.Header floated="centered">Job Adverts List</Card.Header>
          <Card.Description>
          Click the button to see <strong>Job Adverts</strong> List
          </Card.Description>
        </Card.Content>
        <Card.Content extra>

            <Button as={NavLink} to="/JobAdverts" color="grey" floated="centered">
              See Job Adverts List
            </Button>
        </Card.Content>
      </Card>

    </div>
  );
}

export default JobAdvertsLink;