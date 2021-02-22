import React from 'react'
import { connect } from 'react-redux';



function AuthModal(props) {
  
    const {modalContent, style, close} = props
    
    return (
    
      <div className="site-modal" style={style}>
          <div className="modal-content">
              <div className="col right">
                  <span onClick={close} className="close">&times;</span>
              </div>
              <div className="">
                  {modalContent}
              </div>
          </div>
      </div>
    );
}

export default AuthModal