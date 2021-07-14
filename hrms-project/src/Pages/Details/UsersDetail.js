import React from "react";
import { Button } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import UsersService from "../../services/UsersService";
import { Card, List, Grid, Image } from "semantic-ui-react";

export default function JobAdverstDetails() {
  //BU FONK. PARAMETRELERİ OBJE OLARAK VERİR.
  let { id } = useParams();

  const [user, setUser] = useState([]);

  const history = useHistory();

  useEffect(() => {
    let UserService = new UsersService();
    UserService.getById(id).then((result) => {
      setUser(result.data);
    });
  }, [id]);

  const decline = () => {
    history.push("/Users");
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
            <h2 className="hh1">{id} Id'li Kullanıcıya ait bilgiler</h2>

            <Card.Group className="tttt">
              <Card fluid className="tttt">
                {user.map((user) => (
                  <Card.Content key={user.id} className="tttt">
                    <Card.Header className="bas">
                      User Name : {user.username}{" "}
                    </Card.Header>
                    <hr />
                    <Card.Header>ID : {id}</Card.Header>
                    <hr />
                    <Card.Header>Name : {user.name}</Card.Header>
                    <hr />
                    <Card.Header>Email : {user.email}</Card.Header>
                    <hr />
                    <Card.Header>Address : {user.address}</Card.Header>
                    <hr />
                    <Card.Header>Phone Number : {user.phone}</Card.Header>
                    <hr />
                    <Card.Header>Website : {user.website}</Card.Header>
                    <hr />
                    <Card.Header>
                      Company name : {user.companyname}
                    </Card.Header>
                    <hr />
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button onClick={update} basic color="green">
                          Update
                        </Button>
                        <Button onClick={decline} basic color="red">
                          Go Back
                        </Button>
                      </div>
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
