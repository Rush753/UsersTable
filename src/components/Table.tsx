import '../App.css';
import React, {ReactElement} from 'react'

interface TableProps {
  users: any[];
  page: number;
  addUser: () => void
}

const Table: React.FC<TableProps> = ({users, page, addUser}): ReactElement<any, any> => {
  const getItems = () => {
    if(users && users.length) {
      let shownItems:any[] = []
      for(let i = 0; i < 5; i++) {
        const position: number = i + (page -1) * 5
        if (users.length > position) {
          shownItems.push(users[position]);
        }
      }

      interface itemProps {
        id: number;
        name: string;
        email: string;
        position: string;
      }
  
      return shownItems.map((item: itemProps) => {
        return <div key={item.id} className='table-line'>
           <div className='table-block'>{item.name}</div>
            <div className='table-block'>{item.email}</div>
            <div className='table-block'>{item.position}</div>
        </div>
      })
    }
  }

  return (
    <>
      <div className='table-title'>Employess</div>
      <div className='table-wrepper'>
        <div className='table-header'>
          <div className='table-block'>Name</div>
          <div className='table-block'>Email</div>
          <div className='table-block'>Position</div>
        </div>
        <div className='table-body'>
         {getItems()}
        </div>
        <div onClick={addUser} className='addNew'>+ New</div>
      </div>
    </>
  );
}

export default Table;
