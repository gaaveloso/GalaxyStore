import { Container, Card, Home } from "./MainStyled";
import jupiter from "../../img/jupiter.png";
import marte from "../../img/marte.png";
import mercurio from "../../img/mercurio.webp";
import saturno from "../../img/saturno.webp";
import terra from "../../img/terra.png";
import venus from "../../img/venus.png";
import carrinhoCompras from "../../img/carrinho-de-compras.png";
import Carrinho from "../Carrinho/Carrinho";
import { useState } from "react";

const Main = (props) => {
  const [carrinho, setCarrinho] = useState([]);

  const mudarTelaCarrinho = () => {
    props.setTelaCarrinho(true);
  };

  const obj = [
    {
      id: 1,
      name: "Jupiter",
      value: 2500,
      image: jupiter,
      quantidade: null,
    },
    {
      id: 2,
      name: "Marte",
      value: 1000,
      image: marte,
      quantidade: null,
    },
    {
      id: 3,
      name: "Mercurio",
      value: 3000,
      image: mercurio,
      quantidade: null,
    },
    {
      id: 4,
      name: "Saturno",
      value: 3000,
      image: saturno,
      quantidade: null,
    },
    {
      id: 5,
      name: "Terra",
      value: 3000,
      image: terra,
      quantidade: null,
    },
    {
      id: 6,
      name: "Venus",
      value: 3000,
      image: venus,
      quantidade: null,
    },
  ];

  const onChangeItem = (event) => {
    setCarrinho(event.target.value);
  };

  const adicionarCarrinho = (item) => {
    const novoCarrinho = [...carrinho];
    const produto = item;
    const produtoExistente = novoCarrinho.find((item) => {
      return item.id === produto.id;
    });
    if (produtoExistente) {
      produtoExistente.quantidade++;
      produtoExistente.precoTotal =
        produtoExistente.quantidade * produtoExistente.value;
    } else {
      novoCarrinho.push({
        ...produto,
        quantidade: 1,
        precoTotal: produto.value,
      });
    }
    setCarrinho(novoCarrinho);
  };

  return (
    <>
      {!props.telaCarrinho ? (
        <Container>
          <Home>
            {obj
              .filter((item) => {
                return item.value >= props.minValue;
              })
              .filter((item) => {
                return props.maxValue ? item.value <= props.maxValue : item;
              })
              .filter((item) => {
                return props.pesquisa
                  ? item.name
                      .toLowerCase()
                      .includes(props.pesquisa.toLowerCase())
                  : item;
              })
              .sort((a, b) => {
                if (props.order === "cresc") {
                  if (a.name < b.name) {
                    return -1;
                  } else {
                    return 1;
                  }
                } else if (props.order === "decresc") {
                  if (a.name < b.name) {
                    return 1;
                  } else {
                    return -1;
                  }
                }
              })
              .map((item, index) => (
                <Card key={index}>
                  <h1>{item.name}</h1>
                  <img src={item.image} alt={item.name} />
                  <p>
                    Preço:{" "}
                    {item.value.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <button
                    onClick={() => adicionarCarrinho(item)}
                    onChange={onChangeItem}
                  >
                    Comprar
                  </button>
                </Card>
              ))}
          </Home>
          <button onClick={mudarTelaCarrinho}>
            <img src={carrinhoCompras} />
          </button>
        </Container>
      ) : (
        <Carrinho
        setTelaCarrinho={props.setTelaCarrinho}
        carrinho={carrinho}
        setCarrinho={setCarrinho}/>
      )}
    </>
  );
};

export default Main;
