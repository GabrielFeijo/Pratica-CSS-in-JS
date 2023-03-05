import React from 'react'
import { Description } from '../Home/Style'
import TeamCard from '../TeamCard/TeamCard'
import { Title } from '../Work/Style'
import { BoxTeam, Squad } from './Style'

import Image1 from '../../assets/Squad/Image1.png'
import Image2 from '../../assets/Squad/Image2.png'
import Image3 from '../../assets/Squad/Image3.png'
import Image4 from '../../assets/Squad/Image4.png'

const squad = [Image1, Image2, Image3, Image4]

const Team = () => {
  return (
    <BoxTeam>
      <Title>Our Team</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Description>

      <Squad>
        {squad.map((image) => (
          <TeamCard url={image} />
        ))}

      </Squad>


    </BoxTeam>
  )
}

export default Team