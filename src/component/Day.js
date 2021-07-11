import Word from "./Word"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Day() {
  const day = useParams().key

  const [words,setWords] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3001/words?day=${day}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setWords(data)
    })
  }, []);
  

  return (
    <div>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map(e => (
              <Word e={e} key={e.id} />
            ))
          }
        </tbody>
      </table>
    </div>
  )

}