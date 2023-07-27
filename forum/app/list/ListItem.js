'use client'

import Link from 'next/link'

export default function ListItem(props){

    let result = props.res

    return(
        <>
        {
            result.map((x,i)=>
            <div className="list-item" key={i}>
                    <Link href={'/detail/' + x._id.toString()}>
                        <h4>{x.title}</h4>
                    </Link>
                    <Link href={'/edit/' + result[i]._id.toString()}>수정하기</Link>
                    
                    <span 
                    onClick={(e)=>{
                        fetch('/api/post/del', {
                            method : 'DELETE',
                            body : result[i]._id.toString()
                        })
                        // .then((r) => r.json())
                        .then(()=>{
                            console.log(1234)
                            // e.target.parentElement.style.opacity = 0;
                        })
                    }}
                    >삭제하기</span>
                    <p>{x.content}</p>
                </div>
            )    
        }
        </>
    )
}