import React from 'react';
import Users from "./Users";
import {UsersProvider} from "./context/UsersContext";

const UsersIndex = () => {
    return (
        <UsersProvider>
            <Users />
        </UsersProvider>
    )
};

export default UsersIndex;
