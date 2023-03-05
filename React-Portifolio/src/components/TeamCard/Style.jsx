import styled from "styled-components";

export const Profile = styled.div`
    width:25%;
    height:500px;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:top center;
    position:relative;
    cursor:pointer;

    &:hover .info{
        display:block;
    }

    @media (max-width: 768px) {
        width:90%;

    }

`

