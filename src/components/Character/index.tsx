import Image from 'next/image'

interface Character {
  name: string
  image: string
  gender: string
  status: string
}

interface Props {
  character: Character
}

export function Character({ character }: Props) {
  return (
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
        <span className="block">Gender: {character?.gender}</span>
        <span className="block">Status: {character?.status !== "unknown" ? character?.status : "?"}</span>
      </div>
    </div>
  )
}