import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_MENU_ITEMS } from '../graphql/queries'; // Corrected import path

function Menu() {
  const { loading, error, data } = useQuery(GET_MENU_ITEMS);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    if (data) {
      setMenuItems(data.getMenuItems); // Adjust according to your actual data structure
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Menu Page</h2>
      <div>
        <h3>Dishes:</h3>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
