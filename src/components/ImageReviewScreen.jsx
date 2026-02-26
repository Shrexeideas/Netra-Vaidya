import React from 'react'
import './ImageReviewScreen.css'

const ImageReviewScreen = () => {
  return (
    <div className="phone-frame">
      <div className="phone-header">
        <button className="back-button">‹</button>
        <h3 className="screen-title">IMAGE REVIEW</h3>
      </div>
      
      <div className="image-preview">
        <div className="preview-placeholder"></div>
      </div>
      
      <div className="review-question">
        <p className="question-text">Is the image clear?</p>
        <p className="question-subtitle">
          Ensure there are no blur or glare. If the image is blurry, please retake it.
        </p>
      </div>
      
      <div className="action-buttons">
        <button className="continue-button">
          + CONTINUE TO QUESTIONS
        </button>
        <button className="retake-button">
          RETAKE PHOTO
        </button>
      </div>
    </div>
  )
}

export default ImageReviewScreen
