import styled from "styled-components";

export const FooterBox = styled.footer`
    margin-top:1em;
    background-color:white;
    color:black;
    padding:1.2em 3em;
    display: flex;
    justify-content:space-between;
    align-items:center;

    @media (max-width: 570px) {
        flex-direction:column;
        gap:1em;
    }
`