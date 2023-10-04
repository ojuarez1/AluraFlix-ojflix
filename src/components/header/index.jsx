import Boton  from "../boton"
import "./header.css"
import { NavLink, Routes, Route } from "react-router-dom"




const Header = (props) => {
    console.log(props.ruta)
    return <section className="header">
        <div>
            <NavLink to="/"><img src="./img/logo.png" alt="Logo" /></NavLink>
            
        </div>
    
        <Routes>
            <Route path="/" element={<NavLink to="/NovoVideo"><Boton ancho="180px" alto="54px" color="#000000">Nuevo Video</Boton></NavLink>} />
        </Routes>
        
    </section>
}

export default Header