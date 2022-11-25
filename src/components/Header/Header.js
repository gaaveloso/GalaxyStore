import {Container} from "./HeaderStyled"

const Header = (props) => {

    const handleSearch = (event) => {
        props.setPesquisa(event.target.value)
    }
    
    const handleOrderSearch = (event) => {
        props.setOrder(event.target.value)
    }

    const handleMaxValue = (event) => {
        props.setMaxValue(event.target.value)
    }

    const handleMinValue = (event) => {
        props.setMinValue(event.target.value)
    }

    return (
        <Container>
            <h1>Galaxy Store</h1>
            <p>Valor máximo: </p>
            <input type='number' value={props.maxValue} onChange={handleMaxValue} />
            <p>Valor mínimo: </p>
            <input type='number' value={props.minValue} onChange={handleMinValue} />
            <p>Pesquisar: </p>
            <input type='text' placeholder="Buscar..." onChange={handleSearch} value={props.pesquisa}/>
            <select value={props.order} onChange={handleOrderSearch}>
                <option value="cresc">Crescente</option>
                <option value="decresc">Decrescente</option>
            </select>
        </Container>
    )
}

export default Header;