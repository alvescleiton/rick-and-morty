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
          animate-mypulse
        " 
        src="/assets/main.png" 
        alt="Rick and Morty" 
        layout="fill"
      />
    </div>
  )
}

export default Home
