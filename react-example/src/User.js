import React, {useEffect} from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import {getUser, useUsersDispatch, useUsersState} from "./context/UsersContext";
// import useAsync from "./hooks/useAsync";
//
// async function getUser({id}) {
//     const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     return response.data;
// }

export default function User({id}) {
    // const {data: user, error, isLoading} = useAsync({
    //     promiseFn : getUser,
    //     id,
    //     watch: id
    // });
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    useEffect(() => {
        getUser(dispatch, id);
    }, [dispatch, id]);

    const { data: user, loading, error } = state.user;

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생하였습니다.</div>;
    if (!user) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email:</b>{user.email}
            </p>
        </div>
    )
}
