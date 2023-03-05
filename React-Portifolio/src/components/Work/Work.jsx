import React from 'react'
import WorkCard from '../WorkCard/WorkCard'
import { Title, WorkBox, Wrap } from './Style'
import Image1 from '../../assets/Image1.png'
import Image2 from '../../assets/Image2.png'
import Image3 from '../../assets/Image3.png'
import Image4 from '../../assets/Image4.png'
import Image5 from '../../assets/Image5.png'
import Image6 from '../../assets/Image6.png'

const images = [Image1, Image2, Image3, Image4, Image5,Image6]

const Work = () => {
    return (
        <WorkBox id='work'>
            <Title>Work</Title>
            <Wrap>
                {images.map((image) => (
                    <WorkCard url={image} />
                ))}
            </Wrap>

        </WorkBox>
    )
}

export default Work