import { gql } from '@apollo/client';

export const ALL_CLIENTS = gql`{
  clients {
    id
    username
  }
}`;