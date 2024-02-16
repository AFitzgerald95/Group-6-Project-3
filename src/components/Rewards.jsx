import React from 'react';

function Rewards() {
  // Fake rewards data
  const rewardsData = [
    { dish: 'Spaghetti Carbonara', points: 10 },
    { dish: 'Grilled Salmon', points: 15 },
    { dish: 'Margherita Pizza', points: 12 },
    { dish: 'Chicken Alfredo', points: 14 },
    { dish: 'Caesar Salad', points: 8 }
  ];

  return (
    <div>
      <h2>Rewards Page</h2>
      <div>
        <h3>Rewards Earned:</h3>
        <ul>
          {rewardsData.map((item, index) => (
            <li key={index}>
              {item.dish}: {item.points} points
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rewards;