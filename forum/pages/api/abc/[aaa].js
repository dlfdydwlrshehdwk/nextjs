import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'

export default async function handler(요청,응답){
    console.log(요청.query)
    console.log(요청.query.aaa)
    const db = (await connectDB).db('forum')
            let result = db.collection('post').deleteOne(
                {_id : new ObjectId(요청.query.aaa) }
                )
    return 응답.status(200).json()
}