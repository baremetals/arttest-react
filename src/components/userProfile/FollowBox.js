import React from 'react'
import { Link } from 'react-router-dom'

function FollowBox(props) {
    const { profileImg, username, userPage } = props
    return (
        <div className="card widget-item">
            <h4 className="widget-title profile-title">Follow suggestions</h4>
            <div className="widget-body">
                <div className="about-author">
                    <ul className="follow-list">
                        <li className="d-flex justify-content-start align-items-center mb-4">
                            <div className="follow-list-img">
                                <Link to={userPage}>
                                    <img src={profileImg} alt="" />
                                </Link>
                            </div>
                            <div className="follow-list-text align-self-end">
                                <Link to={userPage}>
                                    <div className="follow-list-title">{username}</div>
                                </Link>
                            </div>
                            <div className="profile-edit-panel text-center ml-auto">
                                <button className="follow-sug-btn">Follow</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        >
        <div class="show-more">
            <Link class="show-more-link" to="/explore">Show more</Link>
        </div>
    )
}

export default FollowBox
