import React from 'react'
import { Link } from 'react-router-dom'

function BlogPostBox(props) {
    const { author, authorImg, postTime, profilePage, postContent, postMedia, totalLikes} = props

    return (
        <div className="post-title d-flex align-items-center">
            <div className="profile-thumb">
                <Link to={profilePage}>
                    <figure className="profile-thumb-middle">
                        <img src={authorImg} alt="profile picture" />
                    </figure>
                </Link>
            </div>
            <div className="posted-author">
                <h6 className="author"><Link to={profilePage}>{author}</Link></h6>
                <span className="post-time">{postTime}</span>
            </div>
            <div className="post-settings-bar">
                <span></span>
                <span></span>
                <span></span>
                <div className="post-settings arrow-shape">
                    <ul>
                        <li><button>copy link to adda</button></li>
                        <li><button>edit post</button></li>
                        <li><button>embed adda</button></li>
                    </ul>
                </div>
            </div>
            <div className="post-content">
                <p className="post-desc">
                    {postContent}
                </p>
                <div className="plyr__video-embed plyr-video">
                    <iframe src="https://www.youtube.com/embed/WeA7edXsU40"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen >                                
                    </iframe>
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
                                <span>41</span>
                        </button>
                    </li>
                    <li>
                        <button className="post-share">
                            <i className="bi bi-share"></i>
                            <span>07</span>
                        </button>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogPostBox
