import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: 1vw;
  margin-bottom: 1vh;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
export const Home = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }
`;
export const Card = styled.div`
  height: 40vh;
  width: 15vw;
  margin: 1vh;
  background-color: white;
  border: 1px solid #bb96dc;
  color: black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 800px) {
    width: 40vw;
    margin: 0 auto;
    margin-top: 5px;
  }

  :hover {
    border: 5px solid #412279;
  }

  img {
    height: 16vh;
    width: 12vw;
    @media (max-width: 800px) {
      width: 30vw;
    }
  }

  p {
    font-size: 20px;
  }

  button {
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
    @media (max-width: 800px) {
      display: block;
      width: 30vw;
    }
  }
`;

export const ButtonCarrinho = styled.div`
  margin-top: 250px;
  margin-right: 100px;
  img {
    width: 150px;
    height: 150px;
  }
  button {
    background: none;
    border: none;
    width: 150px;
    height: 150px;
    cursor: pointer;
  }
  @media (max-width: 800px) {
      margin: 0 auto;
      img{
        width: 50px;
        height: 50px;
      }
      button {
        width: 50px;
        height: 50px;
    cursor: pointer;
  }
    }
`;
