import React from 'react'
import { BoxImage, Description, Info, Redirect, Title } from './Style'
import { BsArrowRight } from 'react-icons/bs'


const WorkCard = ({ url }) => {
    return (
        <BoxImage style={{ backgroundImage: `url(${url})` }}>
            <Info className='info'>
                <Title>Abstract Design</Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Description>
                <Redirect href='#'>See Project <BsArrowRight /></Redirect>
            </Info>
        </BoxImage>
    )
}

export default WorkCard