import React from "react";

const Carrinho = (props) => {
  let totalCarrinho = null;

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
    <div>
      <h1>Carrinho: </h1>
      {props.carrinho.map((item, index) => {
        return (
          <div key={index}>
            <p>
              x{item.quantidade} {item.name} - {item.value}{" "}
            </p>
            <button onClick={() => removerItem(item)}>Remover</button>
          </div>
        );
      })}
      <h1>Total: {totalCarrinho}</h1>
    </div>
  );
};

export default Carrinho;
