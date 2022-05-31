import React,{useState} from "react";
import Users from "../../components/users/Users";

const URL = "https://jsonplaceholder.typicode.com/users"

function MainPage () {

    const [users, setUsers] = useState([])

    const getUsers = () => {
        fetch(URL)
            .then(response => response.json())
            .then(date => setUsers(date))
    }

    return (
        <>
            <Users propsUsers={users}/>
            <button onClick={getUsers} className="button">get users</button>
        </>
    )
    
}

export default MainPage;