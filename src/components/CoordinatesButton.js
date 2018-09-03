import React from 'react'

class CoordinatesButton extends React.Component {

  createArray = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

render() {
  return(
    <div>
      <button onClick={this.createArray}>
        Coordinates
      </button>
    </div>
  )
}
}

export default CoordinatesButton
