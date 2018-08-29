// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

  clickHandler = (event) =>{
    let x = event.clientX
    let y = event.clientY
    let mouseCoordinatesArray = [x, y]
    // console.log(mouseCoordinatesArray);
    this.props.onReceiveCoordinates(mouseCoordinatesArray)
  }

  render(){
    return(
      <button
        onClick={this.clickHandler}>CLICK FOR MOUSE COORDINATES!</button>
    )
  }
}
