import styled from 'styled-components'

export const BoxSummary = styled.div`
    min-width:230px;
    background-color:white;
    position:relative;
    left:-10px;
    display:flex;
    gap:.8em;
    flex-direction:column;
    padding:2em 1.5em;
    border-radius: 1em;

    @media screen and (max-width:800px){
        width:80%;

        position:static;
        border-radius: 0 0 .5em .5em ;
    }
      

`

export const Title = styled.h2`
    font-weight:700;
    font-size:1.2em;
`

export const Button = styled.button`

    background-color:hsl(224, 30%, 27%);
    border:0;
    outline:0;
    color:white;
    font-weight:700;
    padding:1em 0;
    border-radius:2em;
    margin-top:1em;

    &:hover{
        background: linear-gradient(to bottom, hsl(252, 100%, 67%) , hsl(241, 81%, 54%));
        cursor:pointer;

    }
`
