import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: 1vw;
  margin-bottom: 1vh;
`;
export const Home = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
export const Card = styled.div`
  height: 40vh;
  width: 15vw;
  background-color: white;
  border: 1px solid #bb96dc;
  margin-top: 20px;
  color: black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  padding: 10px;

  :hover {
    border: 5px solid #412279;
  }

  img {
    height: 12vh;
    width: 12vw;
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
  }
`;
