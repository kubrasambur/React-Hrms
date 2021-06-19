import React from "react";
import {  Button} from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import EmployerService from "../../services/EmployersService";
import { Card } from "semantic-ui-react";

export default function JobAdverstDetails() {
  //BU FONK. PARAMETRELERİ OBJE OLARAK VERİR.
  let { id } = useParams();

  const [employers, setEmployers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    let EmployersService = new EmployerService()
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

  return (
    <div>
      <h2 className="hh" >{id} Id'li Şirkete ait bilgiler</h2>
      
        <Card.Group className="tttt">
        <Card fluid className="tttt" >
          {employers.map((employer) => (
            <Card.Content key={employer.id} className="tttt">
              <Card.Header className="bas">Name : {employer.company_name} </Card.Header><hr/>
              <Card.Header >ID : {id}</Card.Header><hr/>
              <Card.Header>Company City : {employer.company_adres}</Card.Header><hr/>
              <Card.Header>Company Web Adress : {employer.company_web_adress}</Card.Header><hr/>
              <Card.Header>Company Number : {employer.company_number}</Card.Header><hr/>
              <Card.Header>Company mail : {employer.company_email}</Card.Header><hr/>
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
