import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default function SignIn({signout}) {
    return (
        <div >
            <Menu.Item >
                <Image avatar spaced="right" src="https://yt3.ggpht.com/ytc/AAUvwnj8uUo5Rv7ujATFCzkALMx1v_mANNBm9lPs4Iyhk1c=s900-c-k-c0x00ffffff-no-rj"/>
                <Dropdown pointing="top left" text="Kübra">
                    <Dropdown.Menu >
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signout}as={NavLink} to={"/"}  text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}