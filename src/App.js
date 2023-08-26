import Footer from "./components/footer";
import GlobalStyle from "./components/global/globalStyled";
import Header from "./components/header";
import Home from "./home";
import {Routes, Route} from "react-router-dom"
import NovoVideo from "./novoVideo";
import Page404 from "./components/page404";
import React from "react";


function App() {
  
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NovoVideo" element={<NovoVideo />} />
        <Route path="*" element={<Page404/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
