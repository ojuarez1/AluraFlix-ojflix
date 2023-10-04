import Footer from "./components/footer";
import GlobalStyle from "./components/global/globalStyled";
import Header from "./components/header";
import Home from "./home";
import {Routes, Route} from "react-router-dom"
import Page404 from "./components/page404";
import React from "react";
import { mediumDark } from "./components/global";
import styled from "styled-components";
import NuevaCategoria from "./components/registro/nuevaCategoria";
import NovoVideo from "./components/registro/nuevoVideo/formulario";


const Fondo = styled.div`
  background-color: ${mediumDark};
`
function App() {  
  
  return (
    <Fondo>
      <GlobalStyle />
      <Header ruta="/"/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/NovoVideo" element={<NovoVideo />} />
        <Route path="/NuevaCategoria" element={<NuevaCategoria/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>
      <Footer/>
    </Fondo>
  );
}

export default App;
