import React from "react";
import { Button, Card, Image} from "semantic-ui-react";

function CvLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            className="images"
            src="https://cdn0.iconfinder.com/data/icons/thin-files-documents/57/thin-081_file_document_cv_curriculum_vitae-512.png"
          />
          <Card.Header>Cv List</Card.Header>
          <Card.Meta>Kübra Sambur</Card.Meta>
          <Card.Description>
          <strong>Cv</strong> Listesini görmek için butona tıklayınız.
          <br /> <br />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button href="http://localhost:3001/Cv" color="grey">
              
              See Cv List
            </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default CvLink;
