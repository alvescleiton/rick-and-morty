import Link from "next/link"
import { useCharacter } from "../../../hooks/useCharacter"
import { useRouter } from 'next/router'

const Detail = () => {
  const router = useRouter()
  const { id } = router.query

  const {error, data, loading} = useCharacter(id)

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>
  }

  if (error) {
    return <div className='flex justify-center items-center h-screen'>Something went wrong!</div>
  }

  return (
    <>
      <h1>{data?.character?.name}</h1>
      <br />
      <Link href={'/'}>
        <a>Back</a>
      </Link>
    </>
  )
}

export default Detail