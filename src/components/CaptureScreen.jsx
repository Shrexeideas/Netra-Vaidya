import React from 'react'
import './CaptureScreen.css'

const CaptureScreen = () => {
  return (
    <div className="phone-frame">
      <div className="phone-header">
        <div className="app-logo">
          <div className="logo-icon"></div>
          <span className="app-name">NETRA-VAIDYA</span>
        </div>
        <div className="menu-icon">☰</div>
      </div>
      
      <div className="capture-area">
        <div className="camera-viewfinder">
          <div className="crosshair-circle"></div>
        </div>
      </div>
      
      <div className="instruction-text">
        <p className="main-instruction">Center the eye or patch of skin</p>
        <p className="sub-instruction">Hold steady for analysis</p>
      </div>
      
      <div className="capture-button-container">
        <button className="capture-button">
          <div className="capture-icon"></div>
        </button>
        <p className="capture-label">TAP TO CAPTURE</p>
      </div>
    </div>
  )
}

export default CaptureScreen
