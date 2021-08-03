import { useFetch } from '../hooks/useFetch';
import { useRef } from 'react';
import { useHistory } from 'react-router';

export default function CreateDefault () {
  const days = useFetch('http://localhost:3001/days');
  const history = useHistory();
  const onSubmit = (e) =>{
    e.preventDefault();

    fetch('http://localhost:3001/words/', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        day : Number(dayRef.current.value),
        eng : engRef.current.value,
        kor : korRef.current.value,
        isDone : false
      })
    })
    .then(res=>{
      if(res.ok){
        alert('단어가 추가되었습니다.');
        console.log(history)
        history.push(`/day/${dayRef.current.value}`)
      }
    })
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className='input_area'>
        <label>English</label>
        <input type='text' placeholder='computer' ref={engRef} />
      </div>
      <div className='input_area'>
        <label>한국어</label>
        <input type='text' placeholder='컴퓨터' ref={korRef} />
      </div>
      <div className='input_area'>
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(e=><option key={e.id} value={e.day}>{e.day}</option>)}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}