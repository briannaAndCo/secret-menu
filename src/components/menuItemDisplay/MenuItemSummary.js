import React from 'react';
import './MenuItemSummary.css'

class MenuItemSummary extends React.Component {

  render() {
    const item = this.props.item;
    return (
      <div className="menu-item-header sub-component">
        <img src={item.logo} className="menu-item-restaurant-logo" alt={item.restaurantName} />
        <div className="menu-item-name">{item.name}</div>
        <div className="clear-float"/>
        <div className="menu-item-description">{item.description}</div>
      </div>
    )}

}

export default MenuItemSummary;
