import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  height: 54vh;
  section {
    border: 5px solid #bb96dc;
    margin: 50px auto;
    width: 17vw;
    border-radius: 10px;
    padding: 10px 0 0 10px;
    @media (max-width:800px) {
      width: 75vw;
      margin: 10vh auto;
    }
  }
`;

export const CarrinhoDiv = styled.div`
  @media (max-width:800px) {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
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
  @media (max-width:800px) {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
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
    text-align: center;
    justify-content: center;
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
      margin: 0;
      display: block;
      padding: 0px;
      width: 32vw;
      margin-bottom: 6px;
      font-size: 12px;
      font-weight: bold;
}
  }
`;
