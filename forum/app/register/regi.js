'use client'

// 여기에서 회원 중복을 확인해야함
// 서버데이터를 가져와야함 
// 키보드를 칠때마다 확인 
// 중복이나 이상하면 빨간글씨 나오게 
// 다 정상일때 가입요청누르면 서버로 전송되게
export default function Regi(props){

    let result = props.db
    // console.log('d',result)
    // [
    //     {
    //       _id: '64c6df8120349bd661f0dd04',
    //       name: '초코칩쿠끼',
    //       email: 'wdd@lawd.com',
    //       password: '$2b$10$mwpRlAoyDobjCtXIYvjWte..MJyJTUM/w29dCI2IYYToBneRJTEyW'
    //     }
    //   ]

    return(
        <div>
          <form method="POST" action="/api/auth/signup">
            <input name="name" type="text" placeholder="이름" /> 
            <input name="password" type="password" placeholder="비번" />
            <input name="email" type="text" placeholder="이메일" />
            <button type="submit">가입요청</button>
          </form>
      </div>
    )
}