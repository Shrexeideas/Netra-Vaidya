import React from 'react'
import CaptureScreen from './CaptureScreen'
import ImageReviewScreen from './ImageReviewScreen'
import SymptomCheckScreen from './SymptomCheckScreen'
import './WireframeContainer.css'

const WireframeContainer = () => {
  return (
    <div className="wireframe-container">
      <h2 className="wireframe-title">Wireframes of the proposed solution :</h2>
      <div className="screens-container">
        <div className="screen-wrapper">
          <div className="screen-number">1</div>
          <CaptureScreen />
        </div>
        <div className="arrow">→</div>
        <div className="screen-wrapper">
          <div className="screen-number">2</div>
          <ImageReviewScreen />
        </div>
        <div className="arrow">→</div>
        <div className="screen-wrapper">
          <div className="screen-number">3</div>
          <SymptomCheckScreen />
        </div>
      </div>
    </div>
  )
}

export default WireframeContainer
