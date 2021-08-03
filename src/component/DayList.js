import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

export default function DayList() {
  const days = useFetch('http://localhost:3001/days');

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
