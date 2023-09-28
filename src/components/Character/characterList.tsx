import { Character } from '.'
import characters from '../../service/characters.json'

export function CharacterList() {
  return (
    <div className="container min-w-[320px] max-w-5xl m-auto">
      <h1 className="p-5 pb-2 text-3xl text-orange-600">List of Characters</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 m-auto p-5 gap-3 sm:gap-5">
        {characters.map((character, i) => (
          <Character 
            key={i}
            character={character}
          />
        ))}
      </div>
    </div>
  )
}