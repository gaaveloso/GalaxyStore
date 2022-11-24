import {Container} from "./HeaderStyled"

const Header = () => {
    return (
        <Container>
            <h1>Galaxy Store</h1>
            <label>Valor mínimo: </label>
            <input type='number'/>
            <label>Valor máximo: </label>
            <input type='number'/>
            <label>Pesquisar: </label>
            <input type='text'/>
            <select>
                <option>Crescente</option>
                <option>Decrescente</option>
            </select>
        </Container>
    )
}

export default Header;