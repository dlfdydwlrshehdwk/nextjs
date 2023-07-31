'use client'

import { useEffect, useState } from 'react'
import $ from 'jquery'
// 여기에서 회원 중복을 확인해야함
// 서버데이터를 가져와야함 
// 키보드를 칠때마다 확인 
// 중복이나 이상하면 빨간글씨 나오게 
// 다 정상일때 가입요청누르면 서버로 전송되게
export default function Regi(props){

    let [ok, setOk] = useState(0)
    let [id,setId] = useState('')

    let result = props.db

    // console.log(result)
    // [
    //     {
    //       _id: '64c6df8120349bd661f0dd04',
    //       name: '초코칩쿠끼',
    //       email: 'wdd@lawd.com',
    //       password: '$2b$10$mwpRlAoyDobjCtXIYvjWte..MJyJTUM/w29dCI2IYYToBneRJTEyW'
    //     }
    //   ]
            
    function idcheck(a){ // a는 입력할때 아이디값

    }


    // 아이디가 비어있으면 ... + 아이디 중복체크
    function asd(a){
            a == '' ? setId('아이디를입력') : setId('')

            // 이거아닌거같은데 하씨팔 감이안옴
            // 아니 find({},{name : 1 }) 이거왜안되냐고씨이팔씨발씨발
            for(let i = 0; i<result.length; i++){
                result[i].name == a ? setId(
                    '중복된아이디입니다'
                ) : null
            }
    }










    return(
        <div>
          <form method="POST" action="/api/auth/signup">
            <div>
            <input className='name' name="name" type="text" placeholder="이름" 
            onBlur={(e)=>{
                // e.target.value == '' ? 
                // setId('아이디를입력하세요') : setId('')
                asd(e.target.value)
            }}
            onChange={(e)=>{
                idcheck(e.target.value)
            }}/> 
            <span className='blankname'>{id}</span>
            </div>
            <div>
            <input className='pw' name="password" type="password" placeholder="비번" />
            <span className='blankpw'></span>
            </div>
            <div>
            <input className='mail' name="email" type="text" placeholder="이메일" />
            <span className='blankemail'></span>
            </div>
            <button type="submit">가입요청</button>
          </form>
      </div>
    )
}