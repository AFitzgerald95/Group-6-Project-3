import React from 'react';

function Menu() {
  return (
    <div>
      <h2>Menu Page</h2>
      <div>
        <h3>Dishes:</h3>
        <ul>
          <li>1. Spaghetti Carbonara</li>
          <p>{item.description}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <li>2. Grilled Salmon</li>
          <p>{item.description}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <li>3. Margherita Pizza</li>
          <p>{item.description}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <li>4. Chicken Alfredo</li>
          <p>{item.description}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <li>5. Caesar Salad</li>
          <p>{item.description}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
