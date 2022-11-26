import { Container } from "./HeaderStyled";
import astronauta from "../../img/astronauta.png"
const Header = () => {
  return (
    <Container>
      <img src={astronauta} />
      <h1>Galaxy Store</h1>
    </Container>
  );
};

export default Header;
