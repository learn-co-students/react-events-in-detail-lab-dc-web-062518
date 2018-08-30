// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{

// constructor(props){
//   super(props)
//   // this.props.onReceiveCoordinates
//
//
// }

clickHandler = (e) => {
this.props.onReceiveCoordinates([e.clientX, e.clientY]);
}



render(){
  return(
    <button onClick={this.clickHandler} > Click Me </button>
      )
    }

}
