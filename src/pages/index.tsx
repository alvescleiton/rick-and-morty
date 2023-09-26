import Image from 'next/image'
import { useEffect, useState } from 'react'

const Home = () => {
  const [intro, setIntro] = useState(true)

  useEffect(() => {
    (() => {
      setTimeout(() => {
        setIntro(false)
      }, 500)
    })()
  }, [intro])

  const list = [
    {
      "id": "1",
      "name": "Rick Sanchez",
      "gender": "Male",
      "status": "Alive",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      "id": "8",
      "name": "Adjudicator Rick",
      "gender": "Male",
      "status": "Dead",
      "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg"
    },
    {
      "id": "15",
      "name": "Alien Rick",
      "gender": "Male",
      "status": "unknown",
      "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg"
    },
    {
      "id": "19",
      "name": "Antenna Rick",
      "gender": "Male",
      "status": "unknown",
      "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
    },
    {
      "id": "22",
      "name": "Aqua Rick",
      "gender": "Male",
      "status": "unknown",
      "image": "https://rickandmortyapi.com/api/character/avatar/22.jpeg"
    },
    {
      "id": "48",
      "name": "Black Rick",
      "gender": "Male",
      "status": "Alive",
      "image": "https://rickandmortyapi.com/api/character/avatar/48.jpeg"
    },
    {
      "id": "56",
      "name": "Bootleg Portal Chemist Rick",
      "gender": "Male",
      "status": "Dead",
      "image": "https://rickandmortyapi.com/api/character/avatar/56.jpeg"
    },
    {
      "id": "69",
      "name": "Commander Rick",
      "gender": "Male",
      "status": "Dead",
      "image": "https://rickandmortyapi.com/api/character/avatar/69.jpeg"
    },
    {
      "id": "72",
      "name": "Cool Rick",
      "gender": "Male",
      "status": "Alive",
      "image": "https://rickandmortyapi.com/api/character/avatar/72.jpeg"
    },
    {
      "id": "74",
      "name": "Cop Rick",
      "gender": "Male",
      "status": "Alive",
      "image": "https://rickandmortyapi.com/api/character/avatar/74.jpeg"
    }
  ]

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
      <div className="flex flex-wrap justify-between w-[320px] sm:w-[640px] lg:w-[1024px] px-3 m-auto gap-2">
        {list.map((item, i) => (
            <div key={i} className="w-[48%] sm:w-[32%] lg:w-[24%] aspect-square mb-3 bg-slate-100 rounded-md">
              <div className="relative w-full aspect-square">
                <Image 
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  className="rounded-t-md"
                  priority
                />
              </div>
              <div className="text-xs sm:text-sm text-slate-500 p-2">
                <h3 className="text-slate-800">Name: {item.name}</h3>
                <span className="block">Gender: {item.gender}</span>
                <span className="block">Status: {item.status !== "unknown" ? item.status : "?"}</span>
              </div>
            </div>
        ))}

        <div className="w-[48%] h-0 sm:w-[32%] lg:w-[24%] aspect-square mb-1"></div>
        <div className="w-[48%] h-0 sm:w-[32%] lg:w-[24%] aspect-square mb-1"></div>
        <div className="w-[48%] h-0 sm:w-[32%] lg:w-[24%] aspect-square mb-1"></div>
        <div className="w-[48%] h-0 sm:w-[32%] lg:w-[24%] aspect-square mb-1"></div>
      </div>
    )
  }
}

export default Home
