import styled from 'styled-components'

export const BoxHome = styled.header`
    padding:4em 0;
`

export const Title = styled.h1`
    text-align:center;
    font-size:6em;
    font-weight:600;
    line-height:1em;
    padding-bottom:.5em;

    @media (max-width: 768px) {
        font-size:4em;
    }

`

export const Description = styled.p`
    text-align:center;
    width:70%;
    margin:0 auto;
    @media (max-width: 768px) {
        width:100%;
        padding:0 2em;


    }
`