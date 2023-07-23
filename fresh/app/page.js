import Link from 'next/link'

export default function Home() {

  let name = 'park'

  return (
    <div>
      

      <h4 className='title'>애플프레쉬</h4>
      <p className='title_sub'>{name}</p>
    </div>
  )
}
