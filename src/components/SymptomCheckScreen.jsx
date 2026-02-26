import React, { useState } from 'react'
import './SymptomCheckScreen.css'

const SymptomCheckScreen = () => {
  const [question1Answer, setQuestion1Answer] = useState('')
  const [question2Answer, setQuestion2Answer] = useState('')

  return (
    <div className="phone-frame">
      <div className="phone-header">
        <button className="back-button">‹</button>
        <h3 className="screen-title">SYMPTOM CHECK</h3>
      </div>
      
      <div className="questions-container">
        <div className="question-block">
          <p className="question-number">QUESTION 1 OF 3</p>
          <p className="question-text">
            Does the patient experience any pain or itching in the affected area?
          </p>
          <div className="answer-buttons">
            <button 
              className={`answer-button ${question1Answer === 'yes' ? 'selected' : ''}`}
              onClick={() => setQuestion1Answer('yes')}
            >
              YES
            </button>
            <button 
              className={`answer-button ${question1Answer === 'no' ? 'selected' : ''}`}
              onClick={() => setQuestion1Answer('no')}
            >
              NO
            </button>
          </div>
        </div>

        <div className="question-block">
          <p className="question-number">QUESTION 2 OF 3</p>
          <p className="question-text">
            Has the vision been blurry for more than 3 months?
          </p>
          <div className="answer-buttons">
            <button 
              className={`answer-button ${question2Answer === 'yes' ? 'selected' : ''}`}
              onClick={() => setQuestion2Answer('yes')}
            >
              YES
            </button>
            <button 
              className={`answer-button ${question2Answer === 'no' ? 'selected' : ''}`}
              onClick={() => setQuestion2Answer('no')}
            >
              NO
            </button>
          </div>
        </div>
      </div>
      
      <div className="analyze-section">
        <button className="analyze-button">
          ANALYZE RESULTS →
        </button>
        <div className="progress-indicator">
          <div className="progress-dot active"></div>
          <div className="progress-dot"></div>
          <div className="progress-dot"></div>
        </div>
      </div>
    </div>
  )
}

export default SymptomCheckScreen
