import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import { Title, Wrap } from '../Work/Style'
import { Flex, ServiceBox } from './Style'

const Services = () => {
  return (
    <ServiceBox id='services'>
        <Title>Services</Title>
        <Flex>
            <ServiceCard title={'Graphic Design'} price={400}/>
            <ServiceCard title={'Product Design'} price={350}/>
            <ServiceCard title={'Web Design'} price={800}/>
            <ServiceCard title={'Video Editing'} price={500}/>


        </Flex>
    </ServiceBox>
  )
}

export default Services