import { Container } from "@mui/material"
import styled from "styled-components"
import { lightGris, lightDark } from "../../components/global"
import CampoTexto from "../campoTexto"
import Boton from "../../components/boton"
import { NavLink } from "react-router-dom"
import {ValidatorForm} from "react-material-ui-form-validator"


const Titulo = styled.h1`
    padding:2rem 0;
    text-align:center;
    color:${lightGris};
`

const ContBoton = styled.div`
    display:flex;
    justify-content:space-between;
`
const NuevoBoton = styled.div`
    width:30%;
    display:flex;
    justify-content:space-between;
`

const NovoVideo = () => {
    const etiquetas = [{titulo:"Titulo", alto:""},{titulo:"Link del video",alto:""},{titulo:"Link imagen del video", alto:"", requerido:"required"},{titulo:"Escoja una categoria", alto:""},{titulo:"Descripcion", alto:"10rem"},{titulo:"Codigo de seguridad", alto:""}]
    return <ValidatorForm onSubmit={(e)=> console.log(e)}>
        <Container maxWidth="xl" style={{paddingBottom:"10rem"}}>
            <Titulo>Nuevo video</Titulo>
            {etiquetas.map((etiqueta, index) => {
                return <CampoTexto label={etiqueta} key={index} />
            })}
            <ContBoton>
                <NuevoBoton>
                    <Boton ancho="180px" alto="54px" color="#2A7AE4" >Guardar</Boton>
                    <Boton ancho="180px" alto="54px" color={lightDark} >Limpiar</Boton>
                </NuevoBoton>
        
                <NavLink to="/NuevaCategoria"><Boton ancho="254px" alto="54px" color="#2A7AE4" >Nueva categoria</Boton></NavLink> 
            
            </ContBoton>
                        
        </Container>
    </ValidatorForm>
}

export default NovoVideo