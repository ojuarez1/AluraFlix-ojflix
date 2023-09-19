import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"
import { Container } from "@mui/material";
import styled from "styled-components";
import { lightGris } from "../../global";
import { buscar } from "../../../api/api.js";



const Titulo = styled.h2`
  padding:0.5rem;
  width:fit-content;
  border-radius:3px;
  font-weight:400;
  color:${lightGris};
`
const Parrafo = styled.div`
  display:flex;
  gap:0.5rem;
  align-items:center;
  margin-bottom:0.5rem;
`

const MultipleItems = (props) => {
  const [gets, setGets] = useState([])

  const { color, title, formacion } = props.equipo
  const {url} = props
  
  useEffect(() => {
    buscar(url, setGets)
    console.log(gets)
  }, [url])

  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    
      return (
    
        <Container className="slider" maxWidth="xl">
          <Parrafo>
            <Titulo style={{ backgroundColor:color }}>{title}</Titulo>
            <p>{formacion}</p>
          </Parrafo>
          
          <Slider {...settings}>    
            {props.imagenes.map((imagen, index) => {
              return <div className="contenenedor-img" key={index}>
                <iframe width="560" height="315" src={imagen.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                {/* <ReactPlayer url={imagen.link} /> */}
              </div>
          })}           
        </Slider>
      </Container>
    );
  }

export default MultipleItems