import React from "react"
import { buttonPropsDto } from "../../props/dto"

const HeroButton: React.FC<buttonPropsDto> = ({ image, link, title, classes, target="_self" }) => {
    return (
        <a href={link} className={classes} target={target}>
            {image}
            <p>{title}</p>
        </a>
    )
}

export default HeroButton