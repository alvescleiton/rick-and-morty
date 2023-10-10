import { Character } from '.'
import { useQuery, gql } from '@apollo/client'

const GET_CHARACTERS = gql`
  query {
    characters {
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

export function CharacterList() {
  const { error, loading, data } = useQuery(GET_CHARACTERS)

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>
  }

  if (error) {
    return <div className='flex justify-center items-center h-screen'>Something went wrong!</div>
  }

  const characters = data?.characters?.results

  if (characters.length > 0) {
    return (
      <div className="container min-w-[320px] max-w-5xl m-auto">
        <h1 className="p-5 pb-2 text-3xl text-orange-600">List of Characters</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 m-auto p-5 gap-3 sm:gap-5">
          {characters.map((character: any) => (
            <Character 
              key={character.id}
              character={character}
            />
          ))}
        </div>
      </div>
    )
  } else {
    return <div className='flex justify-center items-center h-screen'>No items to be shown!</div>
  }
}