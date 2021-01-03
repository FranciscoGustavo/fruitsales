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