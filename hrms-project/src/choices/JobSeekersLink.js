import React from "react";
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
          <strong>JobSeeker</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button href="http://localhost:3001/JobSeekers" color="grey">
            See JobSeekers List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default JobSeekersLink;
