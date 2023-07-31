import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

export default async function handler(요청,응답){

    // console.log('이거',요청.query)
    // -> 이거 { aaa: '64c6d22fdb8426b9d47e56bc' }

    let session = await getServerSession(요청,응답,authOptions)
    // console.log('세션',session)
    // -> 세션 {
    //     user: {
    //       name: 'dlfdydwlrshehdwk',
    //       email: 'fkrmsk147@naver.com',
    //       image: 'https://avatars.githubusercontent.com/u/118067728?v=4'
    //     },
    //     expires: '2023-08-29T21:12:20.416Z'
    //   }
    const db = (await connectDB).db('forum')

    let 찾은거 = await db.collection('post').findOne({_id : new ObjectId(요청.query.aaa)})

    console.log('찾은거',찾은거)
    // - > 찾은거 {
    //     _id: new ObjectId("64c6d11fdb8426b9d47e56ba"),
    //     title: '12',
    //     content: '12ㄷ',
    //     author: 'fkrmsk147@naver.com'
    //   }


            


    if(찾은거.author == session.user.email){
        let result = db.collection('post').deleteOne(
                {_id : new ObjectId(요청.query.aaa) }
                )
                return 응답.status(200).json('삭제완료')
    } 
    else {
        return 응답.status(500).json('현재유저와 작성자 불일치')
    }

}