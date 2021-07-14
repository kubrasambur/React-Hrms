import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Image} from "semantic-ui-react";

function JobSeekersLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            className="images"
            src="https://icon-library.com/images/job-seeker-icon/job-seeker-icon-16.jpg"
          />
          <Card.Header>JobSeekers List</Card.Header>
          <Card.Description>
          Click the button to see <strong>JobSeekers</strong> List
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={NavLink} to="/JobSeekers" color="grey">
            See JobSeekers List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default JobSeekersLink;
