'use client'

import { useRouter } from 'next/navigation'

export default function DetailLink(){
    let router = useRouter()
    return(
        <button onClick={()=>{ router.push('/list') }}>버튼</button>
        // router 다양한 기능들
        // router.push('/어쩌구') /어쩌구로 이동
        // router.back() 뒤로가기
        // router.forwadr() 앞으로가기
        // router.refresh() 새로고침 (이전과 바뀐부분만 분석하여)
        // router.prefetch('/어쩌구') /어쩌구의 내용을 미리 로드
    )
}