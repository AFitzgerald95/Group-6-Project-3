import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_REWARDS } from '../graphql/queries'; // Corrected import path

function Rewards() {
  const { loading, error, data } = useQuery(GET_USER_REWARDS);
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    if (data) {
      setRewards(data.getUserRewards); // Adjust based on your data structure
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching rewards :(</p>;

  return (
    <div>
      <h2>Rewards Page</h2>
      <div>
        <h3>Rewards Earned:</h3>
        <ul>
          {rewards.map((reward, index) => (
            <li key={index}>{reward.dish}: {reward.points} points</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rewards;
