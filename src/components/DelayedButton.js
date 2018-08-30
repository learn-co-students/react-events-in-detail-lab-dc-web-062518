// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{

  // constructor(){
  //   super()
  //
  // }
  clickHandler = (e) => {
    e.persist();
  setTimeout(()=> this.props.onDelayedClick(e), this.props.delay)
  }


  render(){
    return(
      <button onClick={this.clickHandler} > Click Me Instead </button>
        )
      }
  }
