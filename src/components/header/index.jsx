import Boton  from "../boton"
import "./header.css"
import { NavLink, Routes, Route } from "react-router-dom"



const Header = () => {
    return <section className="header">
        <div>
            <NavLink to="/"><img src="./img/logo.png" alt="Logo" /></NavLink>
        </div>
        <Routes>
            <Route path="/" element={<Boton />} />
        </Routes>
        
    </section>
}

export default Header