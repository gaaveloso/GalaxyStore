import React from "react";

const Carrinho = (props) => {

    let totalCarrinho = 0
    
    for(let i=0;i < props.carrinho.length; i++){
        totalCarrinho = totalCarrinho + props.carrinho[i].value
    }

    return (
        <div>
            <h1>Carrinho: </h1>
            {props.carrinho.map((item, index)=>{
                return (
                <div key={index}>
                    <p>{item.name} - {item.value}</p>
                </div>
                )
            })}
            <h1>Total: {totalCarrinho}</h1>
        </div>
    )
}

export default Carrinho;