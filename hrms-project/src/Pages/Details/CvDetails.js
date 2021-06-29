import React from "react";
import { Button } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import CvService from "../../services/CvService";
import { Card, Image, Grid, List } from "semantic-ui-react";
import { ExampleComponent, ExampleButton } from "kubra-ui-kit";

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
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <List.Header className="auth">
              Authors
            </List.Header>
            <List animated verticalAlign="middle">
              <List.Item>
                <Image
                  avatar
                  src="https://pbs.twimg.com/profile_images/1403300051749851145/XhuGb8BI_400x400.jpg"
                />
                <List.Content>
                  <List.Header className="auth" style={{color:"white"}}>Kübra</List.Header>
                </List.Content>
              </List.Item>
              <hr></hr>
              <List.Item>
                <Image
                  avatar
                  src="https://pbs.twimg.com/profile_images/1403300051749851145/XhuGb8BI_400x400.jpg"
                />
                <List.Content>
                  <List.Header className="auth" style={{color:"white"}}>Berkay</List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={12} className="ui animated middle aligned list">
            <h3 className="hh">{id} Id'li cv ye ait bilgiler</h3>

            <Card.Group className="tttt">
              {/* <ExampleComponent text="fgd"></ExampleComponent> 
  <ExampleButton onClick={() => {
    window.alert("tıklandı")
  }}
  text="flklgk"
  style={{color:"white"}}
  type='button'
  buttonStyle='primary'
  buttonSize='btn--large'>fdf</ExampleButton> */}
              {/* <Menu1 menu1="users" menu2="employers" menu3="workers"></Menu1> */}
              {/* <Button
  onClick={() => {
    console.log('cliked')
  }}
  type='button'
  buttonStyle='btn--primary--outline'
  buttonSize='btn--large'
>
  Buy now
</Button> */}
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
                    <Card.Header>
                      Experience : {cv.jobseekerExperience}
                    </Card.Header>
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
                            <Button
                              onClick={update}
                              basic
                              size="huge"
                              color="blue"
                            >
                              Update
                            </Button>
                          </Grid.Column>
                          <Grid.Column width={5}>
                            <Button
                              onClick={decline}
                              basic
                              size="huge"
                              color="red"
                            >
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
