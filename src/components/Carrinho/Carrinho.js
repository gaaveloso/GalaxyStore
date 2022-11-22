import React from "react";

const Carrinho = (props) => {
    console.log(props.carrinho);
    return (
        <div>
            <h1>Carrinho: </h1>
            {props.carrinho.map((item, index)=>{
                <div key={index}>
                    <p>{item}</p>
                </div>
            })}
        </div>
    )
}

export default Carrinho;