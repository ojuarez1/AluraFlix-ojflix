import Banner from "../components/banner"
import Carrousel from "../components/homeCarrousel/carrousel"
import { colorBackend, colorInovation } from "../components/global"
import { buscar } from "../api/api";
import { useState, useEffect } from "react"




const Home = ({url}) => {
    const [gets, setGets] = useState([])
    

    useEffect(() => {
        buscar(url, setGets)
        console.log(gets)
    }, [url])

    const equipos = [
        {
            title: "",
            color: "",
            formacion: ""
        },
        {
            title: "Back-End",
            color: colorBackend,
            formacion: "Formacion Back End de Alura Latam"
        },
        {
            title: "Innovacion y Gestion",
            color: colorInovation,
            formacion: "Formacion Innovacion y Gestion de Alura Latam"
        }]
    const imagenes = [
        {
            titulo: "",
            link:  "https://www.youtube.com/embed/eejIHbOk_uI?si=e72Q9CPexveFAI-q",
            imagen:"./img/image1.png"
        },
        {
            titulo: "",
            imagen: "./img/image2.png"
            
        },
        {
            titulo: "",
            imagen: "./img/image3.png"
        },
        {
            titulo: "",
            imagen: "./img/image1.png"
        },
        {
            titulo: "Back-End",
            link:"https://www.youtube.com/embed/Z024LSCMqFk?si=3h_DjawTk5FvdJec",
            imagen: "./img/image4.png"
        }, 
        {
            titulo: "Back-End",
            imagen: "./img/image5.png"
        },
        {
            titulo: "Back-End",
            imagen: "./img/image6.png"
        },
        {
            titulo: "Back-End",
            imagen: "./img/image4.png"
        },
        {
            titulo: "Innovacion y Gestion",
            link:"https://www.youtube.com/embed/Yfm16Tlpcwk?si=ZhJ2-fb6JncYJqAx",
            imagen: "./img/image7.png"
        },
        {
            titulo: "Innovacion y Gestion",
            imagen: "./img/image8.png"
        },
        {
            titulo: "Innovacion y Gestion",
            imagen: "./img/image9.png"
        },
        {
            titulo: "Innovacion y Gestion",
            imagen: "./img/image7.png"
        }]
    return <>
        <Banner />
        {equipos.map((equipo, index) => {
          return <Carrousel imagenes={gets.filter(image => image.categoria === equipo.title)} key={index} equipo={equipo} />
        })}
        
    </>
}

export default Home