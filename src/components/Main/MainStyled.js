import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 75vh;
    margin-left: 1vw;
    gap: 50px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    img {
        height: 20vh;
        width: 20vw;
    }

    p {
        font-size: 20px;
    }

    button {
        width: 15vw;
        height: 5vh;
    }
`