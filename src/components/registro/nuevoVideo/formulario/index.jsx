import { Container } from "@mui/material"
import styled from "styled-components"
import { lightGris, lightDark } from "../../../global"
import CampoTexto from "../campoTexto"
import Boton from "../../../boton"
import { NavLink} from "react-router-dom"
import { ValidatorForm } from "react-material-ui-form-validator"
import { useState } from "react"
import axios from "axios"



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
    //const [videos, setVideos] = useState([])
    
    const [titulo, setTitulo] = useState("")
    const [linkVideo, setLinkVideo] = useState("")
    const [linkImagen, setLinkImagen] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [codigoSeguridad, setCodigoSeguridad] = useState("")

    const manejarEnvio = async(e) => {
        e.preventDefault()
        const newVideo = {
            titulo,
            linkVideo,
            linkImagen,
            categoria,
            descripcion,
            codigoSeguridad
        }
        
        await axios.post("http://localhost:5000/videos", newVideo)

    }

    const etiquetas = [
        {
            titulo: "Titulo",
            alto: "",
            valor:titulo,
            actualizarValor: setTitulo
            
        },
        {
            titulo: "Link del video",
            alto: "",
            valor:linkVideo,
            actualizarValor:setLinkVideo
        },
        {
            titulo: "Link imagen del video",
            alto: "",
            requerido: "required",
            valor:linkImagen,
            actualizarValor:setLinkImagen
        },
        {
            titulo: "Escoja una categoria",
            alto: "",
            valor:categoria,
            actualizarValor:setCategoria
        },
        {
            titulo: "Descripcion",
            multiline: true,
            valor:descripcion,
            actualizarValor:setDescripcion
        },
        {
            titulo: "Codigo de seguridad",
            alto: "",
            valor:codigoSeguridad,
            actualizarValor:setCodigoSeguridad
        }
    ]
    
    return <ValidatorForm onSubmit={(e) => {
        manejarEnvio(e)
    }}>
        <Container maxWidth="xl" style={{paddingBottom:"10rem"}}>
            <Titulo>Nuevo video</Titulo>
            {etiquetas.map((etiqueta, index) => {
                return <CampoTexto label={etiqueta} key={index}/>
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