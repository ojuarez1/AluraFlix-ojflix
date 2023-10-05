import { Container } from "@mui/material"
import styled from "styled-components"
import { lightGris, lightDark } from "../../../global"
import CampoTexto from "../campoTexto"
import Boton from "../../../boton"
import { NavLink} from "react-router-dom"
import { ValidatorForm } from "react-material-ui-form-validator"
import { useState} from "react"
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

const Lista = styled.select`
    margin: 1.5rem 0;
    width: 100%;
    background-color:#53585d;
    border-radius: 5px;
    padding:1rem 0.5rem;
    color:#fff;
`

const NovoVideo = () => {
    const [opciones, setOpciones] = useState()
    

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
    
    const submitBoton = (e) => {
        e.preventDefault()
        setTitulo("")
        setLinkVideo("")
        setLinkImagen("")
        setCategoria("")
        setDescripcion("")
        setCodigoSeguridad("")
    }
    
    const etiquetasLink = [
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
        }
    ]
    const CodigoSeguridad = [
        {
            titulo: "Codigo de seguridad",
            alto: "",
            valor:codigoSeguridad,
            actualizarValor:setCodigoSeguridad
        }
    ]

    const listaOpciones = ["Front-End","Back-End","Innovacion y Gestion" ]
    
    return <ValidatorForm onSubmit={(e) => {
        manejarEnvio(e)
    }}>
        <Container maxWidth="xl" style={{paddingBottom:"10rem"}}>
            <Titulo>Nuevo video</Titulo>
            {etiquetasLink.map((etiqueta, index) => {
                return <CampoTexto label={etiqueta} key={index}/>
            })}

            <Lista value={opciones} onChange={(e) => {
                return setOpciones(e.target.value)
            }}>
                <option value="" disable="" defaultValue="" hidden>Escoja una categoria</option>
                {listaOpciones.map((opcion, index) => <option key={index} >{ opcion }</option> )}
            </Lista>
            <textarea cols="30" rows="10" placeholder="Descripcion"></textarea>
            {CodigoSeguridad.map((etiqueta, index) =>< CampoTexto label = {etiqueta} key={index} />)}
            <ContBoton>
                <NuevoBoton>
                    <Boton ancho="180px" alto="54px" color="#2A7AE4" >Guardar</Boton>
                    <Boton ancho="180px" alto="54px" color={lightDark} submitBoton={submitBoton} >Limpiar</Boton>
                </NuevoBoton>
                
                <NavLink to="/NuevaCategoria"><Boton ancho="254px" alto="54px" color="#2A7AE4" >Nueva categoria</Boton></NavLink>
                
            </ContBoton>
                        
        </Container>
    </ValidatorForm>
}

export default NovoVideo