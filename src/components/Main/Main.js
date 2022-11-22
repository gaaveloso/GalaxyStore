import { Container, Card } from "./MainStyled";
import andromeda from "../../img/andromeda.png";
import triangulo from "../../img/triangulo.png";
import centaurus from "../../img/centaurus.png";
import Carrinho from "../Carrinho/Carrinho";
import { useEffect, useState } from "react";

const Main = (props) => {
  const [carrinho, setCarrinho] = useState([]);

  const obj = [
    {
      id: 1,
      name: "Galáxia de Andrômeda",
      value: 2500,
      image: andromeda,
      quantidade: 0,
    },
    {
      id: 2,
      name: "Galáxia do Triângulo",
      value: 1000,
      image: triangulo,
      quantidade: 0,
    },
    {
      id: 3,
      name: "Centaurus A",
      value: 3000,
      image: centaurus,
      quantidade: 0,
    },
  ];

  useEffect(() => {}, []);



  const onChangeItem = (event) => {
    setCarrinho(event.target.value);
  };

  const somaCarrinho = () => {};

  
  const adicionarCarrinho = (item) => {
    const novoCarrinho = [...carrinho, item];
    setCarrinho(novoCarrinho);
};
console.log(carrinho)

  return (
    <Container>
      {obj.map((item, index) => (
        <Card key={index}>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
          <p>Preço: {item.value}</p>
          <p>Quantidade: {item.quantidade}</p>
          <button
            onClick={() => adicionarCarrinho(item)}
            onChange={onChangeItem}
          >
            Adicionar ao carrinho
          </button>
        </Card>
      ))}
      <Carrinho carrinho={carrinho} setCarrinho={setCarrinho}/>
    </Container>
  );
};

export default Main;
