import React from "react";
import {  Button} from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import CvService from "../../services/CvService";
import { Card,Image} from "semantic-ui-react";

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

  return (
    <div>
      <h3 className="hh" >{id} Id'li cv ye ait bilgiler</h3>

      <Card.Group className="tttt">
        <Card fluid>
          
          {Cv.map((cv) => (
            
            <Card.Content key={cv.id}>
              <Image
            floated='centered'
            size='medium'
            src={cv.image}
          />
                <Card.Header className="bas">Name : {cv.jobseeker_name} </Card.Header>
              <Card.Header className="bas"> Surname : {cv.jobseeker_surname}</Card.Header><hr/>
              <Card.Header>ID : {id}</Card.Header><hr/>
              <Card.Header>Experience : {cv.jobseekerExperience}</Card.Header><hr/>
              <Card.Header>Birth Date : {cv.birthDate}</Card.Header><hr/>
              <Card.Header>Phone Number : {cv.phoneNumber}</Card.Header><hr/>
              <Card.Header>City : {cv.city}</Card.Header><hr/>
              <Card.Header>School : {cv.school}</Card.Header><hr/>
              <Card.Header><a href={cv.github} target="blank">Github</a></Card.Header>
              <Card.Content extra>
              <div className="ui two buttons">
              <Button onClick={application} basic color="green">
              Contact
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
            
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}
