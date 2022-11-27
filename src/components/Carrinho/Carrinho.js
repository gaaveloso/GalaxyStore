import React, { useState } from "react";
import { Container, CarrinhoDiv, Compras } from "./CarrinhoStyled";
import lixeira from "../../img/caixote-de-lixo.png";
import CompraFinalizada from "../CompraFinalizada/CompraFinalizada";

const Carrinho = (props) => {
  const [telaPedidoFinalizado, setTelaPedidoFinalizado] = useState(true);

  const mudarTelaCarrinho = () => {
    props.setTelaCarrinho(false);
  };

  const mudarTelaPedidoFinalizado = () => {
    setTelaPedidoFinalizado(false);
  };

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
    <>
      {telaPedidoFinalizado ? (
        <Container>
          <section>
            <h1>Total de produtos: </h1>
            <h1>Carrinho: </h1>
            {props.carrinho.map((item, index) => {
              return (
                <CarrinhoDiv key={index}>
                  <div>
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
            <Compras>
              <h1>
                Total:{" "}
                {totalCarrinho.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h1>
              <button onClick={mudarTelaCarrinho}>CONTINUE COMPRANDO</button>
              <button onClick={mudarTelaPedidoFinalizado}>
                FINALIZAR COMPRA
              </button>
            </Compras>
          </section>
        </Container>
      ) : (
        <CompraFinalizada />
      )}
    </>
  );
};

export default Carrinho;
