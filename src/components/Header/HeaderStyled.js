import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    border: 1px solid black;
    background-image: linear-gradient(#1b1145, #8749bc, #bb96dc);
    @media (max-width: 800px) {
        width: 100vw;
    }

    img {
        margin-top: 50px;
        width: 10vw;
        height: 20vh;
        z-index: 1;
    }

    h1 {
        font-family: Georgia, sans-serif;
        font-size: 5vw;
    }
    div {
        display: flex;
    }
`
