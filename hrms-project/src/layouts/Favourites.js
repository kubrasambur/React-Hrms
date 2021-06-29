import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, Grid,Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromFavourites } from "../store/actions/favouritesActions";
import { toast } from "react-toastify";

function Favourites() {
  const dispatch = useDispatch()
  const { favItems } = useSelector((state) => state.favourites);

  const handleRemoveFromFavourites=(favItem)=>{
    dispatch(removeFromFavourites(favItem))
    toast.error(`${favItem.advert.employer}' in ${favItem.advert.id}'li ilanı favorilerden çıkarıldı !`)
    
  }
  return (
    <div className="favs">
      <h2>Your Favourites</h2>

      <Grid>
        <Grid.Row>
          {favItems.map((favItem) => (
            <Grid.Column width={4} >
              <Card color="red" className="favscart">
                <Card.Content description= {"Employer : "+favItem.advert.employer} />
                <Card.Content description={"Position : "+favItem.advert.job_position} />
                <Card.Content description={"City : "+favItem.advert.city} />
                <Card.Content >
                <Icon name="angle down" />
                <Button as={NavLink} to={ `/JobAdvertisement/${favItem.advert.id}`}color="red">See Detail</Button> <br /> <br />
                  <Button onClick={()=>handleRemoveFromFavourites(favItem)} color="grey" floated="centered">
                    Remove From Favourites
                  </Button>
                </Card.Content>
              </Card> <br />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Favourites;
