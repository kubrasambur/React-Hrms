import React from "react";
import {  Button} from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { Card,Grid } from "semantic-ui-react";
import { addToFavourites, removeFromFavourites } from "../../store/actions/favouritesActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function JobAdverstDetails() {
  const dispatch = useDispatch()
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
  const handleAddToFavourites=(advert)=>{
    dispatch(addToFavourites(advert))
    toast.success(`${advert.employer} ' in ${advert.id} id'li ilanı favorilere eklendi !`)
  }
  
  return (
    <div>
      <h1 className="hh1" >{id} Id'li ilana ait bilgiler</h1>

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
                    <Grid.Column width={6}>
                      <Button onClick={()=>handleAddToFavourites(advert)} basic size="huge" color="blue">
                        Add to Favourites
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
