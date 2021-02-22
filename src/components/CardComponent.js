import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography'
import img from 'assets/images/adidas.png'
import heart from 'assets/images/heart.png'
import cam from 'assets/images/camera.png'

const CardComponent = (props) => {
    const { hostName, title, hostLogo, content, likes, date, contestImg} = props;
    return(
        <>
            <div className="main-card shadow-sm">
                <div className="card-thumb">
                    <img src={contestImg} width="100%"></img>
                    <div className="card-share">
                        <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#ffffff" className="bi bi-share-fill" viewBox="0 0 16 16">
                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                        </svg>
                        </Link>
                    </div>
                    <div className="card-author">
                        <div className="card-author-meta">
                        <Link to="/">{/*<img alt="img" src={heart} width="36" height="33">*/}</Link>
                        </div>
                        <div className="card-author-title">
                        <h4>{hostName}</h4>
                        </div>
                    </div>
                    <div className="card-btn">
                        <Link to="/" className="btn btn-border-white" >View</Link> 
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex">
                        <Typography fontSize="h1.fontSize">
                        {title}
                        </Typography>
                        
                        <p className="ml-auto text-align-right">
                        {likes}&nbsp; 
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                        </p>
                    </div>
                    <p className="card-text">{content}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                        <button type="button" className="btn btn-sm btn-rounded-outline-icon-photography"><img alt="img" width="30px" src={cam} /></button>
                        <button type="button" className="btn btn-sm btn-rounded-outline-icon-photography"><img alt="img" width="30px" src={cam} /></button>
                        <button type="button" className="btn btn-sm btn-rounded-outline-icon-photography"><img alt="img" width="30px" src={cam} /></button>
                        </div>
                        <small className="text-muted">{date}</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardComponent;
