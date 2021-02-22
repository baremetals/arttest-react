import React from 'react'
import { Link } from 'react-router-dom'

function EventBox(props) {

    const { author, authorImg, authorPage, postTime, postMedia, description, eventMedia, totalLikes, commentCount, eventPage} = props
    return (
        
            <div className="card">
                <div className="post-title d-flex align-items-center">
                    <div className="profile-thumb">
                        <Link to={eventPage}>
                            <figure className="profile-thumb-middle">
                                <img src={authorImg} alt="profile picture" />
                            </figure>
                        </Link>
                    </div>
                    <div className="posted-author">
                        <h6 className="author"><Link to={authorPage}>{author}</Link></h6>
                        <span className="post-time">{postTime}</span>
                    </div>
                    <div className="post-settings-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="post-settings arrow-shape">
                            <ul>
                                <li><button>copy link to adda</button></li>
                                <li><button>remove post</button></li>
                                <li><button>embed adda</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <p className="post-desc">
                        {description}
                    </p>
                    <div className="post-thumb-gallery img-gallery">
                        <div className="row no-gutters">
                            <div className="col-6">
                                <figure className="post-thumb">
                                    <Link className="gallery-selector" to={eventMedia}>
                                        <img src={eventMedia} alt="post image" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="col-6">
                                <figure className="post-thumb">
                                    <Link className="gallery-selector" to={postMedia}>
                                        <img src={postMedia} alt="post image" />
                                    </Link>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="post-meta">
                        <button className="post-meta-like">
                            <i className="bi bi-heart-beat"></i>
                            <span>You and {totalLikes} people like this</span>
                            <strong>{totalLikes}</strong>
                        </button>
                        <ul className="comment-share-meta">
                            <li>
                                <button className="post-comment">
                                    <i className="bi bi-chat-bubble"></i>
                                    <span>{commentCount}</span>
                                </button>
                            </li>
                            <li>
                                <button className="post-share">
                                    <i className="bi bi-share"></i>
                                    <span></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        
    )
}

export default EventBox
