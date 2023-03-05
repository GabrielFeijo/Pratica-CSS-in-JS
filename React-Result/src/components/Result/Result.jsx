import React from 'react'

import { Bold, Circle, Description, Info, ResultBox, Title } from './Style'


const Result = () => {
    return (

        <ResultBox >
            <Description>Your Result</Description>
            <Circle>
                <Bold>76</Bold>
                <Info>of 100</Info>
            </Circle>
            <Title>Great</Title>

            <Info>You scored higher than 65% of the people who have taken these tests.</Info>
        </ResultBox>


    )
}

export default Result