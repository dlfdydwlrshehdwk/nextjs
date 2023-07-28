import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'

export default async function handler(요청,응답){
    if(요청.method == 'POST'){

        let 바꿀거 = {
             title : 요청.body.title, 
             content : 요청.body.content
            }
        const db = (await connectDB).db('forum')
        // let result = db.collection('post').updateOne(
        //     {어떤document수정할건지},
        //     {$set : {수정할내용}})


        // console.log('222',요청.body)
        let result = db.collection('post').updateOne(
            {_id : new ObjectId(요청.body._id) },
            {$set : 바꿀거}
        )
        응답.redirect(302,'/list')
    }
}