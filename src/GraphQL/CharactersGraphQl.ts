import gql from "graphql-tag";

export const FETCH_CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        episode {
          name
        }
      }
    }
  }
`;

export const CHARACTER_BY_ID = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        name
      }
    }
  }
`;
