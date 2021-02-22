import React from 'react'
import { Link } from 'react-router-dom'

function FollowersBox(props) {

    const { profileImg, username, userPage} = props
    return (
        <div className="card widget-item">
            <h4 className="widget-title">Followers</h4>
            <div className="widget-body">
                <ul className="like-page-list-wrapper">
                    <li className="unorder-list">
                        <div className="profile-thumb">
                            <Link to="#">
                                <figure className="profile-thumb-small">
                                    <img src={profileImg} alt="profile picture" />
                                </figure>
                            </Link>
                        </div>
                        <div className="unorder-list-info">
                            <h3 className="list-title"><Link to={userPage}>{username}</Link></h3>                            
                        </div>
                        <button className="like-button">
                            <img className="heart" src="images/icons/heart.png" alt="" />
                            <img className="heart-color" src="images/icons/heart-color.png" alt="" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FollowersBox
