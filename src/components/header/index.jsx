import Boton  from "../boton"
import "./header.css"
import { Link } from "react-router-dom"


const Header = () => {
    return <section className="header">
        <div>
            <Link to="/"><img  src="./img/logo.png" alt="Logo" /></Link>
        </div>
        <div>
            <Boton/>
        </div>
    </section>
}

export default Header