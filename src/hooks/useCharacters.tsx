import { gql, useQuery } from "@apollo/client"

const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        species
        status
        image
      }
    }
  }
`

export const useCharacters = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS)

  return {
    error, 
    data,
    loading,
  }
}