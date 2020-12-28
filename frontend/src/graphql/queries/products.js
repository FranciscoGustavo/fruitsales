import { gql } from '@apollo/client';

export const ALL_PRODUCTS = gql`{
  products {
    id
    cover
    name
    price
    unity
  }
}`;