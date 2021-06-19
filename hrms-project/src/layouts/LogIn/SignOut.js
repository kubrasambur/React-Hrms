import React from 'react'
import { Button,Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
export default function SignOut({SignIn}) {
    return (
        <div>
            <Menu.Item className="btns">
           <Button className="btns" secondary onClick={SignIn} >Giriş Yap</Button>
           <Button className="btns" secondary as={NavLink} to="/login">Kayıt Ol</Button>
           </Menu.Item>
           
        </div>
    )
}