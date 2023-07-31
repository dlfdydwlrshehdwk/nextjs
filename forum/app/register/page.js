import { connectDB } from '@/util/database'
import Regi from './regi'

// 회원가입 페이지 
// 디비에서 가입자목록을 배열로 따서 프롭스로 넘겼음 Regi컴포한테
// Regi에서 애들체크해줘야됨
export default async function Register() {

    let db = (await connectDB).db('forum');
    let user = db.collection('user_cred')
    let result = await db.collection('user_cred').find().toArray()
    let result2 = await user.find({},{ name : 0 }).toArray()

    // console.log('db',result)
    // -> db [
    //     {
    //       _id: new ObjectId("64c6df8120349bd661f0dd04"),
    //       name: '초코칩쿠끼',
    //       email: 'wdd@lawd.com',
    //       password: '$2b$10$mwpRlAoyDobjCtXIYvjWte..MJyJTUM/w29dCI2IYYToBneRJTEyW'
    //     }
    //   ]

    return (
        <Regi db={result} dd={result2} />
    )
  }