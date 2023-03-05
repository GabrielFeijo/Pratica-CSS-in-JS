import React from 'react'
import Card from '../Card/Card'
import { BoxSummary, Button, Title } from './Style'

import dados from '../../data'

const Summary = () => {
  return (
    <BoxSummary>
      <Title>Summary</Title>
   
      {dados.map((data,index) => (
        <Card color={data.color} category={data.category} image={data.icon} key={index} score={data.score}/>
      ))}
      <Button>Continue</Button>
    </BoxSummary>
  )
}

export default Summary




