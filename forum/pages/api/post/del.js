import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'

export default async function handler(요청, 응답){

    // 현재쓰이지않는페이지
    if(요청.method == 'DELETE'){

        console.log('이거')

        // console.log(요청.body) -> id나옴
        // try{
        //     const db = (await connectDB).db('forum')
        //     let result = db.collection('post').deleteOne(
        //         {_id : new ObjectId(요청.body) }
        //         )
        //     응답.status(200).json('삭제완료')
        // }
        // catch (error) {
        //     응답.status(500).json('삭제완료')
        // }
        // console.log(result)

        // 만약 result결과가 이상하면 응답.status(500)
        // result 결과가 정상이면 응답.status(200)
    }

}