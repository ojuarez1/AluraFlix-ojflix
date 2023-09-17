import ReactPlayer from "react-player"
import styled from "styled-components"
import {colorFrontend} from "../global/index"

const Titulo = styled.h1`
  padding:0.5rem;
  width:fit-content;
  border-radius:3px;
  font-weight:400;
  font-size:2rem;
  background-color:${colorFrontend};
  color:#fff;
`

const FrontEnd = () => {
    return <section>
        <div>
            <Titulo>Front End</Titulo>
            <h3>Challenge React</h3>
            <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
        <div>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=0udk1vXmwkc"
            />
        </div>
    </section>
}

export default FrontEnd