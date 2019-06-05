import { gql } from 'apollo-boost'

export const USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      age
    }
  }
`
