import styled from "styled-components";

export const BoxImage = styled.div`

    width:50%;
    height:500px;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    position:relative;
    cursor:pointer;

    &:hover .info{
        display:block;
    }


    @media (max-width: 768px) {
        width:100%;

    }
`

export const Info = styled.div`
    display:none;
    width:100%;
    position:absolute;
    bottom:0;
    background-color:white;
    padding:1em;


`

export const Title = styled.h3`
    margin:.3em 0;
    font-size:1.5em;
    color:black;
`
export const Description = styled.p`
    color:black;
`

export const Redirect = styled.a`
    color:black;
    text-decoration:none;
    display:flex;
    align-items:center;
    trasition:.3s;
    gap:.3rem;
    margin:1em 0;

    &:hover{
        text-decoration:underline;
    }
`
