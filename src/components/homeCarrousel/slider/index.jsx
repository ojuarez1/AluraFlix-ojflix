import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"
import { Container } from "@mui/material";
import styled from "styled-components";
import { lightGris } from "../../global";

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

export default class MultipleItems extends Component {
  render() {
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
            <Titulo style={{ backgroundColor: this.props.equipo.color }}>{this.props.equipo.title}</Titulo>
            <p>{ this.props.equipo.formacion}</p>
          </Parrafo>
          
          <Slider {...settings}>    
            {this.props.imagenes.map((imagen, index) => {
              return <div className="contenenedor-img" ><img src={imagen.imagen} alt="Uno" key={index}/></div>
          })}           
        </Slider>
      </Container>
    );
  }
}