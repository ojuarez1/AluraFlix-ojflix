import Boton  from "../boton"
import "./header.css"
import { NavLink } from "react-router-dom"



const Header = () => {
    return <section className="header">
        <div>
            <NavLink to="/"><img src="./img/logo.png" alt="Logo" /></NavLink>
        </div>
        <div>
            <Boton />
        </div>
        
    </section>
}

export default Header