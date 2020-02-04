import React, {useState} from 'react';
import axios from 'axios';
// import useAsync from './hooks/useAsync';
import User from "./User";
import { useAsync } from 'react-async';
import {getUsers, useUsersDispatch, useUsersState} from "./context/UsersContext";

// async function getUsers() {
//     const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/users'
//     );
//     return response.data;
// }

function Users() {
    const [userId, setUserId] = useState(null);
    // const {data: users, error, isLoading, run} =  useAsync({deferFn : getUsers});
    const state = useUsersState();
    const dispatch = useUsersDispatch();
    const {data: users, loading, error} = state.users;

    const fetchData = () => {
        getUsers(dispatch);
    };

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생하였습니다.</div>;
    if (!users) return <button onClick={fetchData}>다시불러오기</button>;

    return (
        <ul>
        {
            users.map(user => (
            <li
                key={user.id}
                onClick={() => setUserId(user.id)}
                style={{cursor : 'pointer'}}
            >
                {user.username} {user.name}
            </li>
            ))
        }
            <button onClick={fetchData}>다시불러오기</button>
            {userId && <User id={userId} />}
        </ul>
    );
}

export default Users;
