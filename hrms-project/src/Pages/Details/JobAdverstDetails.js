import React from "react";
import { Button } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { Card, Grid, List, Image } from "semantic-ui-react";
import { addToFavourites } from "../../store/actions/favouritesActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function JobAdverstDetails() {
  const dispatch = useDispatch();
  //BU FONK. PARAMETRELERİ OBJE OLARAK VERİR.
  let { id } = useParams();

  const [JobAdvert, setJobAdvert] = useState([]);

  const history = useHistory();

  useEffect(() => {
    let jobAdvertService = new JobAdvertisementService();
    jobAdvertService.getById(parseInt(id)).then((result) => {
      setJobAdvert(result.data);
    });
  }, [id]);

  const application = () => {
    window.alert("Applied");
  };
  const decline = () => {
    history.push("/JobAdverts");
  };
  const handleAddToFavourites = (advert) => {
    dispatch(addToFavourites(advert));
    toast.success(
      `${advert.employer} ' in ${advert.id} id'li ilanı favorilere eklendi !`
    );
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
            <h1 className="hh1">{id} Id'li ilana ait bilgiler</h1>

            <Card.Group className="tttt">
              <Card fluid>
                {JobAdvert.map((advert) => (
                  <Card.Content key={advert.id}>
                    <Card.Header className="bas">
                      Employer : {advert.employer}
                    </Card.Header>
                    <hr />
                    <Card.Header>ID : {id}</Card.Header>
                    <hr />
                    <Card.Header>City : {advert.city}</Card.Header>
                    <hr />
                    <Card.Header>Position : {advert.jobPosition}</Card.Header>
                    <hr />
                    <Card.Header>Work Type : {advert.workType}</Card.Header>
                    <hr />
                    <Card.Header>
                      Description : {advert.jobDescription}
                    </Card.Header>
                    <hr />
                    <Card.Header>Max Salary : {advert.maxSalary}</Card.Header>
                    <hr />
                    <Card.Header>Min Salary : {advert.minSalary}</Card.Header>
                    <br />

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
                              Application
                            </Button>
                          </Grid.Column>
                          <Grid.Column width={6}>
                            <Button
                              onClick={() => handleAddToFavourites(advert)}
                              basic
                              size="huge"
                              color="blue"
                            >
                              Add to Favourites
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
