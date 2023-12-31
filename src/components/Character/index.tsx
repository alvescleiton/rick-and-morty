import Image from 'next/image'
import Link from 'next/link'

interface Character {
  id: string
  name: string
  image: string
  species: string
  status: string
}

interface Props {
  character: Character
}

export function Character({ character }: Props) {
  return (
    <Link href={`/character/${character.id}`}>
      <a>
        <div className="aspect-square bg-slate-100 rounded-md">
          <div className="relative w-full aspect-square">
            <Image 
              src={character?.image}
              alt={character?.name}
              layout="fill"
              className="rounded-t-md"
              priority
            />
          </div>
          <div className="text-xs sm:text-sm text-slate-500 p-2">
            <h3 className="text-slate-800">{character?.name}</h3>
            <span className="block">Species: {character?.species !== "unknown" ? character?.species : "?"}</span>
            <span className="block">Status: {character?.status !== "unknown" ? character?.status : "?"}</span>
          </div>
        </div>
      </a>
    </Link>
  )
}