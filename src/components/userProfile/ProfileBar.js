import React from 'react'
import { Link } from 'react-router-dom'

function ProfileBar(props) {
    const { fullName, entriesCount, followersCount, followingCount} = props
    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <div>
                    <div
                        className="text-center h-100 d-flex align-items-center justify-content-center justify-content-md-start">
                        <div className="profile-menu-username font-weight-bold">{fullName}</div>
                    </div>
                </div>
                <div>
                    <div
                        className="d-flex align-items-center justify-content-center justify-content-md-end h-100">
                        <div className="profile-menu-counters">
                            <div className="d-flex flex-column align-items-center">
                                <div className="profile-menu-counters-name font-weight-bold">Entries</div>
                                <div className="profile-menu-counters-score font-weight-bold">{entriesCount}</div>
                            </div>
                        </div>
                        <div className="profile-menu-counters">
                            <div className="d-flex flex-column align-items-center">
                                <div className="profile-menu-counters-name font-weight-bold">Following</div>
                                <div className="profile-menu-counters-score font-weight-bold">{followingCount}</div>
                            </div>
                        </div>
                        <div className="profile-menu-counters">
                            <div className="d-flex flex-column align-items-center">
                                <div className="profile-menu-counters-name font-weight-bold">Followers</div>
                                <div className="profile-menu-counters-score font-weight-bold">{followersCount}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBar
