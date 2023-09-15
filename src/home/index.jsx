import Banner from "../components/banner"
import Carrousel from "../components/homeCarrousel/carrousel"
import { colorBackend, colorInovation} from "../components/global"



const Home = () => {
    const equipos = [{title:"",color:"", formacion:"" }, {title:"Back-End", color:colorBackend, formacion:"Formacion Back End de Alura Latam"}, {title:"Innovacion y Gestion", color:colorInovation, formacion:"Formacion Innovacion y Gestion de Alura Latam"}]
    const imagenes = [
        { titulo:"", imagen:"./img/image1.png" },{ titulo:"", imagen:"./img/image2.png" },{ titulo:"", imagen:"./img/image3.png" },{ titulo:"", imagen:"./img/image1.png" }, {titulo:"Back-End", imagen:"./img/image4.png"},{ titulo:"Back-End", imagen:"./img/image5.png" },{ titulo:"Back-End", imagen:"./img/image6.png" }, {titulo:"Back-End", imagen:"./img/image4.png"},{titulo:"Innovacion y Gestion", imagen:"./img/image7.png"},{titulo:"Innovacion y Gestion", imagen:"./img/image8.png"},{titulo:"Innovacion y Gestion", imagen:"./img/image9.png"},{titulo:"Innovacion y Gestion", imagen:"./img/image7.png"} ]
    return <>
        <Banner />
        {equipos.map((equipo, index) => {
          return <Carrousel imagenes={imagenes.filter(image => image.titulo === equipo.title)} key={index} equipo={equipo} />
        })}
        
    </>
}

export default Home