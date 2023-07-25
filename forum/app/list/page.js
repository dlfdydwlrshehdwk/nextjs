import { connectDB } from '@/util/database'
import Link from 'next/link'
import DetailLink from './DetailLink'

export default async function List(){

    const db = (await connectDB).db('forum')
    // 역배열해놨음 - 최신이 가장 위여야 되기때문!
    let result = await db.collection('post').find().sort({'_id' : -1}).toArray()

    console.log(result)

    return (
        <div className="list-bg">
            {
                result.map((x,i)=>
                <div className="list-item">
                        <Link href={'/detail/' + x._id}>
                            <h4>{x.title}</h4>
                        </Link>
                        <DetailLink id={x._id}/>
                        <p>{x.content}</p>
                    </div>
                )    
            }
      
        </div>
    )
}