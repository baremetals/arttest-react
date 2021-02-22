import React from 'react'
import { Link } from 'react-router-dom'

function ContestEntryBox(props) {

    const { fullName, usernameImg, postTime, entryTitle, EntryMedia, totalLikes, iGCount, tiktokCount, userPage } = props
    return (
           <div className="card">
                <div className="post-title d-flex align-items-center">
                    <div className="profile-thumb">
                        <Link to={userPage}>
                            <figure className="profile-thumb-middle">    
                                <img src={usernameImg} alt="profile picture" />    
                            </figure>
                        </Link>
                    </div>
                    <div className="posted-author">
                        <h6 className="author"><Link to={userPage}>{fullName}</Link></h6>
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
                </div>
                <div className="post-content">
                    <p className="post-desc">
                        {entryTitle}
                    </p>
                    <div className="post-thumb-gallery img-gallery">
                        <div className="row no-gutters">
                            <div className="col-8">
                                <figure className="post-thumb">
                                    <a className="gallery-selector" href="assets/images/post/post-large-2.jpg">
                                        <img src={EntryMedia} alt="post image" />
                                    </a>
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
                                <button className="post-comment post-icons d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.902" height="22.902"
                                          viewBox="0 0 22.902 22.902">
                                        <path id="Path_562" data-name="Path 562"
                                              d="M973.476,277H959.425A4.429,4.429,0,0,0,955,281.425v14.052a4.429,4.429,0,0,0,4.425,4.425h14.051a4.431,4.431,0,0,0,4.427-4.425V281.425A4.431,4.431,0,0,0,973.476,277Zm1.27,2.64.505,0v3.881l-3.868.013-.013-3.881ZM963.183,286.1a4.023,4.023,0,1,1-.763,2.35A4.029,4.029,0,0,1,963.183,286.1Zm12.489,9.376a2.2,2.2,0,0,1-2.2,2.195H959.425a2.2,2.2,0,0,1-2.195-2.195V286.1h3.419a6.263,6.263,0,1,0,11.6,0h3.421Z"
                                               transform="translate(-955 -277)" />
                                    </svg>
                                    <span>{iGCount}</span>
                                </button>
                            </li>
                            <li>
                                <button className="post-share post-icons d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20.028" height="22.902"
                                          viewBox="0 0 20.028 22.902">
                                        <path id="tik-tok"
                                            d="M19.357,5.031A4.365,4.365,0,0,1,15,.671.671.671,0,0,0,14.326,0H10.733a.671.671,0,0,0-.671.671V15.4A2.563,2.563,0,1,1,7.5,12.841a.671.671,0,0,0,.671-.671V8.576A.671.671,0,0,0,7.5,7.905,7.5,7.5,0,1,0,15,15.4V8.882a9.23,9.23,0,0,0,4.36,1.084.671.671,0,0,0,.671-.671V5.7A.671.671,0,0,0,19.357,5.031Zm0,0" />
                                    </svg>
                                    <span>{tiktokCount}</span>
                                </button>
                            </li>
                            <li>
                                <button className="post-share post-icons d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19.92"
                                          viewBox="0 0 18 19.92">
                                        <path
                                           d="M18,16.08a2.912,2.912,0,0,0-1.96.77L8.91,12.7A3.274,3.274,0,0,0,9,12a3.274,3.274,0,0,0-.09-.7l7.05-4.11A2.993,2.993,0,1,0,15,5a3.274,3.274,0,0,0,.09.7L8.04,9.81a3,3,0,1,0,0,4.38l7.12,4.16a2.821,2.821,0,0,0-.08.65A2.92,2.92,0,1,0,18,16.08Z"
                                           transform="translate(-3 -2)" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        
    )
}

export default ContestEntryBox
