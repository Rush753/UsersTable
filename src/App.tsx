import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Counter from './components/Counter';
import Table from './components/Table';

  const App:React.FC = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    axios.get('https://60a2772d745cd7001757718e.mockapi.io/users')
    .then((response) => {
      setUsers(response.data);
    })
  }, [])

  const addUser = () => {
    axios.put('https://60a2772d745cd7001757718e.mockapi.io/users/:' + Date.now())
    .then(() => {
      axios.get('https://60a2772d745cd7001757718e.mockapi.io/users')
      .then((response) => {
        setUsers(response.data);
      })
    })
  }

  return (
    <div className="App">
      <Table
      users={users}
      page={page}
      addUser={addUser}
      />
      <Counter
       users={users}
       page={page}
       setPage={setPage}
      />
    </div>
  );
}

export default App;
