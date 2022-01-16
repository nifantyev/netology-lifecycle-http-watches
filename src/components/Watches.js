import React from 'react';
import PropTypes from 'prop-types';
import CityModel from '../models/CityModel';

class Watches extends React.Component {
  state = {
    time: null,
  };

  tick = () => {
    const {
      city: { offset },
    } = this.props;
    let now = new Date();
    let currentOffset = now.getTimezoneOffset() / 60;
    now.setHours(now.getHours() - currentOffset + offset);
    this.setState({
      time: {
        hours: now.getHours() % 12,
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      },
    });
  };

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
    this.tick();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleCloseClick = (event) => {
    event.preventDefault();
    const {
      city: { id },
      onRemove,
    } = this.props;
    onRemove(id);
  };

  render() {
    const {
      city: { city },
    } = this.props;
    let hoursAngle = 0,
      minutesAngle = 0,
      secondsAngle = 0;
    if (this.state.time) {
      const {
        time: { hours, minutes, seconds },
      } = this.state;
      secondsAngle = seconds * (360 / 60) + 180;
      minutesAngle = minutes * (360 / 60) + (seconds / 60) * (360 / 60) + 180;
      hoursAngle = hours * (360 / 12) + (minutes / 60) * (360 / 12);
    }

    return (
      <div className="watches">
        <div className="city">{city}</div>
        <a className="close" href="#/" onClick={this.handleCloseClick}>
          X
        </a>
        <div className="circle">
          <div
            className="hand hour"
            style={{ transform: `rotate(${hoursAngle}deg)` }}
          ></div>
          <div
            className="hand minute"
            style={{ transform: `rotate(${minutesAngle}deg)` }}
          ></div>
          <div
            className="hand second"
            style={{ transform: `rotate(${secondsAngle}deg)` }}
          ></div>
        </div>
      </div>
    );
  }
}

Watches.propTypes = {
  city: PropTypes.instanceOf(CityModel).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Watches;
