export default function handler(요청,응답){

    // 쿼리스트링 테스트 ListItem.js 랑 연동
    console.log(요청.query)
    return 응답.status(200).json()
}