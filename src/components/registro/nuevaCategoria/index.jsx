import CampoTexto from "../../../novoVideo/campoTexto"
import { ValidatorForm } from "react-material-ui-form-validator"
import { Container } from "@mui/material"
import { styled } from "styled-components"
import { lightGris, lightDark} from "../../global"
import Boton from "../../boton"

const Titulo = styled.h1`
    padding:2rem 0;
    text-align:center;
    color:${lightGris};
`
const NuevoBoton = styled.div`
    width:30%;
    display:flex;
    justify-content:space-between;
    margin:2rem 0 1rem;
`

const NuevaCategoria = () => {
    const etiquetas = [{titulo:"Nombre", alto:""},{titulo:"Todos los video de la área de Front End colocar en esta categoría para organizar los estudios que vengo haciendo actualmente",alto:""},{titulo:"Color", alto:"", requerido:"required"},{titulo:"Codigo de seguridad", alto:""}]
    
    return <Container maxWidth="xl">
        <Titulo>Nuevo video</Titulo>
        <ValidatorForm onSubmit={(e)=> console.log(e)}>
            {etiquetas.map((etiqueta, index) => {
                return <CampoTexto label={etiqueta} key={index} />
            })}
        </ValidatorForm>
        <NuevoBoton>
            <Boton ancho="180px" alto="54px" color="#2A7AE4" >Guardar</Boton>
            <Boton ancho="180px" alto="54px" color={lightDark} >Limpiar</Boton>
        </NuevoBoton>
    </Container>
}

export default NuevaCategoria