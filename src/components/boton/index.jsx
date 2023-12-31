import styled from "styled-components"
import { primaryDark } from "../global"


export const Buton = styled.button`
    background-color: ${primaryDark};
    border:1px solid #ffffff;
    
    
    border-radius:5px;
    color:#ffffff;
    cursor:pointer;
`
const Boton = (props) => {
    return <>
        <Buton style={{width:props.ancho, height:props.alto, backgroundColor:props.color }} onClick={props.submitBoton} >{props.children} </Buton>
    </>
}

export default Boton