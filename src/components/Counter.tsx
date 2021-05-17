import '../App.css';
import React, {ReactElement} from 'react'

interface CounterProps {
  users: any[];
  page: number;
  setPage: (newValue: number) => void
}

const Counter: React.FC<CounterProps> = ({users, page, setPage}): ReactElement<any, any> => {
  const cоunt = Math.ceil(users.length/5);
  const increment = () => {
    let newValue = page
    if(page < cоunt) {
      newValue = page +1 
    }

    setPage(newValue)
  }
  const discrement = () => {
    let newValue = page
    if (newValue > 1) {
      newValue = page - 1 
    }

    setPage(newValue)
  }

  return (
      <div className='counter-wrepper'>
        <button onClick={discrement}>-</button>
        <div className='counter-value' >{page}</div>
        <button onClick={increment}>+</button>
      </div>
  );
}

export default Counter;