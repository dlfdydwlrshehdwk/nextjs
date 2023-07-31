'use client'

import Link from 'next/link'

export default function ListItem(props){

    let result = props.res

    // console.log(result)
    return(
        <>
        {
            result.map((x,i)=>
            <div className="list-item" key={i}>
                    <Link href={'/detail/' + x._id.toString()}>
                        <h4>{x.title}</h4>
                    </Link>
                    <Link href={'/edit/' + x._id.toString()}>수정하기</Link>
                    
                    <span 
                    onClick={(e)=>{
                        // body값을 줘서 삭제하기 + 애니메이션주기
                        // fetch('/api/post/del', {
                        //     method : 'DELETE',
                        //     body : x._id.toString()
                        // })
                        // // .then((r) => r.json())
                        // .then(()=>{
                        //     // console.log(1234)
                        //     e.target.parentElement.style.opacity = 0;
                        //     setTimeout(()=>{
                        //         e.target.parentElement.style.display = 'none';
                        //     },1000)
                        // })

                        // url뒤에 ? 데이터명 = 값 입력가능
                        // query string이라고 하고 읽을때는 요청.query
                        // 장점 : 간단함 , GET요청으로 데이터 전송가능
                        // 단점 : 데이터가 많으면 더러움
                        // fetch('/api/test?name=kim&age=20')
                        // fetch('/api/test?methods=DELETE&body=' + x._id)

                        // URL parameter 사용
                        fetch('/api/abc/' + x._id)
                        .then(
                            // 새로고침
                            location.reload()
                        )
                    }}
                    >삭제하기</span>
                    <p>{x.content}</p>
                </div>
            )    
        }
        </>
    )
}