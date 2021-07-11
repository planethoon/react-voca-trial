import { useState } from 'react'

export default function Word( { e } ) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(e.isDone);

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type='checkbox' checked={isDone} onChange={()=> setIsDone(!isDone)} />
      </td>
      <td>
        {e.eng}
      </td>
      <td>
        {isShow && e.kor}
      </td>
      <td>
        <button onClick={()=>setIsShow(!isShow)}>뜻 {isShow ?'숨기기' : '보기'}</button>
        <button className='btn_del'>삭제</button>
      </td>
    </tr>
  )
}
