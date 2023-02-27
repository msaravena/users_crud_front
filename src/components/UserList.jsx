
const UserList = ( {users, deleteUser, selectUser} ) => {

    return (
        <ul>
        {
            users?.map( (userElement, index) => (
                <li key={`user-${index}`}>
                    <h4><span>Nombre:</span>
                    {userElement.first_name} {userElement.last_name}</h4>
                    <h4><span>Email:</span>
                    {userElement.email}</h4>                    
                    <h4><span>Fecha de nacimiento:</span>
                    {userElement.birthday}</h4>                    
                    <button onClick={ () => deleteUser(userElement.id)}>Eliminar</button>
                    <button onClick={ () => selectUser(userElement) }>Seleccionar</button>
                </li>
            ) )
        }
    </ul>
    )

}

export default UserList