import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
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

export default Home
