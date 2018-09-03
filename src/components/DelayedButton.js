import React from 'react'

class DelayedButton extends React.Component {

  clickHandler = (e) => {
     e.persist();
    setTimeout(() => {
     this.props.onDelayedClick(e);
   }, this.props.delay);
 }

render() {
  return(
    <div>
      <button onClick={this.clickHandler}>
        Delay
      </button>
    </div>

  )
}
}

export default DelayedButton
