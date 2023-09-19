import ReactPlayer from "react-player"
import styled from "styled-components"
import {colorFrontend} from "../global/index"

const Seccion = styled.section`
    display:flex;
    align-items:center;
    padding:0 1.5rem;
    height:100%;
`
const Equipo = styled.h1`
  padding:0.5rem;
  width:fit-content;
  border-radius:3px;
  font-weight:400;
  font-size:2rem;
  background-color:${colorFrontend};
  color:#fff;
`
const Titulo = styled.h3`
    color:#f5f5f5;
    margin:40px 0 9px;
    font-size:1.75rem;
`
const Parrafo = styled.p`
    width:72%;
    font-size:0.75rem;
`

const FrontEnd = () => {
    return <Seccion>
        <div>
            <Equipo>Front End</Equipo>
            <Titulo>Challenge React</Titulo>
            <Parrafo>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</Parrafo>
        </div>
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0udk1vXmwkc?si=MPJg9yGJZYMXu9_G" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            {/* <ReactPlayer
                url="https://www.youtube.com/watch?v=0udk1vXmwkc"
                
            /> */}
        </div>
    </Seccion>
}

export default FrontEnd