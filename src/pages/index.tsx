import { useEffect, useState } from 'react'
import { Intro } from '../components/Intro'
import { CharacterList } from '../components/Character/characterList'

const Home = () => {
  const [intro, setIntro] = useState(true)

  useEffect(() => {
    (() => {
      setTimeout(() => {
        setIntro(false)
      }, 4500)
    })()
  }, [intro])

  return intro ? <Intro /> : <CharacterList />
}

export default Home
