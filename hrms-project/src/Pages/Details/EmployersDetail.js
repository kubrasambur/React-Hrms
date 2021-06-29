import React from "react";
import { Button } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import EmployerService from "../../services/EmployersService";
import { Card, Grid,List,Image } from "semantic-ui-react";

export default function JobAdverstDetails() {
  //BU FONK. PARAMETRELERİ OBJE OLARAK VERİR.
  let { id } = useParams();

  const [employers, setEmployers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    let EmployersService = new EmployerService();
    EmployersService.getById(id).then((result) => {
      setEmployers(result.data);
    });
  }, [id]);

  const application = () => {
    window.alert("Contacted");
  };
  const decline = () => {
    history.push("/Employers");
  };
  const update = () => {
    window.alert("Informations Updated");
  };

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <List.Header className="auth">Authors</List.Header>
            <List animated verticalAlign="middle">
              <List.Item>
                <Image
                  avatar
                  src="https://pbs.twimg.com/profile_images/1403300051749851145/XhuGb8BI_400x400.jpg"
                />
                <List.Content>
                  <List.Header className="auth" style={{ color: "white" }}>
                    Kübra
                  </List.Header>
                </List.Content>
              </List.Item>
              <hr></hr>
              <List.Item>
                <Image
                  avatar
                  src="https://pbs.twimg.com/profile_images/1403300051749851145/XhuGb8BI_400x400.jpg"
                />
                <List.Content>
                  <List.Header className="auth" style={{ color: "white" }}>
                    Berkay
                  </List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={12} className="ui animated middle aligned list">
            <h2 className="hh1">{id} Id'li Şirkete ait bilgiler</h2>

            <Card.Group className="tttt">
              <Card fluid className="tttt">
                {employers.map((employer) => (
                  <Card.Content key={employer.id} className="tttt">
                    <Card.Header className="bas">
                      Name : {employer.company_name}{" "}
                    </Card.Header>
                    <hr />
                    <Card.Header>ID : {id}</Card.Header>
                    <hr />
                    <Card.Header>
                      Company City : {employer.company_adress}
                    </Card.Header>
                    <hr />
                    <Card.Header>
                      Company Web Adress : {employer.company_web_adress}
                    </Card.Header>
                    <hr />
                    <Card.Header>
                      Company Number : {employer.company_number}
                    </Card.Header>
                    <hr />
                    <Card.Header>
                      Company mail : {employer.company_email}
                    </Card.Header>
                    <hr />
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
