import React , {useState ,useEffect} from  'react';

export default () => {
    const [users , setUsers] = useState([]);
    
    useEffect(() => {
        const fetchUsers = async () => {
            const URL = 'https://jsonplaceholder.typicode.com/users';

            const response = await fetch(URL);
            
            const users = await response.json();

            setUsers(users);
        }

        fetchUsers();
    },[]);

    return (
        <div>
            {
                users && users.length > 0 ? users.map( user => <div>{user.name}</div>) : <div>Loading!!!</div>
            }
        </div>
    )
};
