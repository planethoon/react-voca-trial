import { useState } from 'react'

export default function Word( { e } ) {
  const [word, setWord] = useState(e);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(e.isDone);

  function toggleDone() {
    // setIsDone(!isDone)
    fetch(`http://localhost:3001/words/${e.id}`, {
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify ({
        ...e,
        isDone : !isDone
      })
    })
    .then(res=>{
      if(res.ok){
        setIsDone(!isDone)
      }
    })
  }
  function del(){
    if(window.confirm('정말 삭제하시겠습니까?')){
      fetch(`http://localhost:3001/words/${e.id}`,{
        method : 'DELETE'
      })
      .then(res=>{
        if(res.ok){
          setWord({id:0})
        }
      })

    }
  }
  if(word.id === 0){
    return null;
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type='checkbox' checked={isDone} onChange={toggleDone} />
      </td>
      <td>
        {e.eng}
      </td>
      <td>
        {isShow && e.kor}
      </td>
      <td>
        <button onClick={()=>setIsShow(!isShow)}>뜻 {isShow ?'숨기기' : '보기'}</button>
        <button className='btn_del' onClick={del}>삭제</button>
      </td>
    </tr>
  )
}
