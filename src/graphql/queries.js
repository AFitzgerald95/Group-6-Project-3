import { gql } from '@apollo/client';

export const GET_MENU_ITEMS = gql`
  query getMenuItems {
    getMenuItems {
      id
      name
      description
      price
    }
  }
`;

export const GET_USER_REWARDS = gql`
  query getUserRewards {
    getUserRewards {
      dish
      points
    }
  }
`;
