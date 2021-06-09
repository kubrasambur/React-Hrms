import React from "react";
import { Button, Card, Image, } from "semantic-ui-react";

function CandidateLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            className="images"
            src="https://cdn2.iconfinder.com/data/icons/employment-business-2/256/Candidate_Search-512.png"
          />
          <Card.Header>Candicate List</Card.Header>
          <Card.Meta>Kübra Sambur</Card.Meta>
          <Card.Description>
          <strong>Candidate</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button href="http://localhost:3001/Candicate" color="green">
              See Candidate List
            </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default CandidateLink;
