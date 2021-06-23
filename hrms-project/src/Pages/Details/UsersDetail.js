import React from "react";
import { Button } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import UsersService from "../../services/UsersService";
import { Card } from "semantic-ui-react";

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

  return (
    <div>
      <h2 className="hh">{id} Id'li Kullanıcıya ait bilgiler</h2>

      <Card.Group className="tttt">
        <Card fluid className="tttt">
          {user.map((user) => (
            <Card.Content key={user.id} className="tttt">
              <Card.Header className="bas">
                Name : {user.username}{" "}
              </Card.Header>
              <hr />
              <Card.Header>ID : {id}</Card.Header>
              <hr />
              <Card.Header>Name : {user.name}</Card.Header>
              <hr />
              <Card.Header>
                Email : {user.email}
              </Card.Header>
              <hr />
              <Card.Header>Address : {user.address}</Card.Header>
              <hr />
              <Card.Header>Phone Number : {user.phone}</Card.Header>
              <hr />
              <Card.Header>Website : {user.website}</Card.Header>
              <hr />
              <Card.Header>Company name : {user.company.name}</Card.Header>
              <hr />
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button onClick={decline} basic color="red">
                    Go Back
                  </Button>
                </div>
              </Card.Content>
            </Card.Content>
          ))}
        </Card>
      </Card.Group>
    </div>
  );
}
