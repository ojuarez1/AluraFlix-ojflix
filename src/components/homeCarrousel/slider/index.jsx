import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"
import { Container } from "@mui/material";


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
              <h2>{this.props.titulo }</h2>
          <Slider {...settings}>
          <div >
            <img src="./img/image1.png" alt="Uno" />
          </div>
          <div>
            <img src="./img/image2.png" alt="Dos" />
          </div>
          <div>
            <img src="./img/image3.png" alt="Tres" />
          </div>
          <div>
            <img src="./img/image1.png" alt="Uno" />
          </div>
          <div>
            <img src="./img/image2.png" alt="Dos" />
          </div>
          <div>
             <img src="./img/image3.png" alt="Tres" />
          </div>
        </Slider>
      </Container>
    );
  }
}