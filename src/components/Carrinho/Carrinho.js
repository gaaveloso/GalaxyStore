import React from "react";
import { Container, CarrinhoDiv } from "./CarrinhoStyled";
import lixeira from "../../img/caixote-de-lixo.png";
const Carrinho = (props) => {
  let totalCarrinho = 0;

  for (let i = 0; i < props.carrinho.length; i++) {
    totalCarrinho = totalCarrinho + props.carrinho[i].precoTotal;
  }

  const removerItem = (item) => {
    const novoCarrinho = [...props.carrinho];
    const produto = item;
    const produtoExistente = novoCarrinho.find((item) => {
      return item.id === produto.id;
    });
    if (produtoExistente.quantidade > 1) {
      produtoExistente.quantidade--;
      produtoExistente.precoTotal =
        produtoExistente.quantidade * produtoExistente.value;
    } else if ((produtoExistente.quantidade = 1)) {
      novoCarrinho.pop(produtoExistente);
    }
    props.setCarrinho(novoCarrinho);
  };
  return (
    <Container>
      <h1>Carrinho: </h1>
      {props.carrinho.map((item, index) => {
        return (
          <CarrinhoDiv>
            <div key={index}>
              <p>
                x{item.quantidade} {item.name} -{" "}
                {item.value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
              </p>
              <div>
                <button onClick={() => removerItem(item)}>
                  <img src={lixeira} />
                </button>
              </div>
            </div>
          </CarrinhoDiv>
        );
      })}
      <h1>
        Total:{" "}
        {totalCarrinho.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </h1>
    </Container>
  );
};

export default Carrinho;
