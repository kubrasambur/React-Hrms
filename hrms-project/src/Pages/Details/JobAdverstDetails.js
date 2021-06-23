import React from "react";
import {  Button} from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { Card } from "semantic-ui-react";

export default function JobAdverstDetails() {
  //BU FONK. PARAMETRELERİ OBJE OLARAK VERİR.
  let { id } = useParams();

  const [JobAdvert, setJobAdvert] = useState([]);

  const history = useHistory();

  useEffect(() => {
    let jobAdvertService = new JobAdvertisementService();
    jobAdvertService.getById(id).then((result) => {
      setJobAdvert(result.data);
    });
  }, [id]);

  const application = () => {
    window.alert("Applied");
  };
  const decline = () => {
    history.push("/JobAdverts");
  };

  return (
    <div>
      <h1 className="hh" >{id} Id'li ilana ait bilgiler</h1>

      <Card.Group className="tttt" >
        <Card fluid>
          {JobAdvert.map((advert) => (
            <Card.Content key={advert.id}>
              <Card.Header className="bas">Employer : {advert.employer}</Card.Header><hr/>
              <Card.Header>ID : {id}</Card.Header><hr/>
              <Card.Header>City : {advert.city}</Card.Header><hr/>
              <Card.Header>Position : {advert.job_position}</Card.Header><hr/>
              <Card.Header>Work Type : {advert.work_type}</Card.Header><hr/>
              <Card.Header>Description : {advert.job_description}</Card.Header><hr/>
              <Card.Header>Max Salary : {advert.max_salary}</Card.Header><hr/>
              <Card.Header>Min Salary : {advert.min_salary}</Card.Header><br />

              <Card.Content extra>
              <div className="ui two buttons">
              <Button onClick={application} basic color="green">
              Application
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
