import Button from "@mui/material/Button"
import { Container } from "@mui/material"
import styled from "styled-components"
import { lightGris } from "../../components/global"
import CampoTexto from "../campoTexto"

const Titulo = styled.h1`
        padding:2rem 0;
        text-align:center;
        color:${lightGris};
`

const NovoVideo = () => {
    const etiquetas = [{titulo:"Titulo", alto:""},{titulo:"Link del video",alto:""},{titulo:"Link imagen del video", alto:""},{titulo:"Escoja una categoria", alto:""},{titulo:"Descripcion", alto:"10rem"},{titulo:"Codigo de seguridad", alto:""}]
    return <form>
        <Container maxWidth="xl" >
            <Titulo>Nuevo video</Titulo>
            {etiquetas.map((etiqueta, index) => {
                return <CampoTexto label={etiqueta} key={index} />
            })}            
            <Button variant="contained" >Guardar</Button>
        </Container>
    </form>
}

export default NovoVideo