import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 59.2vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width:800px) {
      width: 75vw;
      margin: 0 auto;
    }
    div{
        border: 4px solid #bb96dc;
        text-align: center;
        padding: 50px;
        border-radius: 10px;
        @media (max-width:800px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      h1{
        @media (max-width:800px) {
          margin-bottom: 5px;
        }
      }
    }
    button {
    margin-top: 20px;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    padding: 10px 0;
    font-size: 18px;
    width: 14vw;
    height: 5vh;
    border: none;
    background-color: #bb96dc;
    transition: all 0.5s;

    :hover {
      background-color: #412279;
      color: white;
    }

    :active {
      background-color: black;
      color: white;
    }
    cursor: pointer;
    @media (max-width:800px) {
      margin: 0 auto;
      margin-top: 10px;
      padding: 0;
      display: block;
      width: 30vw;
      height: 7vh;
    }
    @media (max-width:1024px){
      margin: 0 auto;
      margin-top: 10px;
      padding: 0;
      display: block;
      width: 30vw;
      height: 7vh;
    }
  }
`