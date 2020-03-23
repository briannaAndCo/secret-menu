import React from 'react'
import './MenuItem.css'
import MenuItemSummary from './MenuItemSummary.js'
import OrderInstructions from './OrderInstructions.js'
import Ingredients from './Ingredients.js'

class MenuItem extends React.Component {

  render() {
    const menuItem = this.props.menuItem;

    return (
      <div className="menu-item">
        <MenuItemSummary item={menuItem.item}/>
        <OrderInstructions instructions={menuItem.instructions}/>
        <Ingredients ingredients={menuItem.ingredients} />
      </div>
    );
  }

}

export default MenuItem;
