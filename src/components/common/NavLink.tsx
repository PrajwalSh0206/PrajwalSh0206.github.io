import React from "react"
import { NavLinkPropsDto } from "../../props/dto"


const NavLink: React.FC<NavLinkPropsDto> = ({ title, link }) => {

    return (
        <li><a className='navlink' href={link}>{title}</a></li>
    )
}

export default NavLink