import styled from 'styled-components'


export const Box = styled.div`
    padding:1.5rem 3rem;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    @media (max-width: 420px) {
        flex-direction:column;
        align-items:center;
        gap:1em;

    }
`

export const List = styled.ul`
    display:flex;
    gap:2rem;
    list-style:none;

    & li:hover{
        text-decoration:underline;
        cursor:pointer;
    }

    & li a{
        text-decoration:none;
        color:white;
    }

`

export const Teste = styled.div`
    background-color:white;
    height:10vh;
    margin:1em 0;
`