import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor() {
    super()
  }

  handleClick = (event) => {
    const x = event.clientX
    const y = event.clientY
    this.props.onReceiveCoordinates([x,y])
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Coordinates</button>
      </div>
    )
  }
}
