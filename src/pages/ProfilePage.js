import React from 'react'
import { Link } from 'react-router-dom'
import ProfileBar from  'components/userProfile/ProfileBar'
import ProfileNav from 'components/userProfile/ProfileNav'
import UserInfo from 'components/userProfile/UserInfo'
import FollowBox from 'components/userProfile/FollowBox'
import TopArtistBox from 'components/userProfile/TopArtistBox'
import ContestEntryBox from 'components/userProfile/ContestEntryBox'
import EventBox from 'components/userProfile/EventBox'
import AdvertBox from 'components/AdvertBox'
import FollowersBox from '../components/userProfile/FollowersBox'
import BlogPostBox from 'components/userProfile/BlogPostBox'
import ContestBox from 'components/userProfile/ContestBox'
import profilePic from 'assets/images/profile-image-placeholder.jpg'
import 'components/userProfile/profilePage.css'


import bk from 'assets/images/slide2.jpg'


function ProfilePage() {
    return (
        <main>
            <div className="main-wrapper">
                <div className="profile-banner-large bg-img position-relative"  
                    src={bk}              
                    data-bg="images/slide2.jpg">
                    <div className="profile-share-btn position-absolute w-100">
                        <div className="container mx-auto d-flex justify-content-end">
                            <button className="ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41">
                                    <g id="Group_938" data-name="Group 938" transform="translate(-1162 -278)">
                                    <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(1162 278)" fill="none"
                                         stroke="#fff" stroke-width="1">
                                        <circle cx="20.5" cy="20.5" r="20.5" stroke="none" />
                                        <circle cx="20.5" cy="20.5" r="20" fill="none" />
                                    </g>
                                    <path id="ic_share_24px"
                                           d="M18,16.08a2.912,2.912,0,0,0-1.96.77L8.91,12.7A3.274,3.274,0,0,0,9,12a3.274,3.274,0,0,0-.09-.7l7.05-4.11A2.993,2.993,0,1,0,15,5a3.274,3.274,0,0,0,.09.7L8.04,9.81a3,3,0,1,0,0,4.38l7.12,4.16a2.821,2.821,0,0,0-.08.65A2.92,2.92,0,1,0,18,16.08Z"
                                            transform="translate(1170 287)" fill="#fff" 
                                        />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="profile-overflow-block position-absolute w-100 d-none d-md-block">
                        <ProfileBar />
                    </div>
                </div>
                <div className="profile-menu-area bg-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3">
                                <div className="profile-picture-box profile-picture-box-main rounded-circle">
                                    <figure className="profile-picture">
                                        <Link to="/profile">
                                            <div className="rounded-circle overflow-hidden">
                                                <img src={profilePic} alt="profile" />
                                            </div>
                                        </Link>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="profile-menu-wrapper">
                                    <div className="main-menu-inner header-top-navigation">
                                        <ProfileNav />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 d-none d-md-block">
                                <div className="profile-edit-panel">
                                    <button className="edit-btn">edit profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                 <div className="row">
                    <div className="col-lg-3 order-2 order-lg-1">
                        <aside className="widget-area profile-sidebar">
                            <UserInfo />
                            <div className="widget-wrap">
                                <FollowBox />        
                            </div>
                            <div className="widget-wrap">
                                <TopArtistBox />        
                            </div>
                        </aside>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <ContestEntryBox />
                        <div className="card">
                            <BlogPostBox />
                        </div>
                            <EventBox />
                        <div className="col-lg-3 order-3">
                            <aside className="widget-area">
                                <div className="widget-wrap">
                                    <ContestBox/ >
                                    <AdvertBox />
                                    <FollowersBox />
                                </div>
                            </aside>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
        </main>            
    )
}

export default ProfilePage
