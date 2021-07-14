import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import SignIn from "./LogIn/SignIn";
import SignOut from "./LogIn/SignOut";
import { NavLink,useHistory} from 'react-router-dom';
import {useSelector} from "react-redux"

function Navi() {
  const { favItems } = useSelector((state) => state.favourites);
  const [isAuthenticated, setisAuthenticated] = useState(true)
  const history = useHistory()

  function handlerSignOut(){
    setisAuthenticated(false)
    history.push("/")
  }
  function handlerSignIn(){
    setisAuthenticated(true)
  }


  return (
    <div>
      <Menu color="red" inverted fixed="top">
        <Container >
          <Menu.Item as={NavLink} to="/" name="Home Page" />
          <Menu.Item as={NavLink} to="/JobEmployer" name="Give Job Advert"/>
          <Menu.Item as={NavLink} to="/JobApplication" name="Job Application Form"/>
          <Menu.Item as={NavLink} to="/Favourites" name={"Favourities" + (favItems.length >0 ? favItems.length : "")} className="fav"/> 
          
          <Menu.Menu className="btns" position="right" >
          
           {isAuthenticated ? <SignIn signout={handlerSignOut}  />: <SignOut SignIn={handlerSignIn} /> }
          </Menu.Menu>
        </Container>
        
        
      </Menu>
    </div>
  );
}

export default Navi;