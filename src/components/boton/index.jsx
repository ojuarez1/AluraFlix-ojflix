import styled from "styled-components"
import { primaryDark } from "../global"
import { Link } from "react-router-dom"


export const Buton = styled.button`
    background-color: ${primaryDark};
    border:1px solid #ffffff;
    width:180px;
    height:100%;
    border-radius:5px;
    color:#ffffff;
    cursor:pointer;
`
const Boton = (props) => {
    return <>
        <Link to="/NovoVideo"><Buton>Nuevo Video</Buton></Link>
    </>
}

export default Boton