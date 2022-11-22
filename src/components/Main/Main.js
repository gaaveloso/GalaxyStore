import { Container, Card } from "./MainStyled";
import andromeda from "../../img/andromeda.png"
import triangulo from "../../img/triangulo.png"
import centaurus from "../../img/centaurus.png"
import Carrinho from "../Carrinho/Carrinho";
import { useEffect, useState } from "react";

const Main = (props) => {

    const [carrinho, setCarrinho] = useState([])

    const obj = [
        {
            id: 1,
            name: "Galáxia de Andrômeda",
            value: 25000.0.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
            image: andromeda
        },
        {
            id: 2,
            name: "Galáxia do Triângulo",
            value: 10000.00.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
            image: triangulo
        },
        {
            id: 3,
            name: "Centaurus A",
            value: 30000.00.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
            image: centaurus
        }
    ]
    
    useEffect(()=>{
        
    },[])

    const onChangeItem = (event) => {
        setCarrinho(event.target.value)
    }
    
    const adicionarCarrinho = (item) => {
        setCarrinho(item)
        console.log(carrinho)
    }

    return (
        <Container>
            {obj.map((item, index) => 
            <Card key={index}>
                <h1>{item.name}</h1>
                <img src={item.image} alt={item.name} />
                <p>Preço: {item.value}</p>
                <button onClick={() => adicionarCarrinho(item)} onChange={onChangeItem}>Adicionar ao carrinho</button>
            </Card>
            )}
            <Carrinho
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            />
        </Container>
    )
}

export default Main;