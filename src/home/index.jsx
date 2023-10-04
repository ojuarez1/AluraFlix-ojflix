import Banner from "../components/banner"
import Carrousel from "../components/homeCarrousel/carrousel"
import { colorBackend, colorInovation } from "../components/global"
import axios from "axios"
import { useState, useEffect } from "react"




const Home = (props) => {
    const [imagenes, setImagenes] = useState([])
    
    const fetchData = async () => {
      return await axios.get("http://localhost:5000/videos").then((respuesta)=>setImagenes(respuesta.data))
    }
    
    useEffect(() => {
     fetchData()
    }, [])
  
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
  
    /* const nuevaImagen  = [
    {
      titulo: "",
      linkVideo:  "https://www.youtube.com/embed/eejIHbOk_uI?si=e72Q9CPexveFAI-q",
      imagen:"./img/image1.png"
    },
    {
      titulo: "Back-End",
      linkVideo:"https://www.youtube.com/embed/Z024LSCMqFk?si=3h_DjawTk5FvdJec",
      imagen: "./img/image4.png"
    },
    {
      titulo: "Innovacion y Gestion",
      linkVideo:"https://www.youtube.com/embed/Yfm16Tlpcwk?si=ZhJ2-fb6JncYJqAx",
      imagen: "./img/image7.png"
      },
    {
      titulo: "",
      linkVideo:  "https://www.youtube.com/embed/eejIHbOk_uI?si=e72Q9CPexveFAI-q",
      imagen:"./img/image1.png"
    },
    {
      titulo: "Back-End",
      linkVideo:"https://www.youtube.com/embed/Z024LSCMqFk?si=3h_DjawTk5FvdJec",
      imagen: "./img/image4.png"
    },
    {
      titulo: "Innovacion y Gestion",
      linkVideo:"https://www.youtube.com/embed/Yfm16Tlpcwk?si=ZhJ2-fb6JncYJqAx",
      imagen: "./img/image7.png"
      },
    {
      titulo: "",
      linkVideo:  "https://www.youtube.com/embed/eejIHbOk_uI?si=e72Q9CPexveFAI-q",
      imagen:"./img/image1.png"
    },
    {
      titulo: "Back-End",
      linkVideo:"https://www.youtube.com/embed/Z024LSCMqFk?si=3h_DjawTk5FvdJec",
      imagen: "./img/image4.png"
    },
    {
      titulo: "Innovacion y Gestion",
      linkVideo:"https://www.youtube.com/embed/Yfm16Tlpcwk?si=ZhJ2-fb6JncYJqAx",
      imagen: "./img/image7.png"
      }   
  ] */
  

    return <>
        <Banner />
        
        {equipos.map((equipo, index) => {
          return <Carrousel imagenes={imagenes.filter(imagen=>imagen.categoria === equipo.title)} key={index} equipo={equipo} />
        })}
        
    </>
}

export default Home