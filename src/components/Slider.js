import React, { Fragment } from "react";
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import { slides } from '../data/slider'
import addi from '../assets/images/adidas.png'
// import './style.scss'

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} >
      <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div  onClick={onClick}>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
        </a>
    </div>
  );
}

export default function SimpleSlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        id="myCarousel" className="carousel slide" data-bs-ride="carousel"
      >
      <ol className="carousel-indicators">
        <li data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" />
        <li data-bs-target="#myCarousel" data-bs-slide-to={1} />
        <li data-bs-target="#myCarousel" data-bs-slide-to={2} /> 
        {i + 1}               
      </ol>
      </div>
    )
  
  };

  return (
    <Fragment>
      <Grid >
        <Slider {...settings}>
          {slides.map(slide => (
            <Grid key={slide.id} id="myCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slide.image} alt='img' />
                  <div className="container">
                    <div className="carousel-caption">
                      <h6>{slide.title}</h6>
                      <h1>{slide.mainHeader}</h1>
                      <p><a className="btn btn-border-white" href="#" role="button">Learn more</a></p>
                    </div>
                  </div>
                  <div className="btn_view_contest">
                    <a className="btn btn-border-white" href="#" role="button">View Contest</a>
                  </div>
                  <div className="slider-share">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-share-fill" viewBox="0 0 16 16">
                      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                    </svg></a>
                  </div>
                  <div className="slider-adi">
                    <div className="slider-adi-meta">
                      <a href="#"><img src={addi} width="36" height="36" /></a>
			              </div>
                      <div className="slider-adi-title">
                        <h4>adidas</h4>
                      </div>
                    </div>
                  </div>
                </div>
            </Grid>
          ))}
        </Slider>
      </Grid>
    </Fragment>
  );
}