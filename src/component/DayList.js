import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function DayList() {
  const [days, setDays] = useState([]);


  useEffect(()=> {
    fetch('http://localhost:3001/days')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setDays(data)
    })
  }, [])

  return( 
    <div>
      <ul className='list_day'>
        {days.map( e => (
          <li key={e.id}><Link to={`/day/${e.day}`}>Day {e.day}</Link></li>
        ))}
      </ul>
    </div>
  )
}
