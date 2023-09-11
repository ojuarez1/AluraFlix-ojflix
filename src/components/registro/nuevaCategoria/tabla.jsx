import styled from "styled-components"
import { lightGris } from "../../global"

const TablaCont = styled.table`
    border:1px solid blue;
    margin:1.5rem 0 7rem;
    width:100%
`

const Header = styled.th`
    border:1px solid blue;
    padding:0.5rem;
    color:${lightGris};
    font-size:1.25rem;
`
const Celdas = styled.td`
    border:1px solid black;
    padding:0.5rem;
    color:#A0AAB4;
`

const Tabla = () => {
    return (
        <>
            <TablaCont>
                <thead>
                    <tr>
                        <Header>Nombre</Header>
                        <Header>Descripcion</Header>
                        <Header>Editar</Header>
                        <Header>Remover</Header>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Celdas>Back End</Celdas>
                        <Celdas>Todos los video que estoy usando para estudiar Back End</Celdas>
                        <Celdas>Editar</Celdas>
                        <Celdas>Remover</Celdas>
                    </tr>
                    <tr>
                        <Celdas>Mobile</Celdas>
                        <Celdas>Contenido que vengo estudiando sobre React Native y Flutter</Celdas>
                        <Celdas>Editar</Celdas>
                        <Celdas>Remover</Celdas>
                    </tr>
                    <tr>
                        <Celdas>Infraestrutura</Celdas>
                        <Celdas>Todo lo que estoy aprendiendo sobre Docker y mucho mas</Celdas>
                        <Celdas>Editar</Celdas>
                        <Celdas>Remover</Celdas>
                    </tr>
                    <tr>
                        <Celdas>Data Science</Celdas>
                        <Celdas>Cosas de React y Python que vengo aprendiendo</Celdas>
                        <Celdas>Editar</Celdas>
                        <Celdas>Remover</Celdas>
                    </tr>
                    <tr>
                        <Celdas>Design & UX</Celdas>
                        <Celdas>Herramientas y técnicas que estudio sobre UX y Design</Celdas>
                        <Celdas>Editar</Celdas>
                        <Celdas>Remover</Celdas>
                    </tr>
                    <tr>
                        <Celdas>Marketing Digital</Celdas>
                        <Celdas>La forma de vender y monetizar mis ideas</Celdas>
                        <Celdas>Editar</Celdas>
                        <Celdas>Remover</Celdas>
                    </tr>
                    <tr>
                        <Celdas>Inovação & Gestão</Celdas>
                        <Celdas>Como mantener el equipo felíz y mucho mas</Celdas>
                        <Celdas>Editar</Celdas>
                        <Celdas>Remover</Celdas>
                    </tr>
                </tbody>
            </TablaCont>
        </>
    )
}

export default Tabla