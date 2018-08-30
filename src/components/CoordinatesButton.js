// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

  render() {
    let func = this.props.onReceiveCoordinates
    return(<button onClick={(e) => func([e.clientX, e.clientY])} />)
  }
}
