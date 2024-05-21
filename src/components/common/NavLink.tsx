import React from "react"
import { navLinkPropsDto } from "../../props/dto"


const NavLink: React.FC<navLinkPropsDto> = ({ title, link }) => {

    return (
        <li><a className='navlink' href={link}>{title}</a></li>
    )
}

export default NavLink