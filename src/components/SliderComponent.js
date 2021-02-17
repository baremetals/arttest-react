import React from 'react'
import { Link } from 'react-router-dom'
import { slides } from 'data/data'

function SliderComponent(props) {
    const { title, mainHeader, image, logoAvater, logoAvaterLink, logoName, mapKeyword } = props
    return (
        <> 
        

        
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" >
                    <ol className="carousel-indicators">
                    {slides.map((sl, id) => (
                        <li data-bs-target="#myCarousel" data-bs-slide-to={0} className="" />
                    ))}
                        
                        {/* <li data-bs-target="#myCarousel" data-bs-slide-to={1} />
                        <li data-bs-target="#myCarousel" data-bs-slide-to={2} /> */}
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#777" />
                            </svg>
                            <div className="container">
                            <div className="carousel-caption">
                                <h6>{title}</h6>
                                <h1>The no1. platform for showcasing or finding creators &amp; innovators.</h1>
                                <p><Link to="/" className="btn btn-border-white" >Learn more</Link></p>
                            </div>
                            </div>
                            <div className="btn_view_contest">
                            <Link to="/" className="btn btn-border-white" >View Contest</Link> 
                            </div>
                            <div className="slider-share">
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#ffffff" className="bi bi-share-fill" viewBox="0 0 16 16">
                                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                                </svg>
                            </Link>
                            </div>
                            <div className="slider-adi">
                            <div className="slider-adi-meta">
                                <Link to="/"><img alt="img" src="../assets/brand/adidas.png" width={36} height={36} /></Link>
                            </div>
                            <div className="slider-adi-title">
                                <h4>adidas</h4>
                            </div>
                            </div>
                        </div>
                        {/* <div className="carousel-item">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#777" />
                            </svg>
                            <div className="container">
                            <div className="carousel-caption">
                                <h6>Creator of the day</h6>
                                <h1>The no1. platform for showcasing or finding creators &amp; innovators.</h1>
                                <p><Link to="/" className="btn btn-border-white" >Learn more</Link></p>
                            </div>
                            </div>
                            <div className="btn_view_contest">
                            <Link to="/" className="btn btn-border-white" >View Contest</Link> 
                            </div>
                            <div className="slider-share">
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#ffffff" className="bi bi-share-fill" viewBox="0 0 16 16">
                                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                                </svg>
                            </Link>
                            </div>
                            <div className="slider-adi">
                            <div className="slider-adi-meta">
                                <Link to="/"><img alt="img" src="../assets/brand/adidas.png" width={36} height={36} /></Link>
                            </div>
                            <div className="slider-adi-title">
                                <h4>adidas</h4>
                            </div>
                            </div>
                        </div> */}
                        {/* <div className="carousel-item">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#777" />
                            </svg>
                            <div className="container">
                            <div className="carousel-caption">
                                <h6>Creator of the day</h6>
                                <h1 className="slider-title">The no1. platform for showcasing or finding creators &amp; innovators.</h1>
                                <p><Link to="/" className="btn btn-border-white" >Learn more</Link></p>
                            </div>
                            </div>
                            <div className="btn_view_contest">
                            <Link to="/" className="btn btn-border-white" >View Contest</Link> 
                            </div>
                            <div className="slider-share">
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#ffffff" className="bi bi-share-fill" viewBox="0 0 16 16">
                                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                                </svg>
                            </Link>
                            </div>
                            <div className="slider-adi">
                            <div className="slider-adi-meta">
                                <Link to="/"><img alt="img" src="../assets/brand/adidas.png" width={36} height={36} /></Link>
                            </div>
                            <div className="slider-adi-title">
                                <h4>adidas</h4>
                            </div>
                            </div>
                        </div> */}
                        
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                    </a>
                    
                </div>
                
        </>
    )
}

export default SliderComponent
