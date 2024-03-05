// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  render() {
      const startTime = false
      // const startOrPauseAlt = startTime ? 'pause icon' : 'play icon'
      // const startOrPauseUrl = startTime ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png' : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="clock-container">
          <div className="timer-container">
            <p className="time">25:00</p>
            <p className="timer-status">Paused</p>
          </div>
          <div className="timer-operations-container">
            <div className="start-reset">
              <div className="start-cont">
                <button type="button" className="timer-buttons">
                    <img src='https://assets.ccbp.in/frontend/react-js/pause-icon-img.png' alt='pause icon' className="operations-btn" />
                </button>
                <h1 className="btn-title">Start</h1>
              </div>
              <div className="reset-cont">
                <button type="button" className="timer-buttons">
                    <img src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" alt="reset icon" className="operations-btn" />
                </button>
                <h1 className="btn-title">Start</h1>
              </div>
            </div>
            <p className="set-timer-limit-para">Set Timer Limit</p>
            <div className="inc-dec-button-cont">
              <p className="set-time-number">25</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
