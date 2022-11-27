import styled from "styled-components";

export const Container = styled.div`
  height: 54vh;
  section {
    border: 5px solid #bb96dc;
    margin: 50px auto;
    width: 20vw;
    border-radius: 10px;
    padding: 10px 0 0 10px;
  }
`;

export const CarrinhoDiv = styled.div`
  img {
    width: 20px;
    height: 20px;
  }
  div {
    display: flex;
    margin: 5px;
    align-items: center;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const Compras = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  button {
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    border-radius: 10px;
    padding: 10px;
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
  }
`;
