'use client'

import { useState } from 'react'

export default function List() {

  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  let [ss ,setSs] = useState([0,0,0])

    return (
      <div>
        <h4 className='title'>상품목록</h4>

        {
          상품.map((x,i)=>
              <div className='food' key={i}>
                <img src={'/food' + i + '.png'} />
                <h4>{x}</h4>
                <span>{ss[i]}</span>
                <button onClick={()=>{
                  let copy
                  copy = [...ss]
                  copy[i]++
                  setSs(copy)
                }}>+</button>
                <button onClick={()=>{
                  let copy 
                  copy = [...ss];
                  copy[i]--;
                  copy[i] < 0 ? copy[i] = 0 : null
                  setSs(copy)
                }}>-</button>
              </div>
          )
        }
      </div>
    )
  }
  