import { gql } from '@apollo/client';

export const UPDATE_PRODUCT = gql`
mutation updateProduct($id: ID! $product: ProductUde!) {
    updateProduct(id: $id product: $product) {
      id
      name
      price
      cover
    }
  }
`;