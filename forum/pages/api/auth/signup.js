import { connectDB } from '@/util/database';
// 암호화 해주는 라이브러리 - npm install bcrypt
import bcrypt from 'bcrypt'
export default async function handler(요청,응답){
    if (요청.method == 'POST'){
        // console.log(요청.body)
        // -> [Object: null prototype] {
        //     name: 'rwrw',
        //     email: 'wdd@lawd.com',
        //     password: 'awdawd2'
        //   }

        // 암호화 하는법 숫자는 별의미x 아무숫자나
        let hash = await bcrypt.hash(요청.body.password, 10)
        // console.log(hash)
        // -> $2b$10$XZReAa5jk6vXSS1TjD1/HezsNmaRECSzUW8/NzXGwATD6eYEIdqWK
        요청.body.password = hash
        let db = (await connectDB).db('forum');
        await db.collection('user_cred').insertOne(요청.body)

        응답.status(200).json('가입완료')
        

    }

}