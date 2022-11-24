import {Container} from "./HeaderStyled"

const Header = (props) => {

    const handleSearch = (event) => {
        props.setPesquisa(event.target.value)
    }
    
    return (
        <Container>
            <h1>Galaxy Store</h1>
            <label>Valor mínimo: </label>
            <input type='number'/>
            <label>Valor máximo: </label>
            <input type='number'/>
            <label>Pesquisar: </label>
            <input type='text' placeholder="Buscar..." onChange={handleSearch} value={props.pesquisa}/>
            <select>
                <option>Crescente</option>
                <option>Decrescente</option>
            </select>
        </Container>
    )
}

export default Header;