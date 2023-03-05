import React from 'react'
import { Description,  Info,  Title } from '../WorkCard/Style'
import {  Profile } from './Style'

const TeamCard = ({ url }) => {
  return (
    <Profile style={{ backgroundImage: `url(${url})` }}>
      <Info className='info'>
        <Title>Lorem Ipsum</Title>
        <Description>
          Digital Marketing Manager
        </Description>

      </Info>
    </Profile>
  )
}

export default TeamCard