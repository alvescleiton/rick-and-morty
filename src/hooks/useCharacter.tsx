import { gql, useQuery } from "@apollo/client"

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      species
      status
      image
    }
  }
`

export const useCharacter = (id: string | string[] | undefined) => {
  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: {
      id
    }
  })

  return {
    error, 
    data,
    loading,
  }
}