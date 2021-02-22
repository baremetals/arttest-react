import React from 'react'
import { Link } from 'react-router-dom'

function ProfileNav() {
    return (
        <nav>
            <ul className="main-menu d-flex justify-content-between">
                <li className="active"><Link to="/profile">timeline</Link></li>
                <li><Link to="/about-user">about</Link></li>
                <li><Link to="/user-entries">entries</Link></li>
                <li><Link to="/user-following">Following</Link></li>
                <li><Link to="/user-posts">post</Link></li>
                 {/* <li class="d-inline-block d-md-none"><a href="profile.html">edit profile</a></li> */}
            </ul>
        </nav>
    )
}

export default ProfileNav
