import { Container, Card } from "./MainStyled";
import andromeda from "../../img/andromeda.png";
import triangulo from "../../img/triangulo.png";
import centaurus from "../../img/centaurus.png";
import Carrinho from "../Carrinho/Carrinho";
import { useState } from "react";

const Main = (props) => {
  const [carrinho, setCarrinho] = useState([]);

  const obj = [
    {
      id: 1,
      name: "Galaxia de Andromeda",
      value: 2500,
      image: andromeda,
      quantidade: null,
    },
    {
      id: 2,
      name: "Galaxia do Triangulo",
      value: 1000,
      image: triangulo,
      quantidade: null,
    },
    {
      id: 3,
      name: "Centaurus A",
      value: 3000,
      image: centaurus,
      quantidade: null,
    },
  ];

  const onChangeItem = (event) => {
    setCarrinho(event.target.value);
  };

  const adicionarCarrinho = (item) => {
    const novoCarrinho = [...carrinho];
    const produto = item
    const produtoExistente = novoCarrinho.find((item) => {
      return item.id === produto.id
    })
    if (produtoExistente) {
      produtoExistente.quantidade++
      produtoExistente.precoTotal = produtoExistente.quantidade * produtoExistente.value
    } else {
      novoCarrinho.push({ ...produto, quantidade: 1, precoTotal: produto.value })
    }
    setCarrinho(novoCarrinho)
  };

  return (
    <Container>
      {obj
      .filter((item) => {
        return props.pesquisa ? item.name.toLowerCase().includes(props.pesquisa.toLowerCase()) : item
      })
      .map((item, index) => (
        <Card key={index}>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
          <p>Preço: {item.value}</p>
          <button
            onClick={() => adicionarCarrinho(item)}
            onChange={onChangeItem}
          >
            Adicionar ao carrinho
          </button>
        </Card>
      ))}
      <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />
    </Container>
  );
};

export default Main;
