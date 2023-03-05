import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Description, Redirect, Title } from '../WorkCard/Style'
import { CardBox, Price, Service } from './Style'

const ServiceCard = ({title, price}) => {
    return (
        <CardBox>
            <Service>
                <Title>{title}</Title>
                <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
                </Description>
                <Redirect href='#'>See Details <BsArrowRight/></Redirect>
            </Service>

            <Price>Starting at ${price}</Price>

        </CardBox>
    )
}

export default ServiceCard