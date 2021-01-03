import { gql } from '@apollo/client';

export const ALL_USERS = gql`{
  users {
    id,
    username
  }
}`;