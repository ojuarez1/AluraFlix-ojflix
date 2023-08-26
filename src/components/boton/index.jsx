import styled from "styled-components"
import { primaryDark } from "../global"
import { NavLink } from "react-router-dom"


export const Buton = styled.button`
    background-color: ${primaryDark};
    border:1px solid #ffffff;
    width:180px;
    height:100%;
    border-radius:5px;
    color:#ffffff;
    cursor:pointer;
`
const Boton = () => {
    
    return <>
        <NavLink to="/NovoVideo"><Buton>Nuevo Video</Buton></NavLink>
    </>
}

export default Boton