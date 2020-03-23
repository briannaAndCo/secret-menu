import React from 'react'
import "./OrderInstructions.css"

class OrderInstructions extends React.Component {

  render() {
    const instructions = this.props.instructions;
    return (
      <div className="order-instructions sub-component" >
        <label className="order-instructions-label">How To Order: </label>
        <div className="order-instructions-text">{instructions.text}</div>
      </div>)
  }
}

export default OrderInstructions;
