import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  display: flex;
  color: white;
  background-color: #533d8b;
  img {
    width: 200px;
    height: 200px;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  img {
    width: 50px;
    height: 50px;
  }
  a {
    img {
      transition: all 0.5s;
    }
    img:hover {
      width: 60px;
      height: 60px;
    }
  }
  div {
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  p {
  }
`;
