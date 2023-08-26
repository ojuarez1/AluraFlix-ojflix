import styled from "styled-components"
import { primaryDark } from "../global"

export const PiePagina = styled.div`
    background-color:${primaryDark};
    text-align:center;
`
const Footer = () => {
    return <PiePagina>
        <img src="./img/logo.png" alt="Logo" />
    </PiePagina>
}

export default Footer