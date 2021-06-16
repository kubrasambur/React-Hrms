import React from 'react'
import { Button,Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
export default function SignOut({SignIn}) {
    return (
        <div>
            <Menu.Item>
           <Button secondary onClick={SignIn} >Giriş Yap</Button>
            <Button secondary as={NavLink} to="/login"> Kayıt Ol </Button>
            </Menu.Item>
        </div>
    )
}