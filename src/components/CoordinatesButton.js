import React from 'react'

export default class CoordinatesButton extends React.Component{

  getCoordinates = (e)=>{
    let arr = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(arr)
  }

  render(){
    return <button type="button" onClick={this.getCoordinates}></button>

  }
}
