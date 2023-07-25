import { connectDB } from '@/util/database'
import Link from 'next/link'

export default async function Home() {

  // const client = await connectDB;
  // const db = client.db("forum")
  const db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray()
  // 역순 하는법
  let result2 = await db.collection('post').find().sort({'_id' : -1}).toArray()
  // 갯수 몇개만 가져오기
  let result3 = await db.collection('post').find().sort({'_id': -1}).limit(5).toArray()

  console.log(result3)
  return (
    <>
      <h1>프론트엔드 개발자 하고싶다</h1>
      <section className='fe_forum_sec'>
        <h4>
          프론트엔드 게시판
        </h4>
        <div>
          <ul>
            {
              result3.map((x,i)=>
                <li key={i}>
                  <Link href={'/detail/' + x._id}>
                    {x.title}
                  </Link>
                </li>
              )
            }
          </ul>
        </div>

      </section>
    </>

  )
}
