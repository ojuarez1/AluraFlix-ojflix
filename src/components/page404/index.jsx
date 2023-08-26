import { styled } from "styled-components"
const Error404 = styled.main`
    height:38.3vw;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const Page404 = () => {
    return <Error404>
        <p>ERROR 404</p>
        <p>Esta pagina no Existe</p>
    </Error404>
}

export default Page404