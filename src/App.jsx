import { useState } from 'react'
import './App.css'
import UsersInput from './components/Users/UsersInput/UsersInput'
import UserList from './components/Users/UserList/UserList'
import Card from './components/UI/Card'
function App() {
  const user=[{
      username:'mahantu',
      age:21,
  }]
  const [users, setUsers] = useState(user)

  const SendUserInput=(UserInput)=>{
    console.log(UserInput)
    setUsers([
      UserInput,
      ...users,
    ])
  }

  return (
    <div className='App'>
      <Card className="user-input">
          <UsersInput  SendUserInput={SendUserInput} />
      </Card>
      
      <Card className="user-list">
          <UserList users={users} />
      </Card>
      
    </div>
    
  )
}

export default App
