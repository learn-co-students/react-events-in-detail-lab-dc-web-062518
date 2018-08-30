import React from 'react'

export default class CoordinatesButton extends React.Component {

  newCoordinates = (e) => {
    let newArr = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(newArr)
  }

  render() {
    return (
      <button onClick= {this.newCoordinates}></button>
    )
  }
}
