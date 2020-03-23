import React from 'react';
import './AddMenuItem.css'

class AddMenuItem extends React.Component {

  render() {

    return (
      <form className="sub-component">
        <div>
          <label className="add-menu-item-header">Add Secret Menu Item </label>
        </div>
        <div className="display-flex">
          <label className="add-menu-item-label">Restuarant Name </label>
          <input type="text" name="resturantName" className="add-menu-item-text-input" />
        </div>
        <div className="display-flex">
          <label className="add-menu-item-label">Secret Menu </label>
          <input type="text" name="menuItemName" className="add-menu-item-text-input"/>
        </div>
        <div className="display-flex">
          <label className="add-menu-item-label">Description </label>
          <textarea name="description" className="add-menu-item-textarea"/>
        </div>
        <div className="display-flex">
          <label className="add-menu-item-label">How To Order </label>
          <textarea name="orderInstructions" className="add-menu-item-textarea"/>
        </div>
        <div className="display-flex">
          <label className="add-menu-item-label">Ingredients </label>
          <textarea name="ingredients" className="add-menu-item-textarea"/>
        </div>
        <div className="display-flex">
          <label className="add-menu-item-label">Warning </label>
          <textarea name="warning" className="add-menu-item-textarea"/>
        </div>
        <div className="display-flex">
          <input type="submit" value="Save"/>
        </div>
      </form>
    )}

}

export default AddMenuItem;
