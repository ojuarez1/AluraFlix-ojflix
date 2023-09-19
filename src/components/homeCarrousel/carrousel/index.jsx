import MultipleItems from "../slider"

const Carrousel = (props) => {

    return <>
        <MultipleItems imagenes={props.imagenes} equipo={props.equipo} url="/videos" />       
    </>
}


export default Carrousel