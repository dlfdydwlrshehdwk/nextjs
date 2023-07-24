import { connectDB } from '@/util/database'

export default async function handler(요청, 응답){

    
    if(요청.method == 'POST'){

        console.log(요청.body)
        if(요청.body.title == ''){
            return 응답.status(500).json('제목써라')
        }

        // db에 데이터넣기
        const db = (await connectDB).db('forum')
        let result = db.collection('post').insertOne(요청.body)
        return 응답.redirect(302,'/list')

        // 이렇게 사용
        // try{ // 성공하면 되는코드
        //     const db = (await connectDB).db('forum')
        //     let result = db.collection('post').insertOne(요청.body)
        //     return 응답.redirect(302,'/list')
        // }   
        // catch (error) {
        //     // DB에러시 실행할코드
        // }
    }

}