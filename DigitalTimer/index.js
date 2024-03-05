// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    startTime: false,
    minutes: 25,
    seconds: 0,
    setTimer: 25,
  }

  onStartTimer = () => {
    const {startTime} = this.state

    if (startTime === true) {
      this.setState(prevState => ({
        minutes: prevState.minutes - 1,
      }))
      const secondsID = setInterval(this.onStartSeconds, 1000)
      const minutesID = setInterval(this.onStartMinutes, 60000)
    } else {
      clearInterval(this.secondsID)
      clearInterval(this.minutesID)
    }
  }

  onStartSeconds = () => {
    const {seconds} = this.state
    this.state.seconds = 59
    if (seconds <= 0) {
      this.setState({seconds: 59})
    } else {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1,
      }))
    }
  }

  onStartMinutes = () => {
    const {minutes} = this.state
    if (minutes >= 0) {
      this.setState(prevState => ({
        minutes: prevState.minutes - 1,
      }))
    } else {
      this.setState({
        minutes: 25,
        seconds: 0,
      })
    }
  }

  onDecrementMinutes = () => {
    this.setState(prevState => ({
      setTimer: prevState.setTimer - 1,
      minutes: prevState.minutes - 1,
    }))
  }

  onIncrementMinutes = () => {
    this.setState(prevState => ({
      setTimer: prevState.setTimer + 1,
      minutes: prevState.minutes + 1,
    }))
  }

  onClickedStartOrPause = () => {
    this.setState(prevState => ({
      startTime: !prevState.startTime,
    }))
  }

  onClickedResetButton = () => {
    this.setState(prevState => ({
      startTime: !prevState.startTime,
    }))
    this.setState({
      minutes: 25,
      seconds: 0,
    })
  }

  render() {
    const {startTime, minutes, seconds, setTimer} = this.state
    const secondsFormatter = seconds > 9 ? seconds : `0${seconds}`
    const pauseOrRunningStatus = startTime ? 'Running' : 'Paused'
    const startOrPauseAlt = startTime ? 'pause icon' : 'play icon'
    const startOrPauseText = startTime ? 'Pause' : 'Start'
    const startOrPauseUrl = startTime
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="clock-container">
          <div className="timer-container">
            <div className="white-card-timer">
              <p className="time">
                {minutes}:{secondsFormatter}
              </p>
              <p className="timer-status">{pauseOrRunningStatus}</p>
            </div>
          </div>
          <div className="timer-operations-container">
            <div className="start-reset">
              <div className="start-cont">
                <button
                  type="button"
                  className="timer-buttons"
                  onClick={this.onClickedStartOrPause}
                >
                  <img
                    src={startOrPauseUrl}
                    alt={startOrPauseAlt}
                    className="operations-btn"
                    onClick={this.onStartTimer}
                  />
                </button>
                <h1 className="btn-title">{startOrPauseText}</h1>
              </div>
              <div className="reset-cont">
                <button type="button" className="timer-buttons">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="operations-btn"
                    onClick={this.onClickedResetButton}
                  />
                </button>
                <h1 className="btn-title">Reset</h1>
              </div>
            </div>
            <p className="set-timer-limit-para">Set Timer Limit</p>
            <div className="inc-dec-button-cont">
              <button
                type="button"
                className="inc-dec-btn"
                onClick={this.onDecrementMinutes}
              >
                -
              </button>
              <p className="set-time-number">{setTimer}</p>
              <button
                type="button"
                className="inc-dec-btn"
                onClick={this.onIncrementMinutes}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
