import React from 'react'
import { Link } from 'react-router-dom'

function UserInfo(props) {

    const { fullName, location, website, membership, professsion, bio } = props

    return (
        <div className="card widget-item">
            <h4 className="widget-title profile-title profilebox">{fullName}</h4>
            <div className="widget-body">
                <div className="about-author">
                    <ul className="author-into-list">
                        <li><Link to={location}><i className="author-icon ui-links">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13.619" height="24.001" viewBox="0 0 13.619 24.001">
                                <g id="Group_986" data-name="Group 986" transform="translate(-102 -629.999)">
                                    <path id="Path_554" data-name="Path 554" d="M401.131,270.438a6.756,6.756,0,0,0-7.478-5.337,6.626,6.626,0,0,0-5.483,4.25,7.057,7.057,0,0,0-.441,3.509,8.061,8.061,0,0,0,.727,2.664c.389.824.773,1.649,1.145,2.484q1.765,3.966,3.513,7.939c.451,1.025.907,2.047,1.371,3.095.037-.071.064-.118.087-.167q1.223-2.777,2.447-5.557,1.107-2.51,2.216-5.023c.351-.8.66-1.617,1.071-2.383A7.915,7.915,0,0,0,401.131,270.438Zm-2,4.842c-.317.591-.571,1.193-.816,1.775-.1.234-.2.468-.3.7l-3.527,8-1.025-2.319q-1.318-2.988-2.644-5.972c-.375-.843-.763-1.677-1.157-2.51a6.686,6.686,0,0,1-.605-2.226,5.678,5.678,0,0,1,.34-2.854,5.311,5.311,0,0,1,4.435-3.452,5.374,5.374,0,0,1,5.993,4.28A6.565,6.565,0,0,1,399.13,275.281Z" transform="translate(-285.682 364.958)" fill="#414042" fill-rule="evenodd" />
                                    <path id="Path_555" data-name="Path 555" d="M396.625,271.658a2.542,2.542,0,1,0,2.541,2.541A2.542,2.542,0,0,0,396.625,271.658Zm0,3.75a1.208,1.208,0,1,1,1.208-1.209A1.21,1.21,0,0,1,396.625,275.408Z" transform="translate(-287.816 362.752)" fill="#414042" fill-rule="evenodd" />
                                </g>
                            </svg>
                        </i>{location}</Link></li>
                        <li><Link to={website}><i className="author-icon ui-links">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                <g id="Group_987" data-name="Group 987" transform="translate(-98 -660)">
                                    <path id="Path_556" data-name="Path 556" d="M334.119,182.64a1.762,1.762,0,0,1-.1,1.973l-4.871,4.871a1.319,1.319,0,0,1-.944.343,3.038,3.038,0,0,1-2.05-.953,3.192,3.192,0,0,1-.936-1.78,1.457,1.457,0,0,1,.325-1.214l4.871-4.871a1.319,1.319,0,0,1,.944-.343,2.536,2.536,0,0,1,1.032.243l.9-.9a3.075,3.075,0,0,0-3.739.134l-4.871,4.871c-1.136,1.135-.862,3.25.61,4.722s3.588,1.747,4.723.61l4.871-4.87a3.077,3.077,0,0,0,.134-3.74Z" transform="translate(-225.981 490.951)" fill="#414042" />
                                    <path id="Path_557" data-name="Path 557" d="M351.289,163.742c-1.473-1.473-3.587-1.746-4.723-.61L341.7,168a3.075,3.075,0,0,0-.134,3.739l.9-.9a2.73,2.73,0,0,1-.232-.756,1.46,1.46,0,0,1,.326-1.214L347.43,164a1.318,1.318,0,0,1,.944-.343,3.043,3.043,0,0,1,2.05.953,3.192,3.192,0,0,1,.936,1.78,1.459,1.459,0,0,1-.326,1.214l-4.87,4.871a1.324,1.324,0,0,1-.945.343,2.531,2.531,0,0,1-1.032-.243l-.9.9a3.075,3.075,0,0,0,3.739-.134l4.87-4.871C353.035,167.328,352.761,165.214,351.289,163.742Z" transform="translate(-232.6 497.57)" fill="#414042" />
                                    <path id="Path_558" data-name="Path 558" d="M338.488,181.26a.61.61,0,0,1-.864,0h0a.612.612,0,0,1,0-.864l4.321-4.322a.611.611,0,0,1,.865,0h0a.612.612,0,0,1,0,.864Z" transform="translate(-231.217 492.333)" fill="#414042" />
                                </g>
                            </svg>
                        </i>{website}</Link></li>
                        <li><a href="#"><i className="author-icon ui-links">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.881" height="21" viewBox="0 0 22.881 21">
                                <g id="Group_988" data-name="Group 988" transform="translate(-98 -692)">
                                    <rect id="Rectangle_84" data-name="Rectangle 84" width="22.245" height="1.271" transform="translate(98.318 699.468)" fill="#414042" />
                                    <path id="Path_559" data-name="Path 559" d="M789,166.951h-21.61a.636.636,0,0,0-.636.636v17.8a.636.636,0,0,0,.636.636H789a.635.635,0,0,0,.636-.636v-17.8A.635.635,0,0,0,789,166.951Zm-.636,17.8H768.021V168.222h20.338Z" transform="translate(-668.75 526.982)" fill="#414042" />
                                    <path id="Path_560" data-name="Path 560" d="M778.386,163.91a.635.635,0,0,0-.636.636v3.813a.636.636,0,1,0,1.271,0v-3.813A.635.635,0,0,0,778.386,163.91Z" transform="translate(-672.759 528.09)" fill="#414042" />
                                    <path id="Path_561" data-name="Path 561" d="M790.386,163.91a.635.635,0,0,0-.636.636v3.813a.636.636,0,1,0,1.271,0v-3.813A.635.635,0,0,0,790.386,163.91Z" transform="translate(-677.132 528.09)" fill="#414042" />
                                    <rect id="Rectangle_85" data-name="Rectangle 85" width="2.7" height="2.699" transform="translate(102.41 702.434)" fill="#414042" />
                                    <rect id="Rectangle_86" data-name="Rectangle 86" width="2.7" height="2.699" transform="translate(108.09 702.434)" fill="#414042" />
                                    <rect id="Rectangle_87" data-name="Rectangle 87" width="2.7" height="2.699" transform="translate(113.771 702.434)" fill="#414042" />
                                    <rect id="Rectangle_88" data-name="Rectangle 88" width="2.7" height="2.7" transform="translate(102.41 707.35)" fill="#414042" />
                                    <rect id="Rectangle_89" data-name="Rectangle 89" width="2.7" height="2.7" transform="translate(108.09 707.35)" fill="#414042" />
                                    <rect id="Rectangle_90" data-name="Rectangle 90" width="2.7" height="2.7" transform="translate(113.771 707.35)" fill="#414042" />
                                </g>
                            </svg>
                        </i>joined {membership}</a></li>
                    </ul>
                    <p className="mt-3">{professsion}</p>
                    <p className="mt-3">{bio}</p>

                    <div className="profile-edit-panel text-center">
                        <button className="follow-btn">Follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo
