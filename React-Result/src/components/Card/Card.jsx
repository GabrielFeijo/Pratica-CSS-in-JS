import React from 'react'

import { Card2, CardBox, Category, Image, Score, Score2 } from './Style'

const Card = ({ color, category, image, score }) => {
  return (
    <CardBox style={{ backgroundColor: `${color}20`, color: color }}>

      <Card2>
        <Image src={image} alt={image} />
        <Category>{category}</Category>
      </Card2>

      <Card2>
        <Score>{score}</Score>
        <Score2>/ 100</Score2>
      </Card2>
    </CardBox>
  )
}

export default Card