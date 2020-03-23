import React from 'react'
import "./Ingredients.css"

class Ingredients extends React.Component {

  render() {
    const ingredients = this.props.ingredients;
    return (
      <div className="ingredients sub-component" >
        <label className="ingredients-label">INGREDIENTS: </label>
        <div className="ingredients-text">{ingredients.text.toUpperCase()}</div>
        <label className="ingredients-warning-label">CONTAINS: </label>
        <div className="ingredients-warning-text">{ingredients.warning.toUpperCase()}</div>
      </div>)
  }

}

export default Ingredients;
