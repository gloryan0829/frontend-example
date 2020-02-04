import React from 'react';
import TodoTemplate from "./todo/TodoTemplate";
import TodoHead from "./todo/TodoHead";
import TodoList from "./todo/TodoList";
import TodoCreate from "./todo/TodoCreate";
import {TodoProvider} from "../context/TodoContext";

const TodoIndex = () => {
    return (
        <TodoProvider>
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
    )
};

export default TodoIndex
