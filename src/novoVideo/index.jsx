import Button from "@mui/material/Button"
import { TextField, Container } from "@mui/material"
import styled from "styled-components"
import { mediumDark, lightGris } from "../components/global"


const Titulo = styled.h1`
        padding:2rem 0;
        text-align:center;
        color:${lightGris};
`

const NovoVideo = () => {
    return <form>
        <Container maxWidth="xl" >
            <Titulo>Nuevo video</Titulo>
            
            <TextField
                id="filled-basic"
                label="Titulo"
                variant="filled"
                fullWidth={true}
                margin="normal"
        
            />
            <TextField
                id="filled-basic"
                label="Link del video"
                variant="filled"
                fullWidth={true}
                margin="normal"
            />
            <TextField
                id="filled-basic"
                label="Link imagen del video"
                variant="filled"
                fullWidth={true}
                margin="normal" />
            <Button variant="contained" >Guardar</Button>
        </Container>
    </form>
}

export default NovoVideo