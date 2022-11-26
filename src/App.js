import { useState } from "react";
import "./App.css";
import Filtros from "./components/Filtros/Filtro";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import GlobalStyled from "./GlobalStyled";

function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [order, setOrder] = useState("cresc");
  const [maxValue, setMaxValue] = useState("");
  const [minValue, setMinValue] = useState("");

  return (
    <>
      <Header />
      <Filtros
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        order={order}
        setOrder={setOrder}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        minValue={minValue}
        setMinValue={setMinValue}
      />
      <Main
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        order={order}
        setOrder={setOrder}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        minValue={minValue}
        setMinValue={setMinValue}
      />
      <Footer />
      <GlobalStyled />
    </>
  );
}

export default App;
