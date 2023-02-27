
import './App.css'
import { useState, useEffect } from 'react'
import FormUser from './components/FormUser'
import UserList from './components/UserList'
import axios from 'axios'


function App() {

  const [ users, setUsers ] = useState([])
  const [ userDataUpdate, setUserDataUpdate ] = useState(null)

  useEffect( () => {

    axios.get( "https://users-crud-oyhq.onrender.com/users" )
    .then( resp => setUsers(resp.data))
    .catch(error => console.error(error))

  }, [])

  const getApiData = () => {

    axios.get( "https://users-crud-oyhq.onrender.com/users" )
    .then( resp => setUsers(resp.data))
    .catch(error => console.error(error))
  }

  const addUser = (data) => {    
   axios
   .post("https://users-crud-oyhq.onrender.com/users", data)
   .then( () => getApiData())
   .catch( error => console.error(error))    
  }

  const deleteUser = (userId) => {        
 
    axios
    .delete(`https://users-crud-oyhq.onrender.com/users/${userId}/`)
    .then( () => getApiData() )
    .catch( error => console.error(error))

  }

  const selectUser = (userData) => {
    setUserDataUpdate(userData)
  }
  const updateUser= (editedUser) => {
    
    axios
    .put(`https://users-crud-oyhq.onrender.com/users/${editedUser.id}/`, editedUser)
    .then( ()=> getApiData() )
    .catch( error => console.error(error))
    
    setUserDataUpdate(null)
  }

  return (
    <div className="App">
      <FormUser 
      createUserData={ (data) => addUser(data) }
      userSelectedData={ userDataUpdate }
      updateUser={updateUser}
      />
      <UserList 
      users={users}
      deleteUser={deleteUser}
      selectUser={selectUser}
      />

    
    </div>
  )
}

export default App

