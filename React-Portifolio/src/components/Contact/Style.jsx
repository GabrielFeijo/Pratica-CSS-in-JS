import styled from "styled-components";

export const ContactBox = styled.div`
    text-align:center;
    padding:1em 0;
`

export const ContactInfo = styled.p`
    font-size:1.6em;
    font-weight:300;
    line-height:1.5em;
`

export const Social = styled.ul`
    display:flex;
    flex-wrap:wrap;
    padding:0 1em;
    margin:1em 0;
    gap:2em;
    justify-content:center;
    list-style:none;

    & li a{
        text-decoration:none;   
        color: white
    }

    & li:hover a{
        text-decoration:underline;   
    }
`