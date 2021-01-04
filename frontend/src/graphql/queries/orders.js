import { gql } from '@apollo/client';

export const ALL_ORDERS = gql`{
  orders {
    id
    client
    totalProducts
    totalPrice
    description
    products {
    	name
      count
      price
      totalPrice
  	}
  }
}`;

export const GET_ORDER = gql`
query getOrder($id: ID!) {
  order(id: $id) {
    id
    client
    totalProducts
    totalPrice
    description
    products {
      name
      count
      price
      totalPrice
    }
  }
}
`;