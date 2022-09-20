import React from 'react'
import home21 from "../assets/images/home21.jpg"
import home31 from "../assets/images/home31.jpg"
import home41 from "../assets/images/home41.jpg"
import home51 from "../assets/images/home51.jpg"


const Carousel = () => {
  return (
    <div>
        
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={home21} className="d-block w-100" alt="jumbotron" />
                </div>
                <div className="carousel-item">
                    <img src={home31} className="d-block w-100" alt="jumbotron" />
                </div>
                <div className="carousel-item">
                    <img src={home41} className="d-block w-100" alt="jumbotron" />
                </div>
                <div className="carousel-item">
                    <img src={home51} className="d-block w-100" alt="jumbotron" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior  :D</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente  :D</span>
            </button>
        </div>

    </div>
  )
}

export default Carousel