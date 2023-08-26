import Footer from "./components/footer";
import GlobalStyle from "./components/global/globalStyled";
import Header from "./components/header";
import Home from "./home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NovoVideo from "./novoVideo";
import Page404 from "./components/page404";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NovoVideo" element={<NovoVideo />} />
        <Route path="*" element={<Page404/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
