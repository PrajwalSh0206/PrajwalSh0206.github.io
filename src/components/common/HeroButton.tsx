import React from "react"
import { ButtonPropsDto } from "../../props/dto"

const HeroButton: React.FC<ButtonPropsDto> = ({ image, link, title, classes, target="_self" }) => {
    return (
        <a href={link} className={classes} target={target}>
            {image}
            <p>{title}</p>
        </a>
    )
}

export default HeroButton