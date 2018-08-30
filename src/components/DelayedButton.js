import React, {Component} from 'react'

export default class DelayedButton extends Component{
  constructor(props){
    super(props)
  }

  time = (event)=>{
    event.persist()
    setTimeout(()=>this.props.onDelayedClick(event), this.props.delay)
  }

  render(){
    return(

      <button type="button" onClick={this.time}></button>
    )
  }
}
