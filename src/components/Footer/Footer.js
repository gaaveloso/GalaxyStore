import { Container, Icons } from "./FooterStyled";
import logo from "../../img/eu.png";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.svg.png";

const Footer = () => {
  return (
    <Container>
      <img src={logo} />
      <Icons>
        <h1>Desenvolvido por: Gabriel Veloso</h1>
        <div>
          <a href="https://github.com/gaaveloso">
            <img src={github} />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-veloso-aa904924b/">
            <img src={linkedin} />
          </a>
        </div>
        <p>Todos os direitos reservados.</p>
      </Icons>
    </Container>
  );
};

export default Footer;
