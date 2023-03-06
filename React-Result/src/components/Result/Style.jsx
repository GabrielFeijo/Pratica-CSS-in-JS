import styled from 'styled-components'


export const ResultBox = styled.div`
    z-index:1;
    background: linear-gradient(to bottom, hsl(252, 100%, 67%) , hsl(241, 81%, 54%));
    display:flex;
    gap:.8em;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: 2em;
    border-radius: 1em;
    

    @media screen and (max-width:800px){
        width:80%;
        position:static;
        border-radius: .5em .5em  0 0;
    }
      
`;

export const Title = styled.h1`
    font-size:1.5em;
    color:white;
`

export const Description = styled.p`
    color:hsl(241, 100%, 89%);
    font-size:1.1em;
    font-weight:700;
`

export const Info = styled.p`
    color:hsl(241, 100%, 89%);
    font-size:0.9em;
    max-width:200px;
    text-align:center;
`

export const Circle = styled.div`
    background:linear-gradient(to top,  hsla(241, 72%, 46%, 0)  ,hsla(256, 72%, 46%, 1) 100%);
    width:150px;
    height:150px;
    border-radius:50%;
    margin:1em 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`

export const Bold = styled.p`
    color:white;
    font-size:2.5em;
    font-weight:800;
`


