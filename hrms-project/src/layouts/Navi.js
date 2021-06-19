import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import SignIn from "./LogIn/SignIn";
import SignOut from "./LogIn/SignOut";
import { NavLink,useHistory } from 'react-router-dom';
function Navi() {

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
          <Menu.Item as={NavLink} to="/" name="Anasayfa" />
          <Menu.Item as={NavLink} to="/JobEmployer" name="İş İlani Ver"/>
          <Menu.Item as={NavLink} to="/JobApplication" name="İş Başvuru Formu"/>
    
          <Menu.Menu className="btns" position="right" >
              {isAuthenticated ? <SignIn signout={handlerSignOut}  />: <SignOut SignIn={handlerSignIn} /> }

          </Menu.Menu>
        </Container>
          
        
      </Menu>
    </div>
  );
}

export default Navi;