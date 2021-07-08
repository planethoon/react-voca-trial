import './Hello.css';
import {useState} from 'react';


const Hello = (isgood) => {
console.log(isgood)

const [name, setName] = useState('Sunghoon');
const [age, setAge] = useState(isgood.age);
const msg = isgood.age > 19 ? `성인입니다.` : `미성년자입니다.`;

const changeName = () => {
  const newName = name === 'Sunghoon' ? 'Yujin' : 'Sunghoon';
  setName(newName);
  setAge(age + 1)
}

  return (
    <div>
      <h2>{name}({age}): {msg}</h2>
      <button onClick={changeName}>Change!</button>
    </div>
  )
};

export default Hello;