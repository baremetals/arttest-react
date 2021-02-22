import React from 'react'
import { Link } from 'react-router-dom'

function ContestBox(props) {

    const { contestTitle, category, contestPage, votePage } = props
    return (
        <>
            <div className="card widget-item">
                <h4 className="widget-title profile-title">Live Contest</h4>
                <div className="widget-body">
                    <div className="about-author">
                        <ul className="follow-list">
                            <li className="d-flex justify-content-start align-items-center mb-4">
                                <div className="follow-list-text align-self-end">
                                    <div className="follow-list-subtitle">{category}</div>
                                    <div className="follow-list-title"><Link to={contestPage}>{contestTitle}</Link></div>
                                </div>
                                <div className="profile-edit-panel text-center ml-auto">
                                    <Link to={votePage}>
                                        <button className="follow-sug-btn vote-btn">Vote</button>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="show-more">
                <Link className="show-more-link" to="/contests">Show All Live Contest</Link>
            </div>

        </>
    )
}

export default ContestBox
