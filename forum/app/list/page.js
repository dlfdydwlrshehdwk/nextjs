import { connectDB } from '@/util/database'
import Link from 'next/link'
import DetailLink from './DetailLink'

export default async function List(){

    const db = (await connectDB).db('forum')
    let result = await db.collection('post').find().toArray()

    console.log(result)

    return (
        <div className="list-bg">
            {
                result.map((x,i)=>
                <div className="list-item">
                        <Link href={'/detail/' + x._id}>
                            <h4>{x.title}</h4>
                        </Link>
                        <DetailLink />
                        <p>{x.content}</p>
                    </div>
                )    
            }
      
        </div>
    )
}