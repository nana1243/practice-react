import TodoTemplate from "./components/TodoTemplate/TodoTemplate";
import TodoInsert from "./components/TodoInsert/TodoInsert";
import TodoList from "./components/TodoList/TodoList";
import {useCallback, useReducer, useRef, useState} from "react";

function createBulkTodos() {
    const array = [];
    for(let i=1;i<=10;i++){
        array.push({
            id : i,
            text : `todo : ${i} 번째`,
            checked : false
        })
    }
    return array;
}

function todoReducer(todos, action){
    switch (action.type){
        case 'INSERT':
            return todos.concat(action.todo)

        case 'REMOVE':
            return todos.filter(todo => todo.id !== action.id)

        case 'TOGGLE':
            return todos.map(todo =>  todo.id === action.id ? {...todo, checked: !todo.checked} : todo)
    }
}

function App() {
    const [todos, dispatch] = useReducer(todoReducer,undefined,createBulkTodos);
    const nextId = useRef(11);
    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        }
        dispatch({type : 'INSERT', todo})
        nextId.current += 1

    }, []);

    const onRemove = useCallback(id => {
        dispatch({type : 'REMOVE' , id})
    }, [])

    const onToggle = useCallback(id => {
        dispatch({type : 'TOGGLE' , id})
    }, [])

    return (
        <div className="App">
            <TodoTemplate>
                <TodoInsert onInsert={onInsert}/>
                <TodoList
                    todos={todos}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            </TodoTemplate>
        </div>
    );
}

export default App;
