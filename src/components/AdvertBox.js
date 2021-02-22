import React from 'react'
import cardMedia from 'assets/images/dopecar.jpg'

function AdvertBox() {
    return (
        <div classNames="card widget-item">
            <h4 classNames="widget-title">AdvertiSement</h4>
            <div classNames="widget-body">
                <div classNames="add-thumb">
                    <a href="#">
                        <img src={cardMedia} alt="advertisement" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AdvertBox
