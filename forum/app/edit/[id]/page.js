import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'

export default async function Edit(props){

    const db = (await connectDB).db('forum')
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id.toString())})

    // await db.collection('post').updateOne({ 수정할게시물정보 }, { $set : { 수정할내용 } })
    // await db.collection('post').updateOne({ 수정할정보 }, { $set : { 수정할내용 } })
    
    // console.log(result)
    return(
        <div className='p-20'>
            <h4>글수정</h4>
            <form action='/api/post/edit' method='POST'>
                {/* <input name="title" value={result.title}></input> */}
                <input name="title" defaultValue={result.title}></input>
                <input name='content' defaultValue={result.content}></input>
                {/* value로 안되면 defaultValue를 사용하면된다고함 */}
                <input style={{display : 'none'}} name="_id" defaultValue={result._id.toString()}/>
                <button type='submit'>수정하기</button>
            </form>
        </div>
    )
}