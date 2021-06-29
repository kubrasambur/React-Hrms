import React from "react";
import { Button } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import CvService from "../../services/CvService";
import { Card, Image, Grid, List } from "semantic-ui-react";

export default function JobAdverstDetails() {
  //BU FONK. PARAMETRELERİ OBJE OLARAK VERİR.
  let { id } = useParams();

  const [Cv, setCv] = useState([]);

  const history = useHistory();

  useEffect(() => {
    let jobAdvertService = new CvService();
    jobAdvertService.getById(id).then((result) => {
      setCv(result.data);
    });
  }, [id]);

  const application = () => {
    window.alert("Contacted");
  };
  const decline = () => {
    history.push("/Cv");
  };
  const update = () => {
    window.alert("Informations Updated");
  };

  return (
    <div className="bg">
      <h3 className="hh">{id} Id'li cv ye ait bilgiler</h3>

      <Card.Group className="tttt">
        <Card fluid>
          {Cv.map((cv) => (
            <Card.Content key={cv.id}>
              <Image floated="centered" size="tiny" src={cv.image} />
              <Card.Header className="bas">
                Name : {cv.jobseeker_name}{" "}
              </Card.Header>
              <Card.Header className="bas">
                {" "}
                Surname : {cv.jobseeker_surname}
              </Card.Header>
              <br />
              <Card.Header>ID : {id}</Card.Header>
              <hr />
              <Card.Header>Experience : {cv.jobseekerExperience}</Card.Header>
              <hr />
              <Card.Header>Birth Date : {cv.birthDate}</Card.Header>
              <hr />
              <Card.Header>Phone Number : {cv.phoneNumber}</Card.Header>
              <hr />
              <Card.Header>City : {cv.city}</Card.Header>
              <hr />
              <Card.Header>School : {cv.school}</Card.Header>
              <hr />
              <Card.Header>
                <a href={cv.github} target="blank">
                  Github
                </a>
              </Card.Header>
              <Card.Content extra>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Button
                        onClick={application}
                        basic
                        size="huge"
                        color="green"
                      >
                        Contact
                      </Button>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <Button onClick={update} basic size="huge" color="blue">
                        Update
                      </Button>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <Button onClick={decline} basic size="huge" color="red">
                        Go Back
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card.Content>
          ))}
        </Card>
      </Card.Group>
    </div>
  );
}
