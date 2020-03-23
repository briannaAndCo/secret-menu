import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuItem from './components/menuItemDisplay/MenuItem.js'
import AddMenuItem from './components/menuItemAdd/AddMenuItem.js'

function App() {

  const animalFries = {
    logo: logo,
    restaurantName: "In-N-OUT",
    name: "Animal Fries",
    description: "Fresh fries with melted american cheese, grilled onions and In-N-Out special sauce."
  };

  const instructions = { text: "Ask for Animal Fries at the register."}

  const friesIngredients = {
    text: "potatoes, peanut oil, olive oil, onions, american cheese ",
    warning: "peanut oil, dairy"
  }

  const menuItem = {
    item: animalFries,
    instructions: instructions,
    ingredients: friesIngredients
  }

  return (
    <div>
      <MenuItem menuItem={menuItem}/>
      <AddMenuItem/>
    </div>
  );
}

export default App;
