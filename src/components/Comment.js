import React, { Fragment } from 'react'
import './share-post.css'

function Comment() {
    return (
        <Fragment>
            <div class="col-lg-6 order-1 order-lg-2">
                {/* share box start */}
                <div class="card card-small">
                    <div class="share-box-inner">
                        {/* profile picture end  */}
                        <div class="profile-thumb">
                            <a href="#">
                                <figure class="profile-thumb-middle">
                                    <img src="assets/images/profile/profile-small-37.jpg" alt="profile picture" />
                                </figure>
                            </a>
                        </div>
                        {/* profile picture end */}

                        {/* share content box start */}
                        <div class="share-content-box w-100">
                            <form class="share-text-box">
                                <textarea name="share" class="share-text-field" aria-disabled="true" placeholder="Say Something" data-toggle="modal" data-target="#textbox" id="email"></textarea>
                                <button class="btn-share" type="submit">share</button>
                            </form>
                        </div>
                        {/* share content box end */}
                        {/* Modal start */}
                        <div class="modal fade" id="textbox" aria-labelledby="textbox">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Share Your Mood</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body custom-scroll">
                                        <textarea name="share" class="share-field-big custom-scroll" placeholder="Say Something"></textarea>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="post-share-btn" data-dismiss="modal">cancel</button>
                                        <button type="button" class="post-share-btn">post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Modal end */}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Comment