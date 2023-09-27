import Image from 'next/image'
import { useEffect, useState } from 'react'
import characters from '../service/characters.json'

const Home = () => {
  const [intro, setIntro] = useState(true)

  useEffect(() => {
    (() => {
      setTimeout(() => {
        setIntro(false)
      }, 500)
    })()
  }, [intro])

  if (intro) {
    return (
      <div className="flex justify-center min-h-screen">
        <Image 
          className="
            object-cover 
            opacity-70 
            blur-sm 
            brightness-150 
            -z-10
            animate-myhue
          " 
          src="/assets/main.png" 
          alt="Rick and Morty" 
          layout="fill"
        />

        <p className="
          self-center 
          text-purple-800 
          text-4xl/[40px] 
          lg:text-5xl/[50px] 
          text-center
          bg-white
          bg-opacity-50
          w-full
          py-10
          shadow-xl
          backdrop-blur-[2px]
          -skew-y-3
        ">
          Rick
          <small className="block py-2 text-xl lg:text-3xl">and</small>
          Morty
        </p>
      </div>
    )
  }

  if (!intro) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 min-w-[320px] max-w-5xl m-auto p-3 sm:p-5 gap-3 sm:gap-5">
        {characters.map((character, i) => (
            <div key={i} className="aspect-square bg-slate-100 rounded-md">
              <div className="relative w-full aspect-square">
                <Image 
                  src={character.image}
                  alt={character.name}
                  layout="fill"
                  className="rounded-t-md"
                  priority
                />
              </div>
              <div className="text-xs sm:text-sm text-slate-500 p-2">
                <h3 className="text-slate-800">Name: {character.name}</h3>
                <span className="block">Gender: {character.gender}</span>
                <span className="block">Status: {character.status !== "unknown" ? character.status : "?"}</span>
              </div>
            </div>
        ))}
      </div>
    )
  }
}

export default Home
